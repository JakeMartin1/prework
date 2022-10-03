//ex8
const firstName1 = "Jane";
const lastName1 = "Austen";
const fullName1 = firstName1 +" "+ lastName1;
console.log("The full name is", fullName1);

//ex8.2
const patientName = "Old McGroan";
let apptTime = "2:31pm";
let apptDay = "3rd-day";

let reminderMessage = `Hi ${patientName}! 
This is a reminder that you have an appointment at:
${apptTime} on ${apptDay}. 
See you then!`;
console.log(" ")
console.log(reminderMessage);


//ex8.3
console.log(" ")
const firstName = "Jakob"//add your first name
const lastName = "Martin"//add your last name
const fullNameConcat = firstName + " "+lastName
//create your full name from the first two variables using concatenation 
const fullNameInterp = `${firstName} ${lastName}`
//create your full name from the first two variables using interpolation

//don't change the following line, 
//checks to see that concatenation and interpolation gave results
console.log("Are your fullNameConcat and fullNameInterp variables equal?")
console.log(fullNameConcat == fullNameInterp); 

let myAge = "32"//add your age
let faveFood = "steak"//add your favorite food
let faveColor = "royal blue"//add your favorite color
let miniBio = `Hi, my name is ${fullNameInterp}, aka ${fullNameConcat} =Concat.
I am ${myAge}. My favorite food is ${faveFood}, but that's 
not to be confused with my fav color, ${faveColor}.`
//use string interpolation to create summary 
//that includes your full name, age, favorite food, and favorite color
console.log("Your mini bio is:");
console.log(miniBio);