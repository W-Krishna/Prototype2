$.listView.open();
$.listView.addEventListener("open", function() {
	var actionbar =  require('actionBarAndroid');
	var ab = new actionbar();
	ab.actionbar($.listView);
});
	var userDetails = require('showUserData');
	var user = new userDetails();
	var userData = user.userDetailsInput();
	var userName = userData.userName;
	var userEmail = userData.userEmail;
	var userPhone = userData.userPhone;
	var listSection = [];
	for(i=0;i<10;i++){
		listSection.push({
		 Pic : { image : 'listingImageShort.png'},
		 Title : { text : 'My Listing' + " " + i},
		 Name :  { text : userName  },
		 Email : { text : userEmail },
		 Phone : { text : userPhone }		 
		});
		}
		var section = $.listings;	
		section.setItems(listSection);
		$.listview.sections = [section];
		
		//var listItem = $.listings.getItemAt(1);
		//listItem.properties.color = 'blue';
		
		var listItemClicked = function (e) {
			var listItem = section.getItemAt(e.itemIndex);
			alert(listItem);
			if (listItem) {
				//Ti.App.Properties.setObject('listItemClicked', listItem);
				//module.exports = openItemDetail();
				openItemDetail(listItem);
			}
		}; 
		
	$.listview.addEventListener('itemclick', listItemClicked);
	
	
		var openItemDetail = function (obj){
			
		listViewDetail= Alloy.createController('listingDetail', obj).getView();
			listViewDetail.open();
		} ;

	
