function showUserData(){
}

showUserData.prototype.userDetailsInput = function() {
	
	var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'details.json');
	
	var userFile = JSON.parse(file.read().text);
		if(!file){
			var toast = Titanium.UI.createNotification({
				duration: Ti.UI.NOTIFICATION_DURATION_LONG,
    			message: "User Details not available"
    			});
    			toast.show();
	
	}
	else{
		
		return userFile;
	}
};

/*var showUserData = (function(){});
showUserData.prototype = {
	file : Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'details.json'),
	userFile : JSON.parse(file.read().text),
	
	read : function () {
	if(!file){
	alert("user details not available");
	}
	else{
		return userFile;
	}
	}
	
};*/

/*var userDetailsInput = function() {
	
	
	var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'details.json');
	
	var userFile = JSON.parse(file.read().text);
	
	alert("it works");
		if(!file){
		
	alert("user details not available");
	
	}
	else{
		
		return userFile;
	}
};*/
//module.exports.userDetailsInput = userDetailsInput;
module.exports = showUserData;