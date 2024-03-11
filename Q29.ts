let favorite_fruits: string[] = ["strawberry","mango", "apple", "grapefruit"];  

if (favorite_fruits.includes("mango")) {
  console.log("You really like mangoes!");
}

if (favorite_fruits.includes("apple")) {
  console.log("You really like apples!");
}

if (favorite_fruits.includes("grapefruit")) {
  console.log("You really like grapefruits!");
}

if (favorite_fruits.includes("banana")) { // Check for a fruit not in the list
  console.log("You really like bananas!"); // This won't print
}


