function on() {
	document.getElementById("dropdown-menu").style.width = "70%";
	document.getElementById("dropdown-menu").style.padding = "1rem";
	document.getElementById("body").style.overflow = "hidden"
}

function off() {
	document.getElementById("dropdown-menu").style.width = "0";
	document.getElementById("dropdown-menu").style.padding = "0";
	document.getElementById("body").style.overflow = "scroll"
}