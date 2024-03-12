"use strict";
function carMAnufactures(manufacturer, modelName, options) {
    let car = {
        manufacturer,
        modelName,
    };
    if (options !== undefined) {
        car.options = options;
    }
    return car;
}
let car1 = carMAnufactures("BMW", "m5", ["Coupe", "Black"]);
let car2 = carMAnufactures("Mercedes", "AMG", ["Coupe"]);
let car3 = carMAnufactures("Toyota", "Supra");
console.log(car1);
console.log(car2);
console.log(car3);
