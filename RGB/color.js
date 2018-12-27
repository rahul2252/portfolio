var numSquare = 6;
var colors = generateRandomColors(numSquare);

var squres = document.querySelectorAll(".squre");
var pickedColor =  pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var newColor = document.querySelector("#newColor");
var h1 = document.querySelector("h1")
var modeBtn =  document.querySelectorAll(".mode");


for(var i=0; i < modeBtn.length; i++){
  modeBtn[i].addEventListener("click",function(){
    modeBtn[0].classList.remove("selected")
    modeBtn[1].classList.remove("selected")
    this.classList.add("selected")

    this.textContent === "Easy" ? numSquare = 3: numSquare = 6;
    // if (this.textContent ==="Easy") {
    //   numSquare = 3;
    // }else{
    //   numSquare = 6;
    // }


    reset();
  })
}

function reset(){
  colors = generateRandomColors(numSquare);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  message.textContent = "";
  newColor.textContent = "New color"
  for (var i = 0; i < squres.length; i++) {
    if (colors[i]) {
      squres[i].style.display = "block";
      squres[i].style.backgroundColor = colors[i];
    }else {
      squres[i].style.display = "none";
    }

  }
  h1.style.backgroundColor = "#FC9273";

}

// easyBtn.addEventListener("click", function(){
//   hardBtn.classList.remove("selected")
//   easyBtn.classList.add("selected");
//   numSquare = 3;
//   colors = generateRandomColors(numSquare);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i = 0; i < squres.length; i++) {
//     if (colors[i]) {
//       squres[i].style.backgroundColor = colors[i];
//     }else{
//       squres[i].style.display = "none"
//     }
//
//  }
//   h1.style.backgroundColor = "#FC9273";
// })
// hardBtn.addEventListener("click", function(){
//   easyBtn.classList.remove("selected");
//   hardBtn.classList.add("selected");
//   numSquare = 6;
//   colors = generateRandomColors(numSquare);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i = 0; i < squres.length; i++) {
//
//       squres[i].style.backgroundColor = colors[i];
//
//       squres[i].style.display = "block"
//     }
//     h1.style.backgroundColor = "#FC9273";
// })
newColor.addEventListener("click", function(){
  reset();
})


colorDisplay.textContent = pickedColor;

for (var i=0; i < squres.length; i++){
  //add colors for squres
  squres[i].style.backgroundColor = colors[i];
  //add event listners for clicked squres
  squres[i].addEventListener("click", function(){
    //grab color of clicked square
    var clickedColor  = this.style.backgroundColor;
    //compare color of clicked square
    if (clickedColor === pickedColor) {
      message.textContent = "Correct!";
      ChangeColors(pickedColor);
      h1.style.backgroundColor = pickedColor;
    }else{
      this.style.backgroundColor =  "#191919";
      message.textContent ="Try Again!";
      newColor.textContent = "Play again!"
    };
  });
};

function ChangeColors(color){
  for(var i=0; i < squres.length; i++){
    squres[i].style.backgroundColor = color;
  }
};

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  console.log("random")
  return colors[random];
};

function generateRandomColors(num){
  //make array
  var arr = [];
  //repeat num times
  for (var i = 0; i < num; i++) {
    //get random color and push to array
  arr.push(randomColors())
  }
  return arr

}

function randomColors(){
  //pick red 0-255
  var r = Math.floor(Math.random() * 256)
  //pick green 0-255
  var g = Math.floor(Math.random() * 256)
  //pick blue 0-255
  var b = Math.floor(Math.random() * 256)

  return "rgb(" + r + ", " + g + ", " + b +")"
}
