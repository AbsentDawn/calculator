/*

	Tasks: 
		- Return Number to the Screen
		- Enable Functionality 
		

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
var curNum = "";
var prevNum = "";
var result;
var operator;

 var getNum = function() {
  	if(result){
  		curNum = this.getAttribute("num");
  		result = ""; 
  	} else {
  		curNum += this.getAttribute("num");
  	}

 	screen.innerHTML = curNum;
 }

 var numOperator = function() {
 	prevNum = curNum;
 	curNum = "";
 	operator = this.getAttribute("ops");
 	this.setAttribute("result", "");

 }

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

 var showResult = function() {
 	getResult();
 	screen.innerHTML = result;
 	equals.setAttribute("result", result);

 	prevNum = 0;
 	curNum = result;
 }

function clickNumber(){
	for(var i = 0, list = numButton.length; i < list; i++){
		numButton[i].onclick = getNum;
		console.log(getNum);
	}
}

function clickOperator() {
	for(var i = 0, list = sum.length; i < list; i++){
		sum[i].onclick = numOperator;
		console.log(numOperator);
	}
}

function clickEquals() {
	equals.onclick = showResult;
}

clickNumber();
clickOperator();
clickEquals();


