function Controller() {
    function goBack() {
        $.winWebView.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "webView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winWebView = Ti.UI.createWindow({
        id: "winWebView",
        modal: "true",
        exitOnClose: "false"
    });
    $.__views.winWebView && $.addTopLevelView($.__views.winWebView);
    $.__views.webview = Ti.UI.createWebView({
        id: "webview",
        url: "http://www.rottentomatoes.com",
        layout: "horizontal",
        height: Ti.UI.SIZE
    });
    $.__views.winWebView.add($.__views.webview);
    $.__views.__alloyId11 = Ti.UI.createButton({
        title: "CLick here to return",
        layout: "vertical",
        id: "__alloyId11"
    });
    $.__views.winWebView.add($.__views.__alloyId11);
    goBack ? $.__views.__alloyId11.addEventListener("click", goBack) : __defers["$.__views.__alloyId11!click!goBack"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId11!click!goBack"] && $.__views.__alloyId11.addEventListener("click", goBack);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;