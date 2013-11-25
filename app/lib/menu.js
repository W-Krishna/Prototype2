function showMenu(){
	
}
showMenu.prototype.menu = function(){
	var activity = Titanium.Android.Activity;
	activity.onCreateOptionsmenu = function(e){
		var menu = e.menu;
		var menuItem = menu.add({
			title : "Go Home",
			title : "View your Data",
			title : "Go to web view"
		});
	};
	Titanium.Android.Activity.invalidateOptionsMenu();
};
 module.exports = showMenu;