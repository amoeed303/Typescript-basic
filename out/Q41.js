"use strict";
//Q41
let magicianName = ["Saim", "Hammad", "Sheikh", "Shah", "yatri"];
function showMagicians(magicianName) {
    magicianName.map((magician, index) => {
        console.log(`${index + 1} magician is ${magician}`);
    });
}
showMagicians(magicianName);
//Q42
function makeGreat(magicians) {
    const greatMagicians = [];
    for (const magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}
const temp = [...magicianName];
const greatMagicians = makeGreat(temp);
console.log("\nOriginal magicians:");
showMagicians(magicianName);
console.log("\nGreat magicians:");
showMagicians(greatMagicians);
