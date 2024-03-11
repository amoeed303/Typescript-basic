"use strict";
let userNames = ["admin", "saim", "sheikh", "john cena", "ken"];
userNames.map(user => {
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user}, thank you for loggin in.`);
    }
    userNames.pop();
});
if (userNames.length == 0) {
    console.log("No users we need to find some users");
}
