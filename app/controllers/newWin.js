$.newWin.addEventListener("open", function() {
	var actionbar =  require('actionBarAndroid');
	var ab = new actionbar();
	ab.actionbar($.newWin);
});

function seeWebView() {
	webView= Alloy.createController('webView').getView();
		webView.open();
}

function openUserData(){
	showDatawin= Alloy.createController('showDataWin').getView();
		showDatawin.open();
}

/*function getUserData(file){
	var userDetails = require('showUserData');
	var user = new userDetails();
	var userData = user.userDetailsInput();
	//userName.showUserData();
	alert(userData.userName);
}*/


$.newWin.open();

