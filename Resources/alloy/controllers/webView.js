function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "webView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.winWebView = Ti.UI.createWindow({
        id: "winWebView",
        modal: "true",
        exitOnClose: "false",
        fullscreen: "false"
    });
    $.__views.winWebView && $.addTopLevelView($.__views.winWebView);
    $.__views.webview = Ti.UI.createWebView({
        id: "webview",
        url: "http://www.rottentomatoes.com",
        layout: "horizontal",
        height: Ti.UI.SIZE
    });
    $.__views.winWebView.add($.__views.webview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.winWebView.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;