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



function menuHome() {
	 window.location = 'index.html'
}


function menuSportMassage() {
	window.location = 'sportmassage.html'
}

function menuRelaxingMassage() {
	window.location = 'relaxingmassage.html'
}

function menuBodyfit() {
	window.location = 'bodyfit.html'
}

function menuContact() {
	window.location = 'contact.html'
}