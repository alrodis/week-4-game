// function to generate random number between 19-120 to start game
var targetNumber = 0;
function pageLoadRandom() {
	var targetNumber = Math.floor((Math.random() * 102) + 19);
	$("#randomNum").text(targetNumber);
	console.log("pageload random number= " + targetNumber);
}

pageLoadRandom();



var counter=0;
var numberOptions = [10, 11];
var increment = numberOptions[Math.round(Math.random())];

$(".crystal-image").on("click",function() {
	counter += increment;
	$("#userScore").text(counter);
	console.log("user score= "+ counter);
	// alert("New score: " + counter);

	if (counter === targetNumber) {
		$("#wins").text("you win!");
		alert("You win!");
	}

	else if (counter >= targetNumber) {
		$("#losses").html("you lose!");
		alert("You lose!!");
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
// 	// $("#randomNum").html(x);
// 	console.log("red crystal random= " + r);
// }

// redRandom();
// -----------------------------------------


