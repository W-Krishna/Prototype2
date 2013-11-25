function actionBarandroid(){

}

actionBarandroid.prototype.actionbar = function (window){

	if (Ti.Platform.osname === "android") {
			if (! Titanium.Android.currentActivity) {
            	Ti.API.error("Can't access action bar on a lightweight window.");
        	}
		var showActionBar = window.activity.actionBar;
		if(showActionBar) {
			showActionBar.title = "Prototype";
			 (window.id == "index" ? showActionBar.displayHomeAsUp = false : showActionBar.displayHomeAsUp = true); 
			 showActionBar.onHomeIconItemSelected = function() {
			 if(showActionBar.displayHomeAsUp) {
			 	window.close();
			 }
			};
		}
		else {
			alert("cannot do it");
		}
	}
};

module.exports = actionBarandroid;
