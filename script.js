function resizeIframe(iframeID) 
{       
    var iframe = window.parent.document.getElementById('frameContent');
    var container = document.getElementById('content');
    iframe.style.height = container.offsetHeight + 'px';            
} 




function changeLanguageEnglish() {
	$("#homeButton").text("Home");
	$("#meButton").text("About Me");
	$("#priceButton").text("Prices");
	$("#contactButton").text("Contact");
}








function changeLanguageDutch() {
	$("#homeButton").text("Start");
	$("#meButton").text("Over mij");
	$("#priceButton").text("Prijzen");
	$("#contactButton").text("Contact");
}





function changeLanguagePapiamento() {
	$("#homeButton").text("Kas");
	$("#meButton").text("Di mi");
	$("#priceButton").text("Preis");
	$("#contactButton").text("Kontakto");
}





function homeClick() {
	var frame = document.getElementById('frameContent')
	frame.setAttribute("src","home.html");
}

function aboutUsClick() {
	var frame = document.getElementById('frameContent')
	frame.setAttribute("src","aboutus.html");
}

function pricesClick() {
	var frame = document.getElementById('frameContent')
	frame.setAttribute("src","prices.html");
}

function contactClick() {
	var frame = document.getElementById('frameContent')
	frame.setAttribute("src","contact.html");
}








/* CHANGING CONTENT LANGUAGE
var homeButton =  document.getElementById('homeButton').getElementsByClassName('textButton')[0];
	homeButton.innerText = "Start"

	var homeButton =  document.getElementById('meButton').getElementsByClassName('textButton')[0];
	homeButton.innerText = "Over mij"

	var homeButton =  document.getElementById('priceButton').getElementsByClassName('textButton')[0];
	homeButton.innerText = "Prijzen"

	var homeButton =  document.getElementById('contactButton').getElementsByClassName('textButton')[0];
	homeButton.innerText = "Contact"
	*/
