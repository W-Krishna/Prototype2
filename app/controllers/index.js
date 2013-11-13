//ActionBar-This is android specific, won't show up in iOS;
$.index.addEventListener("open", function() {
    if (Ti.Platform.osname === "android") {
        if (!$.index.activity) {
            Ti.API.error("Can't access action bar on a lightweight window.");
        } else {
          var  actionBar = $.index.activity.actionBar;
            if (actionBar) {
                    actionBar.displayHomeAsUp = true; 
                    actionBar.onHomeIconItemSelected = function() {
                	alert("I am action bar in android");
                    Ti.API.info("Home icon clicked!");
                };
            }
        }
    }
});

function homeMenuClicked() {
       $.index.open();
}

// Ensure menu is displayed
function doOpen(e) {
    $.win.invalidateOptionsMenu();
}

function buttonClicked() {
$.helloLabel.text="This window implements Action bar,menu bar, labels, text field. PLease enter your credentials and submit them to go further";	
$.userInfoFormTitle.text="Please enter your personal information below";
$.userForm.setVisible("TRUE");

}

function submitUserData(){
		//alert("Clicked");
		var userDetailsOk = storeUserData();
		if(userDetailsOk){
		newwin= Alloy.createController('newWin').getView();
		newwin.open();
		}
}

function displayUserData (){
	showUserData();
}

function storeUserData(){
	var user = {};
	user.userName = $.userNameInput.getValue();
	user.userEmail = $.userEmailInput.getValue();
	user.userPhone = $.userPhoneInput.getValue();
	if(!user.userName || !user.userEmail || !user.userPhone){
		alert("please enter valid credentials");
		var userDetailsComplete = false;
	}
	else {
	var user_JSON = JSON.stringify(user);	
	var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'details.json');
	if(file.exists)
	file.deleteFile();
	file.write(user_JSON);
	var userDetailsComplete = true;
	}
	return userDetailsComplete;
}

function showUserData(){
	var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'details.json');
	alert(file.read().text);
}

/*$.main.addEventListener('open', function(e) {
	if( Alloy.Globals.Android.Api >= 11 ) {
        activity.actionBar.title = "DemoApp";
        activity.actionBar.displayHomeAsUp = true; 
       activity.actionBar.onHomeIconItemSelected = function() {
            alert("Home icon clicked!");
        };  
    }
});*/
$.index.open();



