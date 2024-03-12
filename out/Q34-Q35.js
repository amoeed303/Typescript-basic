"use strict";
//Q34 print pizza names using for loop
const favoritePizzas = ["pepperoni", "kebab", "veg"];
for (const pizza of favoritePizzas) {
    console.log(pizza);
}
console.log("\n"); // Add a newline for better readability
for (const pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}
console.log("I really like all of these pizzas ", favoritePizzas);
//Q35 animals
const pets = ["dog", "cat", "rabbit"];
for (const pet of pets) {
    console.log(`A ${pet} would make a great pet.`);
}
console.log("\nAll of these animals have four legs");
