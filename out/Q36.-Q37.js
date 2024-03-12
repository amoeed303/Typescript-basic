"use strict";
//Q36 to cretae function and Q37 to make use of default parmeters
function printShirt(size = "L", message = "I love TypeScript") {
    console.log("\tRecived Shirt size and Messge to print\n");
    console.log("\tShirt size is :", size);
    console.log("\tShirt Message is :", message);
}
printShirt();
printShirt("M");
printShirt("S", "Free Gaza");
