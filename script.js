var userLanguage = "";




// Collapse Menu Items
function collapseMenu(){
	if(document.getElementById( 'menu-items').style.display == "none"){
	$( '#menu-items' ).slideDown()
}
else{
	$( '#menu-items' ).slideUp()	
}
}



// Collapse Specification Items For Massage
function collapseMenuMassage(){
	var specifyMenu = document.getElementById( 'menu-massage-specify' );
	
	if(specifyMenu.style.display == "none"){
	$( '#menu-massage-specify' ).toggle();
	document.getElementById ( 'box-sport-massage' ).style.display = "none";
	document.getElementById ( 'box-relaxing-massage' ).style.display = "none";
	$( '#box-sport-massage' ).fadeToggle(1000);
	$( '#box-relaxing-massage' ).delay(500).fadeToggle(1000);
	document.getElementById('menu-massage').style.borderBottom = 'none'
}
else{
	$( '#menu-massage-specify' ).toggle();
	$( '#box-sport-massage' ).toggle();
	$( '#box-relaxing-massage' ).toggle();
	document.getElementById('menu-massage').style.borderBottom = 'solid 0.1vh white'
}
};



// Collapse Menu Items when clicked on page
function collapseMenuPage(){
	var menuItems = document.getElementById( 'menu-items' );
	if(menuItems.style.display == "block"){
		$( '#menu-items' ).slideUp()	
};
};






function menuHome() {
	 window.location = 'index.html' + userLanguage;
}


function menuSportMassage() {
	window.location = 'sportmassage.html' + userLanguage;
}

function menuRelaxingMassage() {
	window.location = 'relaxingmassage.html' + userLanguage;
}

function menuBodyfit() {
	window.location = 'bodyfit.html' + userLanguage;
}

function menuContact() {
	window.location = 'contact.html' + userLanguage;
}





/* Converting to original URL */
function revertUrl(){
	var url = window.location.toString();
	url = url.replace(/\?/g," ");
	url = url.substring(0, url.indexOf(" "));
	return url;
}



/* Changing Language Onclick Flag */
function languageEnglish(){
	userLanguage = "?language=en"
	var url = revertUrl();
	window.location = url + userLanguage;
	translateEnglish();
}


function languageDutch(){
	userLanguage = "?language=nl"
	var url = revertUrl();
	window.location = url + userLanguage;
}


function languagePapiamentu(){
	userLanguage = "?language=pa"
	var url = revertUrl();
	window.location = url + userLanguage;
}






/* Verifying User saved language */
window.onload = function() {
	var urlLanguage = window.location.toString();

	if(urlLanguage.includes("?")){
	urlLanguage = urlLanguage.replace(/\?/g," ");
	urlLanguage = urlLanguage.substring(urlLanguage.indexOf(" ")+1);
	userLanguage = "?" + urlLanguage;
}
}





/* Translation Text English */
function translateEnglish(){
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('index-text-header').innerText = "Bon bini na Boneiru, or in other words, welcome to Bonaire!"
}, false);
	
};




