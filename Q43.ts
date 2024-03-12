function makeSandwich(...items: string[]):void {
    console.log("Making Sandwiches with the following ingredients");
    items.map((item) => {
        console.log(item);
    })

}

makeSandwich("Bread", "Butter", "Jam");
makeSandwich("Patty", "Sauce");
makeSandwich("Patty", "Cabbage", "Onions", "Sauce");