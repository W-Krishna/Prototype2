function actionBarandroid() {}

actionBarandroid.prototype.actionbar = function(window) {
    Titanium.Android.currentActivity || Ti.API.error("Can't access action bar on a lightweight window.");
    var showActionBar = window.activity.actionBar;
    if (showActionBar) {
        showActionBar.title = "Prototype";
        showActionBar.displayHomeAsUp = "index" == window.id ? false : true;
        showActionBar.onHomeIconItemSelected = function() {
            showActionBar.displayHomeAsUp && window.close();
        };
    } else alert("cannot do it");
};

module.exports = actionBarandroid;