// if you want to change something on a DIFFERENT element, you have to call it by name (it's "id")
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
	
// "el" stands for the "element" that was just clicked
function allOpaque(el){
	document.getElementById("something").classList.add("opaque");
	document.getElementById("super").classList.add("opaque");
	
}

// "el" stands for the "element" that was just clicked
function removeColor(el){
	document.getElementById("pats-column").classList.remove("pats-silver");
	document.getElementById("rams-column").classList.remove("rams-blue");
	
}

function showtrophy(el){
	document.getElementById('bye').src = "images/image2.png";
	document.getElementById('hey').src = "images/image2.png";
	document.getElementById('11trophy').src = "images/image11.png";
	document.getElementById('boi').src = "images/image11.png";
}
