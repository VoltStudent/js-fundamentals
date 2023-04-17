//2
console.log("Popovych");

//3
let car = alert("Daewoo Lanos");
let supercar = alert("Bugatti");
supercar = car;

//4
let dish = {
  name: "bohrach",
  litres: 5,
  tasty: true,
  ingradients: null,
  dayCooking: undefined,
};

//5
let isAdult = confirm("Are you adult?");
console.log(isAdult);

//6
let myName = "Mykhailo";
let mySurname = "Popovych";
let group = "JS Fundamentals";
let yearOfBirth = 1988;
let married = false;
let itJobs = null;
let firstJobDay;

console.log(`yearOfBirth ${typeof yearOfBirth}`);
console.log(`married ${typeof married}`);
console.log(`myName ${typeof myName}`);
console.log(`mySurname ${typeof mySurname}`);
console.log(`itJobs ${typeof itJobs}`);
console.log(`fistJobDay ${typeof firstJobDay}`);

//7
let userLogin = prompt("Enter your login");
let userEmail = prompt("Enter your email");
let userPassword = prompt("Enter your password");
alert(
  `Dear ${userLogin}, your email is ${userEmail}, your password is ${userPassword}. Congratulations!!! You were broken`
);

//8
let secondsInMinute = 60;
let secondsInHour = secondsInMinute * 60;
let secondsInDay = secondsInHour * 24;
let secondsinMonth = secondsInDay * 30;
alert(`Seconds in hour: ${secondsInHour}`);
alert(`Seconds in day: ${secondsInDay}`);
alert(`Seconds in month: ${secondsinMonth}`);
