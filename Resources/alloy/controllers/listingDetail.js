function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "listingDetail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.listingDetail = Ti.UI.createWindow({
        fullscreen: "false",
        id: "listingDetail"
    });
    $.__views.listingDetail && $.addTopLevelView($.__views.listingDetail);
    $.__views.title = Ti.UI.createLabel({
        id: "title",
        top: "1%",
        left: "50%"
    });
    $.__views.listingDetail.add($.__views.title);
    $.__views.name = Ti.UI.createLabel({
        id: "name",
        left: "2dp",
        bottom: "23%"
    });
    $.__views.listingDetail.add($.__views.name);
    $.__views.email = Ti.UI.createLabel({
        id: "email",
        left: "2dp",
        bottom: "12%"
    });
    $.__views.listingDetail.add($.__views.email);
    $.__views.phone = Ti.UI.createLabel({
        id: "phone",
        left: "2dp",
        bottom: "1%"
    });
    $.__views.listingDetail.add($.__views.phone);
    exports.destroy = function() {};
    _.extend($, $.__views);
    alert("hi");
    (function(listing) {
        var actionbar = require("actionBarAndroid");
        var ab = new actionbar();
        ab.actionbar($.listingDetail);
        require("listView");
        alert(JSON.stringify(listing.Name));
        $.listingDetail.backgroundImage = "listingImage.png";
        $.name.text = listing.Name.text;
    })(arguments[0]);
    $.listingDetail.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;