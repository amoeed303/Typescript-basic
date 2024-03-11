"use strict";
let car = 'subaru';
//normal  tests 
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
console.log("Is car == 'audi'? I predict False.");
console.log(car == 'audi');
//case dififirence 
console.log("Is car.toLowerCase() == 'SUBARU'.toLowerCase()? I predict True.");
console.log(car.toLowerCase() == 'SUBARU'.toLowerCase());
console.log("Is car == 'SUBARU'? I predict False.");
console.log(car == 'SUBARU');
// Numerical tests
let personsAge = 30;
console.log("Is age > 25? I predict True.");
console.log(personsAge > 25);
console.log("Is age <= 18? I predict False.");
console.log(personsAge <= 18);
// Using "and" and "or" operators
let isStudent = true;
let hasFreeShipping = false;
console.log("Is isStudent true and hasFreeShipping true? I predict False.");
console.log(isStudent && hasFreeShipping); // False
console.log("Is isStudent true or age >= 40? I predict True.");
console.log(isStudent || personsAge >= 40); // True
// Array membership tests
let fruits = ['apple', 'banana', 'orange'];
console.log("Is 'banana' in fruits? I predict True.");
console.log(fruits.includes('banana')); // True
console.log("Is 'grape' in fruits? I predict False.");
console.log(fruits.includes('grape')); // False
