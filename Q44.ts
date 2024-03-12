interface Car{
    manufacturer: string;
    modelName: string;
    options?: any[];

}
function carManufactures(manufacturer:string,modelName:string,options?:any[]): Car{

    let car: Car={
        manufacturer,
        modelName,
        
    }
    if (options !== undefined) {
        car.options = options;
    }

    return car;
}

let car1 = carManufactures("BMW", "m5", ["Coupe", "Black"]);
let car2 = carManufactures("Mercedes", "AMG", ["Coupe"]);
let car3 = carManufactures("Toyota", "Supra");

console.log(car1);
console.log(car2);
console.log(car3);