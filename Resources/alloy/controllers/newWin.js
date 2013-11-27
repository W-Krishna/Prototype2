function Controller() {
    function seeWebView() {
        webView = Alloy.createController("webView").getView();
        webView.open();
    }
    function openUserData() {
        showDatawin = Alloy.createController("showDataWin").getView();
        showDatawin.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "newWin";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.newWin = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: "FALSE",
        exitOnClose: "false",
        fullscreen: "false",
        id: "newWin"
    });
    $.__views.newWin && $.addTopLevelView($.__views.newWin);
    $.__views.__alloyId16 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId16"
    });
    $.__views.newWin.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        font: {
            fontSize: "16dp"
        },
        top: "0.5%",
        text: "This window has just one button that will open a web view when clicked. Website I am rendering is rotten tomatoes. Also clicking on Go back button will take you back to previous screen.",
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createButton({
        title: "Click here to visit the web view",
        id: "__alloyId18"
    });
    $.__views.__alloyId16.add($.__views.__alloyId18);
    seeWebView ? $.__views.__alloyId18.addEventListener("click", seeWebView) : __defers["$.__views.__alloyId18!click!seeWebView"] = true;
    $.__views.__alloyId19 = Ti.UI.createButton({
        title: "Click here to view your data",
        id: "__alloyId19"
    });
    $.__views.__alloyId16.add($.__views.__alloyId19);
    openUserData ? $.__views.__alloyId19.addEventListener("click", openUserData) : __defers["$.__views.__alloyId19!click!openUserData"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.newWin.addEventListener("open", function() {
        var actionbar = require("actionBarAndroid");
        var ab = new actionbar();
        ab.actionbar($.newWin);
    });
    $.newWin.open();
    __defers["$.__views.__alloyId18!click!seeWebView"] && $.__views.__alloyId18.addEventListener("click", seeWebView);
    __defers["$.__views.__alloyId19!click!openUserData"] && $.__views.__alloyId19.addEventListener("click", openUserData);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;