var numSquares = 6;

var colors= generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	resetButton.textContent="New Colors";
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares=6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	resetButton.textContent="New Colors";
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares =6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i=0; i<squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
		}
});

resetButton.addEventListener("click", function(){
	resetButton.textContent="New Colors";
	colors= generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	
	for (var i=0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
});

colorDisplay.textContent = pickedColor;


for (var i=0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
		
	squares[i].addEventListener("click", function(){
		var clickedColor= this.style.backgroundColor;
			
		if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			h1.style.backgroundColor = clickedColor;
			changeColors(clickedColor);
			resetButton.textContent = "Play again";
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
		
	});
}

function changeColors(color){
	for (var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(nums){
	var arr = [];
	for (var i=0; i < nums; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " +b + ")";
}
