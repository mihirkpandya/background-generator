var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("#gradient");
var random1 = document.querySelector("#random1");

function setGradient(){
	body.style.background = "linear-gradient(to right, "+ color1.value +"," + color2.value
+")";
	css.textContent = body.style.background + ";";  
}
setGradient();

function getRandomColor(){
  var color = '';
  while (color.length < 6) {
    color += (Math.random()).toString(16).substr(-6).substr(-1)
  }
  console.log("#"+color);
  return '#'+color;
}

function randomColorGenerator(){

	color1.value= getRandomColor();
	color2.value= getRandomColor();
	setGradient();
}

random1.addEventListener("click", randomColorGenerator);

color1.addEventListener("input", setGradient); // can also add it in input tag with "oninput=setGradient()" 
color2.addEventListener("input", setGradient);

