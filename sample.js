



// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn00 = document.getElementById("myBtn00");
var btn01 = document.getElementById("myBtn01");
var btn02 = document.getElementById("myBtn02");
var btn03 = document.getElementById("myBtn03");
var btn04 = document.getElementById("myBtn04");
var btn10 = document.getElementById("myBtn10");
var btn11 = document.getElementById("myBtn11");
var btn12 = document.getElementById("myBtn12");
var btn13 = document.getElementById("myBtn13");
var btn14 = document.getElementById("myBtn14");
var btn20 = document.getElementById("myBtn20");
var btn21 = document.getElementById("myBtn21");
var btn22 = document.getElementById("myBtn22");
var btn23 = document.getElementById("myBtn23");
var btn24 = document.getElementById("myBtn24");
var btn30 = document.getElementById("myBtn30");
var btn31 = document.getElementById("myBtn31");
var btn32 = document.getElementById("myBtn32");
var btn33 = document.getElementById("myBtn33");
var btn34 = document.getElementById("myBtn34");
var btn40 = document.getElementById("myBtn40");
var btn41 = document.getElementById("myBtn41");
var btn42 = document.getElementById("myBtn42");
var btn43 = document.getElementById("myBtn43");
var btn44 = document.getElementById("myBtn44");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn00.onclick = function() {
    modal.style.display = "block";
}
btn01.onclick = function() {
    modal.style.display = "block";
}
btn02.onclick = function() {
    modal.style.display = "block";
}
btn03.onclick = function() {
    modal.style.display = "block";
}
btn04.onclick = function() {
    modal.style.display = "block";
}
btn10.onclick = function() {
    modal.style.display = "block";
}
btn11.onclick = function() {
    modal.style.display = "block";
}
btn12.onclick = function() {
    modal.style.display = "block";
}
btn13.onclick = function() {
    modal.style.display = "block";
}
btn14.onclick = function() {
    modal.style.display = "block";
}
btn20.onclick = function() {
    modal.style.display = "block";
}
btn21.onclick = function() {
    modal.style.display = "block";
}
btn22.onclick = function() {
    modal.style.display = "block";
}
btn23.onclick = function() {
    modal.style.display = "block";
}
btn24.onclick = function() {
    modal.style.display = "block";
}
btn30.onclick = function() {
    modal.style.display = "block";
}
btn31.onclick = function() {
    modal.style.display = "block";
}
btn32.onclick = function() {
    modal.style.display = "block";
}
btn33.onclick = function() {
    modal.style.display = "block";
}
btn34.onclick = function() {
    modal.style.display = "block";
}
btn40.onclick = function() {
    modal.style.display = "block";
}
btn41.onclick = function() {
    modal.style.display = "block";
}
btn42.onclick = function() {
    modal.style.display = "block";
}
btn43.onclick = function() {
    modal.style.display = "block";
}
btn44.onclick = function() {
    modal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var xhr = new XMLHttpRequest()
var url = "http://jservice.io/api/categories?count=5&offset=10";
xhr.open("GET", url);
xhr.send(null);
var data = xhr.responseText;
var temp = JSON.parse(data);
function changeText(){
	document.getElementById("cat1").innerHTML = temp["title"];
	var domReference = document.createElement('div')
	domReference.classList.add('catOne')
	var parent = document.querySelector('11498')
	
	parent.appendChild(domReference)
	document.getElementById("cat2").innerHTML = "123";
	document.getElementById("cat3").innerHTML = "123";
	document.getElementById("cat4").innerHTML = "123";
	document.getElementById("cat5").innerHTML = "123";
}