function Controller() {
    function showData() {
        var userDetails = require("showUserData");
        var user = new userDetails();
        var userData = user.userDetailsInput();
        var userName = userData.userName;
        var userEmail = userData.userEmail;
        var userPhone = userData.userPhone;
        $.userName.text = userName;
        $.userEmail.text = userEmail;
        $.userPhone.text = userPhone;
    }
    function seThat() {
        alert("okkk");
    }
    function getPhoto() {
        Titanium.Media.isCameraSupported ? Titanium.Media.showCamera({
            success: function() {},
            mediaTypes: [ Titanium.Media.MEDIA_TYPE_PHOTO ],
            showControls: false,
            saveToPhotoGallery: true
        }) : alert("Your device dosent support camera");
    }
    function buttonClicked() {
        $.showDataWin.close();
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
        exitOnClose: "true",
        id: "showDataWin"
    });
    $.__views.showDataWin && $.addTopLevelView($.__views.showDataWin);
    showData ? $.__views.showDataWin.addEventListener("focus", showData) : __defers["$.__views.showDataWin!focus!showData"] = true;
    $.__views.__alloyId13 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId13"
    });
    $.__views.showDataWin.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createView({
        top: "0.5%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        font: {
            fontSize: "16dp"
        },
        color: "blue",
        width: "50%",
        text: "Your Name :",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.userName = Ti.UI.createLabel({
        font: {
            fontSize: "16dp"
        },
        color: "blue",
        width: "50%",
        id: "userName"
    });
    $.__views.__alloyId14.add($.__views.userName);
    $.__views.__alloyId16 = Ti.UI.createView({
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId16"
    });
    $.__views.__alloyId13.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        font: {
            fontSize: "16dp"
        },
        color: "blue",
        width: "50%",
        text: "Your Email :",
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    $.__views.userEmail = Ti.UI.createLabel({
        font: {
            fontSize: "16dp"
        },
        color: "blue",
        width: "50%",
        id: "userEmail"
    });
    $.__views.__alloyId16.add($.__views.userEmail);
    $.__views.__alloyId18 = Ti.UI.createView({
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId18"
    });
    $.__views.__alloyId13.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        font: {
            fontSize: "16dp"
        },
        color: "blue",
        width: "50%",
        text: "Your Phone :",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.userPhone = Ti.UI.createLabel({
        font: {
            fontSize: "16dp"
        },
        color: "blue",
        width: "50%",
        id: "userPhone"
    });
    $.__views.__alloyId18.add($.__views.userPhone);
    $.__views.__alloyId20 = Ti.UI.createButton({
        title: "Add your photo",
        id: "__alloyId20"
    });
    $.__views.__alloyId13.add($.__views.__alloyId20);
    getPhoto ? $.__views.__alloyId20.addEventListener("click", getPhoto) : __defers["$.__views.__alloyId20!click!getPhoto"] = true;
    $.__views.clickMe = Ti.UI.createButton({
        top: "0.5%",
        width: Ti.UI.FILL,
        title: "Click me to go back",
        id: "clickMe"
    });
    $.__views.__alloyId13.add($.__views.clickMe);
    buttonClicked ? $.__views.clickMe.addEventListener("click", buttonClicked) : __defers["$.__views.clickMe!click!buttonClicked"] = true;
    $.__views.__alloyId21 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId21"
    });
    $.__views.__alloyId13.add($.__views.__alloyId21);
    $.__views.userImage = Ti.UI.createImageView({
        id: "userImage",
        borderColor: "red",
        image: "android/images/appicon.png"
    });
    $.__views.__alloyId21.add($.__views.userImage);
    seThat ? $.__views.userImage.addEventListener("click", seThat) : __defers["$.__views.userImage!click!seThat"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.showDataWin.open();
    __defers["$.__views.showDataWin!focus!showData"] && $.__views.showDataWin.addEventListener("focus", showData);
    __defers["$.__views.__alloyId20!click!getPhoto"] && $.__views.__alloyId20.addEventListener("click", getPhoto);
    __defers["$.__views.clickMe!click!buttonClicked"] && $.__views.clickMe.addEventListener("click", buttonClicked);
    __defers["$.__views.userImage!click!seThat"] && $.__views.userImage.addEventListener("click", seThat);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;