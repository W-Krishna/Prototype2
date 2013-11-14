function Controller() {
    function __alloyId4() {
        $.__views.index.removeEventListener("open", __alloyId4);
        if ($.__views.index.activity) $.__views.index.activity.onCreateOptionsMenu = function(e) {
            var __alloyId1 = {
                id: "menuItem",
                title: "Go Home",
                icon: "item1.png"
            };
            $.__views.menuItem = e.menu.add(_.pick(__alloyId1, Alloy.Android.menuItemCreateArgs));
            $.__views.menuItem.applyProperties(_.omit(__alloyId1, Alloy.Android.menuItemCreateArgs));
            homeMenuClicked ? $.__views.menuItem.addEventListener("click", homeMenuClicked) : __defers["$.__views.menuItem!click!homeMenuClicked"] = true;
            var __alloyId2 = {
                id: "menuItem",
                title: "View your data",
                icon: "item1.png"
            };
            $.__views.menuItem = e.menu.add(_.pick(__alloyId2, Alloy.Android.menuItemCreateArgs));
            $.__views.menuItem.applyProperties(_.omit(__alloyId2, Alloy.Android.menuItemCreateArgs));
            showData ? $.__views.menuItem.addEventListener("click", showData) : __defers["$.__views.menuItem!click!showData"] = true;
            var __alloyId3 = {
                id: "seeWebView",
                title: "Go To Web View"
            };
            $.__views.seeWebView = e.menu.add(_.pick(__alloyId3, Alloy.Android.menuItemCreateArgs));
            $.__views.seeWebView.applyProperties(_.omit(__alloyId3, Alloy.Android.menuItemCreateArgs));
            goWebView ? $.__views.seeWebView.addEventListener("click", goWebView) : __defers["$.__views.seeWebView!click!goWebView"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function homeMenuClicked() {
        homeWin = Alloy.createController("index").getView();
        homeWin.open();
    }
    function buttonClicked() {
        $.helloLabel.text = "This window implements Action bar,menu bar, labels, text field. PLease enter your credentials and submit them to go further";
        $.userInfoFormTitle.text = "Please enter your personal information below";
        $.userForm.setVisible("TRUE");
    }
    function submitUserData() {
        var userDetailsOk = storeUserData();
        if (userDetailsOk) {
            newwin = Alloy.createController("newWin").getView();
            newwin.open();
        }
    }
    function goWebView() {
        webview = Alloy.createController("webView").getView();
        webview.open();
    }
    function storeUserData() {
        var user = {};
        user.userName = $.userNameInput.getValue();
        user.userEmail = $.userEmailInput.getValue();
        user.userPhone = $.userPhoneInput.getValue();
        if (user.userName && user.userEmail && user.userPhone) {
            var user_JSON = JSON.stringify(user);
            var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "details.json");
            file.exists && file.deleteFile();
            file.write(user_JSON);
            var userDetailsComplete = true;
        } else {
            alert("please enter valid credentials");
            var userDetailsComplete = false;
        }
        return userDetailsComplete;
    }
    function showData() {
        showDatawin = Alloy.createController("showDataWin").getView();
        showDatawin.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: "FALSE",
        exitOnClose: "true",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.index.addEventListener("open", __alloyId4);
    $.__views.__alloyId5 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId5"
    });
    $.__views.index.add($.__views.__alloyId5);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "horizontal",
        showVerticalScrollIndicator: "true"
    });
    $.__views.__alloyId5.add($.__views.scrollView);
    $.__views.__alloyId6 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId6"
    });
    $.__views.scrollView.add($.__views.__alloyId6);
    $.__views.helloLabel = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        color: "blue",
        font: {
            fontSize: "16dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "Hello There",
        id: "helloLabel"
    });
    $.__views.__alloyId6.add($.__views.helloLabel);
    $.__views.clickMe = Ti.UI.createButton({
        width: Ti.UI.FILL,
        top: "0.5%",
        title: "Click me to see the further steps",
        id: "clickMe"
    });
    $.__views.__alloyId6.add($.__views.clickMe);
    buttonClicked ? $.__views.clickMe.addEventListener("click", buttonClicked) : __defers["$.__views.clickMe!click!buttonClicked"] = true;
    $.__views.userInfoFormTitle = Ti.UI.createLabel({
        color: "blue",
        font: {
            fontSize: "16dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "userInfoFormTitle"
    });
    $.__views.__alloyId6.add($.__views.userInfoFormTitle);
    $.__views.userForm = Ti.UI.createView({
        layout: "horizontal",
        id: "userForm",
        top: "1%",
        visible: "FALSE",
        height: Ti.UI.SIZE
    });
    $.__views.scrollView.add($.__views.userForm);
    $.__views.userName = Ti.UI.createLabel({
        width: "50%",
        color: "blue",
        font: {
            fontSize: "16dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "Enter Your Name",
        id: "userName"
    });
    $.__views.userForm.add($.__views.userName);
    $.__views.userNameInput = Ti.UI.createTextField({
        width: "45%",
        id: "userNameInput"
    });
    $.__views.userForm.add($.__views.userNameInput);
    $.__views.userEmail = Ti.UI.createLabel({
        width: "50%",
        color: "blue",
        font: {
            fontSize: "16dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "Enter your email",
        id: "userEmail"
    });
    $.__views.userForm.add($.__views.userEmail);
    $.__views.userEmailInput = Ti.UI.createTextField({
        width: "45%",
        id: "userEmailInput"
    });
    $.__views.userForm.add($.__views.userEmailInput);
    $.__views.userPhone = Ti.UI.createLabel({
        width: "50%",
        color: "blue",
        font: {
            fontSize: "16dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "Enter phone number",
        id: "userPhone"
    });
    $.__views.userForm.add($.__views.userPhone);
    $.__views.userPhoneInput = Ti.UI.createTextField({
        width: "45%",
        id: "userPhoneInput",
        keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD
    });
    $.__views.userForm.add($.__views.userPhoneInput);
    $.__views.__alloyId7 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        backgroundColor: "red",
        top: "3dp",
        id: "__alloyId7"
    });
    $.__views.userForm.add($.__views.__alloyId7);
    $.__views.submitUserInfo = Ti.UI.createButton({
        title: "Submit",
        id: "submitUserInfo"
    });
    $.__views.__alloyId7.add($.__views.submitUserInfo);
    submitUserData ? $.__views.submitUserInfo.addEventListener("click", submitUserData) : __defers["$.__views.submitUserInfo!click!submitUserData"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.addEventListener("open", function() {
        if ($.index.activity) {
            var actionBar = $.index.activity.actionBar;
            if (actionBar) {
                actionBar.displayHomeAsUp = true;
                actionBar.onHomeIconItemSelected = function() {
                    alert("I am action bar in android");
                    Ti.API.info("Home icon clicked!");
                };
            }
        } else Ti.API.error("Can't access action bar on a lightweight window.");
    });
    $.index.open();
    __defers["$.__views.menuItem!click!homeMenuClicked"] && $.__views.menuItem.addEventListener("click", homeMenuClicked);
    __defers["$.__views.menuItem!click!showData"] && $.__views.menuItem.addEventListener("click", showData);
    __defers["$.__views.seeWebView!click!goWebView"] && $.__views.seeWebView.addEventListener("click", goWebView);
    __defers["$.__views.clickMe!click!buttonClicked"] && $.__views.clickMe.addEventListener("click", buttonClicked);
    __defers["$.__views.submitUserInfo!click!submitUserData"] && $.__views.submitUserInfo.addEventListener("click", submitUserData);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;