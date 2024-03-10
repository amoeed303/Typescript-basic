//Dinner invite Drama 
// Question 14 : Guests List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let Guests: string[] = ["Ahmad", "Usama", "Hammad", "Saim","Jawad"];
Guests.map((guest) => {
    console.log(guest, " you are invited buddy ");
})

console.log(`${Guests[4]} is not comming `);

// Question 15: Changing Guests List: You just heard that one of your guestss can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
Guests[4] = "Ahmed";
Guests.map((guest) => {
    console.log(guest, " you are invited buddy this time fr ");
})


console.log(`We Have Found A Bigger Dinner Table`);

// Question 16: More Guestss: You just found a bigger dinner table, so now more space is available. Think of three more guestss to invite to dinner.
Guests.splice(0,0,"Kashif");
Guests.splice(4, 0, "Amir");
Guests.push("Sajjad");

Guests.map((guest) => {
    console.log(guest, " you are invited buddy this time final ");
})

console.log("Large Table is Not Available Can invite only two people");

// Question 17: Shrinking Guests List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guestss.
while (Guests.length > 2) {
  const removeGuests = Guests.pop();
  console.log(`Sorry ${removeGuests},  get out`);
}

Guests.map((guest) => {
    console.log(guest, " you are invited buddy ");
})
//Question 19length 
console.log("numner of people i am inviting :" ,Guests.length )
Guests.pop();
Guests.pop();
console.log("Removed All elements");
console.log(Guests.length, Guests);


