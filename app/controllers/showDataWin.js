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
	function buttonClicked(){
		$.showDataWin.close();
}
