$.showDataWin.open();
function showData(){
	var userDetails = require('showUserData');
	var user = new userDetails();
	var userData = user.userDetailsInput();
	var userName = userData.userName;
	
	var userEmail = userData.userEmail;
	var userPhone = userData.userPhone;
	$.userName.text  = userName;
	$.userEmail.text = userEmail;
	$.userPhone.text = userPhone;
	
}
function seThat(){
	alert("okkk");
}
function getPhoto () {
  if(Titanium.Media.isCameraSupported)
  {
  	Titanium.Media.showCamera({
  		success : function (e) {
  								
		  },
		
  		mediaTypes : [Titanium.Media.MEDIA_TYPE_PHOTO],
  		showControls : false,
  		saveToPhotoGallery : true
  	}) ;
  	
 }
 
  else {
  	alert("Your device dosent support camera");
  }
  
}
	function buttonClicked(){
		$.showDataWin.close();
}
