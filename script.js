function resizeIframe(iframeID) 
{       
    var iframe = window.parent.document.getElementById('frameContent');
    var container = document.getElementById('content');
    iframe.style.height = container.offsetHeight + 'px';            
} 




function changeLanguageEnglish() {
	var homeButton =  document.getElementById('homeButton').getElementsByClassName('textButton')[0];
	homeButton.innerHTML = "Home"

	var homeButton =  document.getElementById('meButton').getElementsByClassName('textButton')[0];
	homeButton.innerHTML = "About Me"

	var homeButton =  document.getElementById('priceButton').getElementsByClassName('textButton')[0];
	homeButton.innerHTML = "Prices"

	var homeButton =  document.getElementById('contactButton').getElementsByClassName('textButton')[0];
	homeButton.innerHTML = "Contact"
}








function changeLanguageDutch() {
	var homeButton =  document.getElementById('homeButton').getElementsByClassName('textButton')[0];
	homeButton.innerHTML = "Start"

	var homeButton =  document.getElementById('meButton').getElementsByClassName('textButton')[0];
	homeButton.innerHTML = "Over mij"

	var homeButton =  document.getElementById('priceButton').getElementsByClassName('textButton')[0];
	homeButton.innerHTML = "Prijzen"

	var homeButton =  document.getElementById('contactButton').getElementsByClassName('textButton')[0];
	homeButton.innerHTML = "Contact"
}










function changeLanguagePapiamento() {
	var homeButton =  document.getElementById('homeButton').getElementsByClassName('textButton')[0];
	homeButton.innerHTML = "Kas"

	var homeButton =  document.getElementById('meButton').getElementsByClassName('textButton')[0];
	homeButton.innerHTML = "Di mi"

	var homeButton =  document.getElementById('priceButton').getElementsByClassName('textButton')[0];
	homeButton.innerHTML = "Preis"

	var homeButton =  document.getElementById('contactButton').getElementsByClassName('textButton')[0];
	homeButton.innerHTML = "Kontakto"
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