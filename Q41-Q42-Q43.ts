
//Q41
let magicianName: string[] = ["Saim", "Hammad", "Sheikh", "Shah", "yatri"];
function showMagicians(magicianName: string[]): void {
    magicianName.map((magician, index) => {
        console.log(`${index + 1} magician is ${magician}`)
    })
}
showMagicians(magicianName);
//Q42
function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
        greatMagicians.push(`Great ${magician} `);
    }
    return greatMagicians;

}
const temp: string[] = [...magicianName];
const greatMagicians = makeGreat(temp);

console.log("\nOriginal magicians:");
showMagicians(magicianName);

console.log("\nGreat magicians:");
showMagicians(greatMagicians);
