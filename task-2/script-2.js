//1

let a = +prompt();
let b = +prompt();
let c = +prompt();

if (a < b < c) {
  alert("True");
} else {
  alert("false");
}

//2

let x = 1;
let y = 2;

let res1 = String(x + y);
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = Boolean(x) + String(y);
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = Boolean(x + y);
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = x - "y";
console.log(res4); // NaN
console.log(typeof res4); // ""number""

//3

let isAdult = prompt();
if (isAdult > 18) {
  alert("Ви досягли повнолітнього віку");
} else {
  alert("Ви ще надто молоді");
}
//4

//5


let firstSideLength = +prompt();
let secondSideLength = +prompt();
let thirdSideLength = +prompt();
if (isNaN(firstSideLength || secondSideLength || thirdSideLength)) {
  console.log("Incorrect data");
} else {
  let halfPerimeter =
    (firstSideLength + secondSideLength + thirdSideLength) * 0.5;
  let triangleArea = Math.sqrt(
    halfPerimeter *
      (halfPerimeter - firstSideLength) *
      (halfPerimeter - secondSideLength) *
      (halfPerimeter - thirdSideLength)
  );
  console.log(triangleArea.toFixed(3));
  if (
    firstSideLength ** 2 === secondSideLength ** 2 + thirdSideLength ** 2 ||
    secondSideLength ** 2 === firstSideLength ** 2 + thirdSideLength ** 2 ||
    thirdSideLength ** 2 === firstSideLength ** 2 + secondSideLength ** 2
  ) {
    console.log("This is right triangle");
  } else {
    console.log("This is not right triangle");
  }
}


//6 
let date = new Date;
let hours = date.getHours();
if(hours >= 23 && hours < 5) {
  alert("Доброї ночі");
}
else if(hours >= 5 && hours < 11 ) {
  alert("Доброго ранку");
}
else if(hours >= 11 && hours < 17 ) {
  alert("Доброго дня");
}
else{
  alert("Доброго вечора");
}

switch(hours){
  case 23: case 0: case 1: case 2: case 3: case 4:
    alert("Доброї ночі");
    break;
    case 5: case 6: case 7: case 8: case 9: case 10:
    alert("Доброго ранку");
    break;
    case 11: case 12: case 13: case 14: case 15: case 16:
    alert("Доброго дня");
    break;
  default:
    alert("Доброго вечора")
    break;   
} 

//*** 
let income = document.querySelector('.income');
let beingLate = document.querySelector('.being-late');
let codeStrings = document.querySelector('.code-string');
let vasiaCodestrings;
let vasiaLates;
let delayPenalty; 
