var timer;

function loadPage() {
	timer = setTimeout(showPage, 9000);
}

function showPage() {
	document.getElementById("loader").style.display = "none";
	document.getElementById("content").style.display = "block";
        
}