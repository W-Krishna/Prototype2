function showUserData() {}

showUserData.prototype.userDetailsInput = function() {
    var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "details.json");
    var userFile = JSON.parse(file.read().text);
    if (file) return userFile;
    var toast = Titanium.UI.createNotification({
        duration: Ti.UI.NOTIFICATION_DURATION_LONG,
        message: "User Details not available"
    });
    toast.show();
};

module.exports = showUserData;