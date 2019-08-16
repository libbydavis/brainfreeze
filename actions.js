function clickFunction() {
  var x = document.getElementById("text");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("close");
  if (y.style.display === "none" || y.style.display === "") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("open");
  if (z.style.display === "block" || z.style.display === "") {
    z.style.display = "none";
  } else {
    z.style.display = "block";
  }
}


var Currentcone = -1;
var coneimages = ['images/conedrizzle.svg', 'images/conechoc.svg', 'images/conedrizzlecara.svg', 'images/conechocdrizzle.svg', 'images/coneplain.svg'];
var conenames = ["Chocolate Drizzle Cone", "Chocolate Cone", "Caramel Drizzle Cone", "Double Chocolate Drizzle Cone", "Vanilla Cone"]


function conenextSlide() {
	if (Currentcone < (coneimages.length -1)) {
		Currentcone ++;
	}
	else {
		Currentcone = 0;
	}

	document.getElementById("coneslideshow").src = coneimages[Currentcone];
	document.getElementById("conecaption").innerHTML = conenames[Currentcone];

}
function conepreviousSlide() {
	if (Currentcone > 0){
		Currentcone --;
	}
	else if (Currentcone === -1) {
		Currentcone = (coneimages.length -2);
	}
	else {
		Currentcone = (coneimages.length -1);
	}

	document.getElementById("coneslideshow").src = coneimages[Currentcone];
	document.getElementById("conecaption").innerHTML = conenames[Currentcone];

}


var Current = -1;
var iceimages = ['images/icecreamLemon.svg', 'images/icecreamStrawberry.svg', 'images/icecreamHokey.svg', 'images/icecreamChoc.svg'];
var icenames = ["Sour Lemon Lime", "Strawberry", "Hokey Pokey", "Double Chocolate"]


function icenextSlide() {
	if (Current < (iceimages.length -1)) {
		Current ++;
	}
	else {
		Current = 0;
	}

	document.getElementById("iceslideshow").src = iceimages[Current];
	document.getElementById("icecaption").innerHTML = icenames[Current];

}
function icepreviousSlide() {
	if (Current > 0){
		Current --;
	}
		else if (Current === -1) {
		Current = (iceimages.length -2);
	}
	else {
		Current = (iceimages.length -1);
	}

	document.getElementById("iceslideshow").src = iceimages[Current];
	document.getElementById("icecaption").innerHTML = icenames[Current];

}



var Currenttop = -1;
var topimages = ['images/cherries.svg', 'images/flake.svg', 'images/sprinkles.svg'];
var topnames = ["Cherries", "Flake", "Sprinkles"]


function topnextSlide() {
	if (Currenttop < (topimages.length -1)) {
		Currenttop ++;
	}
	else {
		Currenttop = 0;
	}

	document.getElementById("topslideshow").src = topimages[Currenttop];
	document.getElementById("topcaption").innerHTML = topnames[Currenttop];

}
function toppreviousSlide() {
	if (Currenttop > 0){
		Currenttop --;
	}
		else if (Currenttop === -1) {
		Currenttop = (topimages.length -2);
	}
	else {
		Currenttop = (topimages.length -1);
	}

	document.getElementById("topslideshow").src = topimages[Currenttop];
	document.getElementById("topcaption").innerHTML = topnames[Currenttop];

}
var screenshots = {"Instagram" : "images/instagram.png", "Twitter" : "images/twitter.png", "Facebook" : "images/facebook.png"}
var links = {"Instagram" : "https://www.instagram.com/", "Twitter" : "https://twitter.com/", "Facebook": "https://www.facebook.com/"}

function socialbutton(media) {
	document.getElementById("socialpic").src = screenshots[media];
	var link = document.getElementById("sociallink");
	link.setAttribute("href", links[media]);
	document.getElementById("placeholdersocialtext").innerHTML = "Click Picture To Go To Social Media";
}

function popupsubmit() {
	alert("Thanks for submitting! We\'ll be in contact soon :D");
}
