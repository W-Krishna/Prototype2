function Controller() {
    function showData() {
        var userDetails = require("showUserData");
        var user = new userDetails();
        var userData = user.userDetailsInput();
        $.userName.text = userData.userName;
        $.userEmail.text = userData.userEmail;
        $.userPhone.text = userData.userPhone;
        userData.userPhone;
    }
    function getPhoto() {
        if (Ti.Media.isCameraSupported) {
            var overlayView = Ti.UI.createView({
                height: "Ti.UI.SIZE"
            });
            overlayView.addEventListener("longclick", function() {
                Ti.Media.takePicture();
            });
            var userName = Ti.UI.createLabel({
                text: $.userName.text,
                font: {
                    fontSize: "22dp"
                },
                bottom: 500,
                height: Ti.UI.SIZE,
                color: "blue"
            });
            var userEmail = Ti.UI.createLabel({
                text: $.userEmail.text,
                font: {
                    fontSize: "14dp"
                },
                bottom: 400,
                height: Ti.UI.SIZE,
                color: "blue"
            });
            var userPhone = Ti.UI.createLabel({
                text: $.userPhone.text,
                font: {
                    fontSize: "14dp"
                },
                bottom: 300,
                height: Ti.UI.SIZE,
                color: "blue"
            });
            var coordinates = Ti.UI.createLabel({
                bottom: 200,
                font: {
                    fontSize: "16dp"
                },
                color: "red"
            });
            var compassHeading = Ti.UI.createLabel({
                bottom: 100,
                font: {
                    fontSize: "16dp"
                },
                color: "red"
            });
            var degreeNorth = Ti.UI.createLabel({
                top: 50,
                font: {
                    fontSize: "20dp",
                    fontWeight: "bold",
                    fontFamily: "DroidSans"
                },
                color: "white"
            });
            var direction = Ti.UI.createLabel({
                top: 100,
                font: {
                    fontSize: "24dp",
                    fontWeight: "bold",
                    fontFamily: "DroidSans"
                },
                color: "white"
            });
            overlayView.add(userName);
            overlayView.add(userEmail);
            overlayView.add(userPhone);
            overlayView.add(coordinates);
            overlayView.add(compassHeading);
            overlayView.add(degreeNorth);
            overlayView.add(direction);
            Ti.Media.showCamera({
                success: function() {
                    var toast = Titanium.UI.createNotification({
                        duration: Ti.UI.NOTIFICATION_DURATION_SHORT,
                        message: "Picture saved to gallery"
                    });
                    toast.show();
                },
                overlay: overlayView,
                saveToPhotoGallery: true
            });
            if (Ti.Geolocation.hasCompass) {
                Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_LOW;
                var position = function(e) {
                    if (e.error) {
                        coordinates.text = "error: " + e.error;
                        Ti.API.info("Code translation: " + translateErrorCode(e.code));
                        return;
                    }
                    var longitude = e.coords.longitude;
                    var latitude = e.coords.latitude;
                    coordinates.text = "long:" + longitude + " lat: " + latitude;
                };
                Titanium.Geolocation.addEventListener("location", position);
                var magneticHeading = function(e) {
                    if (e.error) {
                        compassHeading.text = "error: " + e.error;
                        return;
                    }
                    var x = e.heading.x;
                    var y = e.heading.y;
                    var z = e.heading.z;
                    var trueHeading = e.heading.trueHeading;
                    compassHeading.text = "x:" + x + " y: " + y + " z:" + z;
                    degreeNorth.text = trueHeading;
                    degreeNorth.text > "0" && "90" > degreeNorth.text ? direction.text = "NE" : "90" == degreeNorth.text ? direction.text = "E" : degreeNorth.text > "90" && "180" > degreeNorth.text ? direction.text = "SE" : "180" == degreeNorth.text ? direction.text = "S" : degreeNorth.text > "180" && "270" > degreeNorth.text ? direction.text = "SW" : "270" == degreeNorth.text ? direction.text = "W" : degreeNorth.text > "270" && "360" > degreeNorth.text ? direction.text = "NW" : ("0" == degreeNorth.text || "360" == degreeNorth.text) && (direction.text = "N");
                };
                Titanium.Geolocation.addEventListener("heading", magneticHeading);
            }
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "showDataWin";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.showDataWin = Ti.UI.createWindow({
        backgroundColor: "white",
        exitOnClose: "false",
        fullscreen: "false",
        navBarHidden: "FALSE",
        id: "showDataWin"
    });
    $.__views.showDataWin && $.addTopLevelView($.__views.showDataWin);
    showData ? $.__views.showDataWin.addEventListener("focus", showData) : __defers["$.__views.showDataWin!focus!showData"] = true;
    $.__views.__alloyId8 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId8"
    });
    $.__views.showDataWin.add($.__views.__alloyId8);
    $.__views.userView = Ti.UI.createView({
        top: "0.5%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "userView",
        layout: "horizontal",
        height: Ti.UI.SIZE
    });
    $.__views.__alloyId8.add($.__views.userView);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        font: {
            fontSize: "16dp"
        },
        color: "blue",
        width: "50%",
        text: "Your Name :",
        id: "__alloyId9"
    });
    $.__views.userView.add($.__views.__alloyId9);
    $.__views.userName = Ti.UI.createLabel({
        font: {
            fontSize: "16dp"
        },
        color: "blue",
        width: "50%",
        id: "userName"
    });
    $.__views.userView.add($.__views.userName);
    $.__views.__alloyId10 = Ti.UI.createView({
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId10"
    });
    $.__views.__alloyId8.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        font: {
            fontSize: "16dp"
        },
        color: "blue",
        width: "50%",
        text: "Your Email :",
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    $.__views.userEmail = Ti.UI.createLabel({
        font: {
            fontSize: "16dp"
        },
        color: "blue",
        width: "50%",
        id: "userEmail"
    });
    $.__views.__alloyId10.add($.__views.userEmail);
    $.__views.__alloyId12 = Ti.UI.createView({
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId12"
    });
    $.__views.__alloyId8.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        font: {
            fontSize: "16dp"
        },
        color: "blue",
        width: "50%",
        text: "Your Phone :",
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.userPhone = Ti.UI.createLabel({
        font: {
            fontSize: "16dp"
        },
        color: "blue",
        width: "50%",
        id: "userPhone"
    });
    $.__views.__alloyId12.add($.__views.userPhone);
    $.__views.__alloyId14 = Ti.UI.createButton({
        title: "Add your photo",
        id: "__alloyId14"
    });
    $.__views.__alloyId8.add($.__views.__alloyId14);
    getPhoto ? $.__views.__alloyId14.addEventListener("click", getPhoto) : __defers["$.__views.__alloyId14!click!getPhoto"] = true;
    $.__views.userImage = Ti.UI.createImageView({
        id: "userImage"
    });
    $.__views.__alloyId8.add($.__views.userImage);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.showDataWin.open();
    $.showDataWin.addEventListener("open", function() {
        var actionbar = require("actionBarAndroid");
        var ab = new actionbar();
        ab.actionbar($.showDataWin);
    });
    __defers["$.__views.showDataWin!focus!showData"] && $.__views.showDataWin.addEventListener("focus", showData);
    __defers["$.__views.__alloyId14!click!getPhoto"] && $.__views.__alloyId14.addEventListener("click", getPhoto);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;