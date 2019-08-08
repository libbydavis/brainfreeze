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

var Current = -1;
var images = ['icecreamLemon.svg', 'icecreamStrawberry.svg', 'icecreamHokey.svg', 'icecreamChoc.svg'];


function nextSlide() {
	if (Current < (images.length -1)) {
		Current ++;
	}
	else {
		Current = 0;
	}
	
	document.getElementById("slideshow").src = images[Current];
	
}
function previousSlide() {
	if (Current > 0){
		Current --;
	}
	else {
		Current = (images.length -1);
	}
	
	document.getElementById("slideshow").src = images[Current];
	
}
