function changeFunc() {
    var selectBox = document.getElementById("illness");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
	if (selectedValue == "alzheimers"){
		document.getElementById("form1").style.display = "block";
		document.getElementById("form2").style.display = "none";
		document.getElementById("form3").style.display = "none";
	}
	if (selectedValue == "diabetes"){
		document.getElementById("form1").style.display = "none";
		document.getElementById("form2").style.display = "block";
		document.getElementById("form3").style.display = "none";
	}
	if (selectedValue == "heart"){
		document.getElementById("form1").style.display = "none";
		document.getElementById("form2").style.display = "none";
		document.getElementById("form3").style.display = "block";
	}
}