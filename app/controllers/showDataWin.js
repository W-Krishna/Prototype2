$.showDataWin.open();
$.showDataWin.addEventListener("open", function() {
	var actionbar =  require('actionBarAndroid');
	var ab = new actionbar();
	ab.actionbar($.showDataWin);
});
	function showData(){
	var userDetails = require('showUserData');
	var user = new userDetails();
	var userData = user.userDetailsInput();
	$.userName.text = userData.userName;
	$.userEmail.text = userData.userEmail;
	$.userPhone.text = userData.userPhone;
	var userPhone = userData.userPhone;
	}
	function buttonClicked() {
		$.showDataWin.close();
	}
	function getListView() {
		 listview= Alloy.createController('listView', {
      }).getView();
		listview.open();
	}
	function getPhoto() {
		if(Ti.Media.isCameraSupported){
		var overlayView = Ti.UI.createView({ height : "Ti.UI.SIZE"});
		
		overlayView.addEventListener('longclick', function(e) {
				Ti.Media.takePicture();
			});
		
			var userName = Ti.UI.createLabel({
				text : $.userName.text,
				font : { fontSize : '22dp'},
				bottom : 500 ,
				height : Ti.UI.SIZE,
				color : "blue"
			});
			
			
			var userEmail = Ti.UI.createLabel({
				text : $.userEmail.text,
				font : { fontSize : '14dp' },
				bottom : 400 ,
				height : Ti.UI.SIZE,
				color : "blue"
			});
			
			
			var userPhone = Ti.UI.createLabel({
				text : $.userPhone.text,
				font : { fontSize : '14dp' },
				bottom : 300 ,
				height : Ti.UI.SIZE,
				color : "blue"
			});
			
			 var coordinates = Ti.UI.createLabel ({
			 	bottom : 200,
			 	font : { fontSize : '16dp'},
			 	color : 'red'
			 });
			 
			 
			 var compassHeading = Ti.UI.createLabel ({
			 	bottom : 100,
			 	font : { fontSize : '16dp'},
			 	color : 'red'
			 });
			 
			 var degreeNorth = Ti.UI.createLabel({
			 	top : 50,
			 	font :{ fontSize : '20dp', fontWeight : 'bold', fontFamily : 'DroidSans' },
			 	color : 'white'
			 });
			 
			 var direction = Ti.UI.createLabel({
			 	top : 100,
			 	font : { fontSize : '24dp', fontWeight : 'bold', fontFamily : 'DroidSans' },
			 	color : 'white',
			 });
			 
			 
		overlayView.add(userName);
		overlayView.add(userEmail);
		overlayView.add(userPhone);
		overlayView.add(coordinates);
		overlayView.add(compassHeading);
		overlayView.add(degreeNorth);
		overlayView.add(direction);
		
		Ti.Media.showCamera({
			success : function (){
				var toast = Titanium.UI.createNotification({
    				duration: Ti.UI.NOTIFICATION_DURATION_SHORT,
    				message: "Picture saved to gallery"
				});toast.show();
			},
			overlay : overlayView,
			saveToPhotoGallery : true
		});
		
		if(Ti.Geolocation.hasCompass) {
			Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_LOW;
		//	Titanium.Geolocation.distanceFilter = 1; doesn't works in android
			var position = function(e){
				if(e.error) {
					coordinates.text = 'error: ' + e.error;
					Ti.API.info("Code translation: "+translateErrorCode(e.code));
					return;
				}
				
				var longitude = e.coords.longitude;
				var latitude = e.coords.latitude;
				coordinates.text =  'long:' + longitude + ' lat: ' + latitude;
			};
			
			Titanium.Geolocation.addEventListener('location', position);
			 var magneticHeading = function(e) {
				if (e.error)
				{
					compassHeading.text = 'error: ' + e.error;
					return;
				}
				var x = e.heading.x;
				var y = e.heading.y;
				var z = e.heading.z;
				//var compassHeading = e.heading.magneticHeading;
				//var accuracy = e.heading.accuracy;
				var trueHeading = e.heading.trueHeading;
				//var timestamp = e.heading.timestamp;
	
				compassHeading.text = 'x:' + x + ' y: ' + y + ' z:' + z;
				degreeNorth.text = trueHeading;
				
				if(degreeNorth.text > '0' && degreeNorth.text < '90') {
              		direction.text = "NE";
        			} else if(degreeNorth.text == '90') {
             			direction.text = "E";
        			} else if(degreeNorth.text >'90' && degreeNorth.text <'180'){
              			direction.text = "SE";
        			} else if(degreeNorth.text == '180'){
              			direction.text = "S";
        			} else if(degreeNorth.text >'180' && degreeNorth.text < '270'){
	              		direction.text = "SW";
    	    		} else if(degreeNorth.text == '270'){
        	      		direction.text = "W";
        			} else if(degreeNorth.text >'270' && degreeNorth.text < '360'){
              			direction.text = "NW";
        			} else if(degreeNorth.text == '0' || degreeNorth.text == '360'){
              			direction.text = "N";
        			}
				};
				Titanium.Geolocation.addEventListener('heading', magneticHeading);
		}
	}
}
