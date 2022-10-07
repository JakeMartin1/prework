
// // //Conditionals
// // const myNewPass = "password";

// // if (myNewPass.length < 10) {
// //     console.log("Password NOT long enough.");
// // } else {
// //     console.log("Password is long enough.")
// // }

// // const myNewrPass = "password454";

// // if (myNewrPass.length < 10) {
// //     console.log("Password NOT long enough.");
// // } else {
// //     console.log("Password is long enough.")
// // }

// // const realPassword = "passwordsssss"
// // const enteredPass = "pass"

// // if (realPassword != enteredPass) {
// //     console.log("ACCESS DENIED")
// // }

// // let dayOfWeek = "Sa";
// // if (dayOfWeek == "W" || dayOfWeek == "R") {
// //     console.log("Class W");
// // } else if (dayOfWeek == "Sa") {
// //     console.log ("Long Class Sat");
// // }    else {
// //     console.log("Free");
// // }

// let password = "new_passwords";

// // if (password.length > 8 && password.includes("_")) {
// //     console.log("Acceptable");
// // } else {
// //     console.log ("Not Acceptable");
// // }


// //FOR LOOP 
// // run a certain number of times

// //console.log (1);
// console.log("Loop");

// for (let i1=0; i1<5; i1++) {
//     console.log(i1+1);
// }

// console.log("New Loop");
// for (let i=0; i<=5; i++) {
//     console.log(i);
// }

// const pet = ["dog", "cat", "fish", "Sq", "SKu"]

// for (let i=0; i< pet.length; i++){
//     let cpet = pe[i]
//     if (pet[i].length > 3) {
//         console.log ("j");
// // } else {
// //     console.log (`k ${cpet}`);
// }

// only a name that starts with letter C
// const names = ["Jonny", "Carri", "Chris", "Mark", "Jon", "Doug"]

// for (let i=0; i< names.length; i++){
//     let partyInvite = names[i];
//     if (partyInvite[0] == "C") { 
//         // ()s are functions []s are in the array
//         // || = or 
//         console.log(`${partyInvite} are better than everything.`);
//     } else {
//     console.log (`${partyInvite} may not come.`);
// }
// }

/// While Loop
//run a loop an undetermined number of times until a condition is met
//log 1-10
// for let ( [where to start] ; [] ; [conditions to end])
// console.log("While");

// for (let i1 = 0; i1 < 10; i1++) {
//     console.log(i1 + 1);
// }

// console.log("While");
// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// let grades = [85, 92, 99, 76, 0, 91];
// let gradesLength = grades.length;
// let total = 0 ;

// //loop until grades is empty
// while (grades.length > 0) {
//     const currentGrade = grades.pop();
//     total = total + currentGrade; //this what processes in the loop
// }

// console.log("My Total is", total);

// const gradeAverage = total / gradesLength;
// console.log ("Average", gradeAverage.toFixed(2))

/* game*/

let count = 0;
let score = 0;
while (score <= 1000) {
    let randomNumber = Math.random() * 100;
    score = score + randomNumber
    count++
}

console.log("Score is", score.toFixed(5));
console.log("Numver of steps", count);