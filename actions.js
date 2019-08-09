function clickFunction() {
  var x = document.getElementById("text");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("close");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("open");
  if (z.style.display === "block") {
    z.style.display = "none";
  } else {
    z.style.display = "block";
  }
}


var Currentcone = -1;
var coneimages = ['conedrizzle.svg', 'conechoc.svg', 'conedrizzlecara.svg', 'conechocdrizzle.svg', 'coneplain.svg'];


function conenextSlide() {
	if (Currentcone < (coneimages.length -1)) {
		Currentcone ++;
	}
	else {
		Currentcone = 0;
	}
	
	document.getElementById("coneslideshow").src = coneimages[Currentcone];
	
}
function conepreviousSlide() {
	if (Currentcone > 0){
		Currentcone --;
	}
	else {
		Currentcone = (coneimages.length -1);
	}
	
	document.getElementById("coneslideshow").src = coneimages[Currentcone];
	
}


var Current = -1;
var iceimages = ['icecreamLemon.svg', 'icecreamStrawberry.svg', 'icecreamHokey.svg', 'icecreamChoc.svg'];


function icenextSlide() {
	if (Current < (iceimages.length -1)) {
		Current ++;
	}
	else {
		Current = 0;
	}
	
	document.getElementById("iceslideshow").src = iceimages[Current];
	
}
function icepreviousSlide() {
	if (Current > 0){
		Current --;
	}
	else {
		Current = (iceimages.length -1);
	}
	
	document.getElementById("iceslideshow").src = iceimages[Current];
	
}



var Currenttop = -1;
var topimages = ['cherries.svg', 'flake.svg', 'sprinkles.svg'];


function topnextSlide() {
	if (Currenttop < (topimages.length -1)) {
		Currenttop ++;
	}
	else {
		Currenttop = 0;
	}
	
	document.getElementById("topslideshow").src = topimages[Currenttop];
	
}
function toppreviousSlide() {
	if (Currenttop > 0){
		Currenttop --;
	}
	else {
		Currenttop = (topimages.length -1);
	}
	
	document.getElementById("topslideshow").src = topimages[Currenttop];
	
}
