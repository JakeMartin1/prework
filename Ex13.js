//ex13
const x = 101;

if (x < 100) {
    console.log("The condition was true!");
    console.log(`${x} is less than 100`);
}
console.log("This will be displayed regardless.");

//ex13.2
console.log(' ')
const myPassword = "abc12333232432";

if (myPassword.length < 10) {
    console.log("Sorry this password isn't long enough, try again.");
} else {
    console.log("Great password length!");
}

//ex13.3
console.log(' ')
let day = "Tuesday";
let special = ""; //you don't know what the special will be yet so make it an empty string for now

if (day == "Monday") {
    special = "blueberry muffin";
} else if (day == "Tuesday") {
    special = "coffee cake";
} else if (day == "Wednesday") {
    special = "chocolate croissant";
} else if (day == "Thursday") {
    special = "lemon bar";
} else if (day == "Friday") {
    special = "cupcake";
} else {
    console.log(`Today's ${day}!`);
    console.log("Sorry we're closed on the weekend!");
}


//if the length of special is not greater than 0 it means it’s still empty and thus it must be a weekend
if (special.length > 0) {
    console.log(`Today is ${day} and the special is ${special}.`);
}
