"use strict";
//Q32 
const currentUsers = ["Abdul", "khan", "Admin", "sheikh"];
const newUsers = ["Abdul", "Admin", "Hammad", "Waiz"];
// newUsers.map((u) => {
//     if (currentUsers.includes(u.toLowerCase())) {
//         console.log("Name already taken chose another name");
//     } else {
//         console.log("You can use this name king");
//     }
// })
for (const nu of newUsers) {
    const usernameLower = nu.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    let isAvailable = true;
    for (const existingUser of currentUsers) {
        if (existingUser.toLowerCase() === usernameLower) {
            isAvailable = false;
            break;
        }
    }
    if (isAvailable) {
        console.log(`${usernameLower} is available.`);
    }
    else {
        console.log(`${usernameLower} is already taken. Please choose another username.`);
    }
}
