var button1 = document.querySelector("#button1");
button1.addEventListener('click', toggleVisibility);

var button2 = document.querySelector("#button2");
button2.addEventListener('click', toggleVisibility);

function toggleVisibility() {
	var icon, details;
	var elementId = this.id;
	
	if (elementId == 'button1') {
		icon = document.querySelector('#icon1');
		details = document.querySelectorAll('.hide1');
	}
	else {
		icon = document.querySelector('#icon2');
		details = document.querySelectorAll('.hide2');
	}
	
	if (details[0].style.display == 'block') {
		for (var i=0; i<details.length;i++) {
			details[i].style.display = 'none';
		}
		icon.className = 'fa fa-caret-down';
	}
	else {
		for (var i=0; i<details.length;i++) {
			details[i].style.display = 'block';
		}
		icon.className = 'fa fa-caret-up';
	}
}

function myFunction() {
  var x = document.getElementById("smallnav");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

function showDate() {
	var todaysDate = new Date();
	var dateElement = document.querySelector("footer");
	
	dateElement.innerHTML = dateElement.innerHTML + " - " +todaysDate.toDateString();
}
showDate();
