function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "listView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.listView = Ti.UI.createWindow({
        fullscreen: "false",
        id: "listView"
    });
    $.__views.listView && $.addTopLevelView($.__views.listView);
    var __alloyId4 = {};
    var __alloyId7 = [];
    var __alloyId8 = {
        type: "Ti.UI.ImageView",
        bindId: "Pic",
        properties: {
            bindId: "Pic",
            left: "0",
            top: "2%"
        }
    };
    __alloyId7.push(__alloyId8);
    var __alloyId9 = {
        type: "Ti.UI.Label",
        bindId: "Title",
        properties: {
            font: {
                fontSize: "22dp",
                fontFamily: "DroidSans",
                fontWeight: "bold"
            },
            bindId: "Title",
            top: "0",
            left: "50%"
        }
    };
    __alloyId7.push(__alloyId9);
    var __alloyId10 = {
        type: "Ti.UI.Label",
        bindId: "Name",
        properties: {
            font: {
                fontSize: "20dp",
                fontFamily: "DroidSans"
            },
            bindId: "Name",
            left: "455",
            bottom: "23%"
        }
    };
    __alloyId7.push(__alloyId10);
    var __alloyId11 = {
        type: "Ti.UI.Label",
        bindId: "Email",
        properties: {
            font: {
                fontSize: "18dp",
                fontFamily: "DroidSans"
            },
            bindId: "Email",
            left: "455",
            bottom: "12%"
        }
    };
    __alloyId7.push(__alloyId11);
    var __alloyId12 = {
        type: "Ti.UI.Label",
        bindId: "Phone",
        properties: {
            font: {
                fontSize: "16dp",
                fontFamily: "DroidSans"
            },
            bindId: "Phone",
            left: "455",
            bottom: "1%"
        }
    };
    __alloyId7.push(__alloyId12);
    var __alloyId6 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId7
    };
    __alloyId4["template"] = __alloyId6;
    var __alloyId13 = [];
    var __alloyId15 = [];
    $.__views.list = {
        properties: {
            height: "300dp",
            id: "list"
        }
    };
    __alloyId15.push($.__views.list);
    $.__views.listings = Ti.UI.createListSection({
        id: "listings"
    });
    __alloyId13.push($.__views.listings);
    $.__views.listings.items = __alloyId15;
    $.__views.listview = Ti.UI.createListView({
        sections: __alloyId13,
        templates: __alloyId4,
        id: "listview",
        defaultItemTemplate: "template"
    });
    $.__views.listView.add($.__views.listview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.listView.open();
    $.listView.addEventListener("open", function() {
        var actionbar = require("actionBarAndroid");
        var ab = new actionbar();
        ab.actionbar($.listView);
    });
    var userDetails = require("showUserData");
    var user = new userDetails();
    var userData = user.userDetailsInput();
    var userName = userData.userName;
    var userEmail = userData.userEmail;
    var userPhone = userData.userPhone;
    var listSection = [];
    for (i = 0; 10 > i; i++) listSection.push({
        Pic: {
            image: "listingImageShort.png"
        },
        Title: {
            text: "My Listing " + i
        },
        Name: {
            text: userName
        },
        Email: {
            text: userEmail
        },
        Phone: {
            text: userPhone
        }
    });
    var section = $.listings;
    section.setItems(listSection);
    $.listview.sections = [ section ];
    var listItemClicked = function(e) {
        var listItem = section.getItemAt(e.itemIndex);
        if (listItem) {
            Ti.App.Properties.setObject("listItemClicked", listItem);
            openItemDetail(listItem);
        }
    };
    $.listview.addEventListener("itemclick", listItemClicked);
    var openItemDetail = function(obj) {
        listViewDetail = Alloy.createController("listingDetail", obj).getView();
        listViewDetail.open();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;