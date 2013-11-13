
function goBack() {
	$.newWin.close();	
}

function seeWebView() {
	webView= Alloy.createController('webView').getView();
		webView.open();
}
$.newWin.open();

