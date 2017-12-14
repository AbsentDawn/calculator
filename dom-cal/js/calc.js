/*

	Tasks: 
		- Return Number to the Screen
		- Enable Functionality to operators
		- Enable functionality to Equals
		- Show sum on screen 
		- Enable clear functionality 
		

		Example: 
			function doc() {
				var myName = document.getElementsByClassName("lorem");
				
				console.log(myName);
				myName[0].innerHTML = "<p>Change in Text</p>";
			}

			<button onclick="doc()">Click the button</button>

			function update() {
	screen.innerHTML = updateString;
}

function numberOne() {
	updateString = updateString + 1;
	update();
	
}


*/

var screen = document.getElementById("screen");
var sum = document.getElementsByClassName("operator");
var numButton = document.getElementsByClassName("buttonNum");
var equals = document.getElementsByClassName("equals");
var finNum = document.getElementById("finNum");
var clear = document.getElementById("clear");
var curNum = "";
var prevNum = "";
var result;
var operator;


// get the numbers and set them to screen
 var getNum = function() {
  	if(result){
  		curNum = this.getAttribute("num");
  		result = ""; 
  	} else {
  		curNum += this.getAttribute("num");
  	}

 	screen.innerHTML = curNum;
 }


// get the operator functions
 var numOperator = function() {
 	prevNum = curNum;
 	curNum = "";
 	operator = this.getAttribute("ops");
 	this.setAttribute("result", "");

 }

 // convert numbers and get the result
 var getResult = function() {
 	prevNum = parseFloat(prevNum);
 	curNum = parseFloat(curNum);

 	switch(operator) {
 		case "plus":
 			result = prevNum + curNum;
 			break;
 		case "minus":
 			result = prevNum - curNum;
 			break;
 		case "times":
 			result = prevNum * curNum;
 			break;
 		case "divide":
 			result = prevNum / curNum;
 			break;
 		default:
 			result = curNum;
 			break;
 	}
 }

 // get the numbers and show reuslt on screen
 var showResult = function() {
 	getResult();
 	screen.innerHTML = result;
 	finNum.setAttribute("result", result);

 	prevNum = 0;
 	curNum = result;
 }

 // Set the numbers to default when cleared
 var clearNumbers = function() {
 		prevNum = ""; 
 		curNum = "";
 		screen.innerHTML = "0";
 		finNum.setAttribute("result", result);
 }

// When a number is click show on screen
function clickNumber(){
	for(var i = 0, list = numButton.length; i < list; i++){
		numButton[i].onclick = getNum;
		console.log(getNum);
	}
}

// When and operator is clicked perform that operator 
function clickOperator() {
	for(var i = 0, list = sum.length; i < list; i++){
		sum[i].onclick = numOperator;
		console.log(numOperator);
	}
}

// When equals is clciked show the result of equation
function clickEquals() {
	finNum.onclick = showResult;
}

// When AC button is clicked clear all numbers using clearNumbers function
function clickClear() {
	clear.onclick = clearNumbers;
}

// Call all the click functions to be performed on screen
clickNumber();
clickOperator();
clickEquals();
clickClear();

