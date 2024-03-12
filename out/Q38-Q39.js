"use strict";
//Q38
function describeCity(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describeCity("Lahore");
describeCity("Tokyo", "Japan");
//Q39
console.log("Q39");
function city_country(city, country) {
    return `\"${city}, ${country}\"`;
}
const lahorePakistan = city_country("Lahore", "Pakistan");
const londonUK = city_country("London", "UK");
console.log(lahorePakistan);
console.log(londonUK);
