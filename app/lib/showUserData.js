function showUserData(){
}

showUserData.prototype.userDetailsInput = function() {
	var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'details.json');
	var userFile = JSON.parse(file.read().text);
	if(!file){
	alert("user details not available");
	}
	else{
		return userFile;
	}
};

module.exports = showUserData;