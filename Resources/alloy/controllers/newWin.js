function Controller() {
    function goBack() {
        $.newWin.close();
    }
    function seeWebView() {
        webView = Alloy.createController("webView").getView();
        webView.open();
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
        id: "newWin"
    });
    $.__views.newWin && $.addTopLevelView($.__views.newWin);
    $.__views.__alloyId7 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId7"
    });
    $.__views.newWin.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        font: {
            fontSize: "16dp"
        },
        top: "0.5%",
        text: "This window has just one button that will open a web view when clicked. Website I am rendering is rotten tomatoes. Also clicking on Go back button will take you back to previous screen.",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createButton({
        title: "Click here to visit the web view",
        id: "__alloyId9"
    });
    $.__views.__alloyId7.add($.__views.__alloyId9);
    seeWebView ? $.__views.__alloyId9.addEventListener("click", seeWebView) : __defers["$.__views.__alloyId9!click!seeWebView"] = true;
    $.__views.__alloyId10 = Ti.UI.createButton({
        title: "Go back",
        id: "__alloyId10"
    });
    $.__views.__alloyId7.add($.__views.__alloyId10);
    goBack ? $.__views.__alloyId10.addEventListener("click", goBack) : __defers["$.__views.__alloyId10!click!goBack"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.newWin.open();
    __defers["$.__views.__alloyId9!click!seeWebView"] && $.__views.__alloyId9.addEventListener("click", seeWebView);
    __defers["$.__views.__alloyId10!click!goBack"] && $.__views.__alloyId10.addEventListener("click", goBack);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;