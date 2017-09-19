$(document).ready(function(){
    
// function to generate random number between 19-120 to start game
var targetNumber = 0;
function pageLoadRandom() {
	var targetNumber = Math.floor((Math.random() * 102) + 19);
	$("#randomNum").text(targetNumber);
	console.log("pageload random number= " + targetNumber);
}

pageLoadRandom();


// variables to store current score & generate random numbers for each crystal
var currentScore=0;
var red = Math.floor((Math.random() * 12) + 1);
var blue = Math.floor((Math.random() * 12) + 1);
var yellow = Math.floor((Math.random() * 12) + 1);
var green = Math.floor((Math.random() * 12) + 1);

// click function for red crystal to increment current score with red's random value
$("#red").on("click",function() { 
	currentScore += red
	$("#userScore").html(currentScore);
	console.log("user score= "+ currentScore);
	winLose();
});

// click function for blue crystal to increment current score with blue's random value
$("#blue").on("click",function() { 
	currentScore += blue
	$("#userScore").html(currentScore);
	console.log("user score= "+ currentScore);
	winLose();
});

// click function for yellow crystal to increment current score with yellow's random value
$("#yellow").on("click",function() { 
	currentScore += yellow
	$("#userScore").html(currentScore);
	console.log("user score= "+ currentScore);
	winLose();
});

// click function for green crystal to increment current score with green's random value
$("#green").on("click",function() { 
	currentScore += green
	$("#userScore").html(currentScore);
	console.log("user score= "+ currentScore);
	winLose();
});

// conditional function to check current score vs target number
function winLose () {
	if (currentScore === targetNumber) {
		$("#wins").html("you win!");
		alert("You win!");
	}
	else if (currentScore >= targetNumber) {
		$("#losses").html("you lose!");
		alert("You lose!")
	}
}



});


// Below is code for generating a random number with a function using JS.  
// This function works and it does pass the random number into the proper div
// ------------------------------------------------
// function pageLoadRandom() {
// 	var x = Math.floor((Math.random() * 10) + 1);
// 	document.getElementById("randomNum").innerHTML = x;
// 	console.log(x);
// }

// pageLoadRandom();
// -------------------------------------------------


// Random number a page load (this works but is only between 1-10)
// -----------------------------------
// function pageLoadRandom() {
// 	var x = Math.floor((Math.random() * 10) + 1);
// 	$("#randomNum").html(x);
// 	console.log(x);
// }

// pageLoadRandom();
// -----------------------------------



// random number between 1-12 for red crystal
// --------------------------------------------
// function redRandom() {
// 	var r = Math.floor((Math.random() * 12) + 1);
// 	// $("#randomNum").html(r);
// 	console.log("red crystal random= " + r);
// }

// redRandom();
// -----------------------------------------


