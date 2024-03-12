"use strict";
function makeSandwich(...items) {
    console.log("Making Sandwiches with the following ingredients");
    items.map((item) => {
        console.log(item);
    });
}
makeSandwich("Bread", "Butter", "Jam");
makeSandwich("Patty", "Sauce");
makeSandwich("Patty", "Cabbage", "Onions", "Sauce");
