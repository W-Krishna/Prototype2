//lert('hi');
$.listingDetail.addEventListener("open", function() {
	var actionbar =  require('actionBarAndroid');
	var ab = new actionbar();
	ab.actionbar($.listingDetail);
});
(function (listing) {
//	var actionbar =  require('actionBarAndroid');
	//var ab = new actionbar();
	//ab.actionbar($.listingDetail);
	var listDetail = require('listView');
	
	//alert(JSON.stringify(listing.Name.text));
	$.listingDetail.backgroundImage = "listingImage.png";
	$.name.text = listing.Name.text;
	$.email.text = listing.Email.text;
	$.phone.text = listing.Phone.text;
	$.title.text = listing.Title.text;
	//alert($.name.text);
})(arguments[0]);
$.listingDetail.open();

/*
$.listingDetail.addEventListener("open", function() {
	var actionbar =  require('actionBarAndroid');
	var ab = new actionbar();
	ab.actionbar($.listingDetail);
	var listDetail = require('listView');
var listItemReceived = JSON.stringify(Ti.App.Properties.getObject('listItemClicked'));
alert("pk balh");
alert(listItemReceived);
$.listingDetail.backgroundImage = "listingImage.png";
$.name.text = listItemReceived.Name.text;
alert($.name.text);
});


*/