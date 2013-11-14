
function goBack() {
	$.newWin.close();	
}

function seeWebView() {
	webView= Alloy.createController('webView').getView();
		webView.open();
}

function openUserData(){
	showDatawin= Alloy.createController('showDataWin').getView();
		showDatawin.open();
}

function getUserData(file){
	var userDetails = require('showUserData');
	var user = new userDetails();
	var userData = user.userDetailsInput();
	//userName.showUserData();
	alert("otchs");
	alert(userData.userName);
}

$.newWin.open();

