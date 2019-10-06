var result = [];

function cm_to_feet(n) {
      var realFeet = ((n*0.393700) / 12);
      var feet = Math.floor(realFeet);
      var inches = Math.round((realFeet - feet) * 12);
      return feet + "&prime; " + inches + '&Prime;';
    }

function kilo_to_stone(n) {
	var realStone = n * 0.157473;
	var stone = Math.floor(realStone);
	var pounds = Math.round((realStone - stone) * 14);
	return stone + "st " + pounds + "lbs";
}

function calculate(height, weight) {
	result["height"] = height + "cm /&nbsp;";
	result["height_imperial"] = cm_to_feet(height);
	result["weight"] = weight + "kg /&nbsp;";
	result["weight_imperial"] = kilo_to_stone(weight);
	height = height / 100;
	var bmi = (weight / Math.pow(height,2)).toFixed(1);
	var level = "";

	if(bmi < 18.5) {
		level = "Underweight";
	} 
	else if(bmi >= 18.5 && bmi < 25) {
		level = "Healthy";
	}
	else if(bmi >= 25 && bmi < 30) {
		level = "Overweight";
	}
	else if(bmi >= 30) {
		level = "Obese";
	}

	result["bmi"] = bmi;
	result["level"] = level;

}

function updateResults() {
	var slider1 = parseInt(document.querySelector("#slider1").value);
	var slider2 = parseInt(document.querySelector("#slider2").value);
	var items = ["height_imperial", "height", "weight_imperial", "weight", "bmi", "level"]; 
	calculate(slider1, slider2);

	for(var i = 0; i < items.length; i++) {
		document.getElementById(items[i]).innerHTML = result[items[i]].toLocaleString();
	}
}

var slides = document.querySelectorAll(".slides");
for(i = 0; i < slides.length; i++) {
	slides[i].addEventListener("input", updateResults);
}