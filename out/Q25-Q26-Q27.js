"use strict";
//Q25
let alien_color = 'green'; // Change to 'yellow' or 'red' for failing test
if (alien_color === 'green') {
    console.log("The player just earned 5 points!");
}
else {
    console.log("No points awarded. The alien wasn't green."); // This line won't execute for green alien
}
//Q26
alien_color = "yellow";
if (alien_color === 'green') { //assign it to any othher for failing version
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
//Q27
alien_color = "red";
if (alien_color === 'green') {
    console.log("The player earned 5 points.");
}
else if (alien_color === 'yellow') {
    console.log("The player earned 10 points.");
}
else if (alien_color === 'red') {
    console.log("The player earned 15 points.");
}
else {
    console.log("Invalid alien color. Points not awarded.");
}
