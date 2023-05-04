// //1
// class Circle {
//     constructor(x, y, radius) {
//         this.x = x;
//         this.y = y;
//         this.radius = radius;
//     }
//     circleLength() {
//         let circleLength = 2 * Math.PI * this.radius;
//         return circleLength.toFixed(3);
//     }
//     static circleLength2(radius) {
//         let circleLength = 2 * Math.PI * radius;
//         return circleLength.toFixed(3);
//     }
//     copyCircle() {
//         return new Circle(this.x, this.y, this.radius);
//     }
//     static copyCircle2(x, y, radius) {
//         return new Circle(x, y, radius);
//     }
//     standInCircle(a, b) {
//         let standInCircle = Math.sqrt((a - this.x) ** 2 + (b - this.y) ** 2);
//         return standInCircle.toFixed(3) <= this.radius;
//     }
//     circleToString() {
//         return `Circle - x=${this.x}, y=${this.y}, radius=${this.radius}`
//     }
// }

// const circle1 = new Circle(2, 5, 6);
// console.log(circle1.circleLength());
// console.log(Circle.circleLength2(7));
// console.log(circle1.copyCircle());
// console.log(Circle.copyCircle2(2, 4, 7));
// console.log(circle1.standInCircle(9, 68));
// console.log(circle1.circleToString());

// //2
// function propsCount(currentObject) {
//     return Object.keys(currentObject).length
// }
// let mentor = {
//     course: "JS fundamental",
//     duration: 3,
//     direction: "web-development"
// };
// console.log(propsCount(mentor));

// //3

// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//     showFullName() {
//         return (`${this.name} ${this.surname}`);
//     }
// }

// class Student extends Person {
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     }
//     showFullName(midleName) {
//         return (`${super.showFullName()} ${midleName}`);
//     }
//     showCourse() {
//         const thisYear = new Date().getFullYear();
//         const thisMonth = new Date().getMonth();
//         if (thisMonth >= 9) {
//             return thisYear - this.year + 1;
//         }
//         return thisYear - this.year;
//     }
// }
// const stud1 = new Student("Petro", "Petrenko", 2019);
// console.log(stud1.showFullName("Petrovych"));
// console.log("Current course: " + stud1.showCourse());

// //4
// const btn14 = document.querySelector(".marker-btn");
// const btn15 = document.querySelector(".markerfill-btn")
// const markerText = document.querySelector(".marker-text");
// const markerInput = document.querySelector(".marker")
// class Marker {
//     constructor(color, inkAmount) {
//         this.color = color;
//         this.inkAmount = inkAmount;
//     }
//     markerPrint(text) {
//         let newInkAmount = this.inkAmount;
//         for (let i = 0; i < text.length; i++) {
//             if (text[i] !== " ")
//                 newInkAmount -= 0.5;
//         }
//         return newInkAmount + '%';
//     }
// }

// class MarkerRefill extends Marker {
//     constructor(color, inkAmount, refillValue) {
//         super(color, inkAmount);
//         this.refillValue = refillValue;
//     }
//     markerFill() {
//         this.inkAmount += this.refillValue;
//         return this.inkAmount + '%';
//     }
// }


// const marker1 = new Marker('green', 60);
// console.log(marker1.markerPrint('text    3sd'));
// const marker1fill = new MarkerRefill('green', 60, 25)
// console.log(marker1fill.markerFill());

// btn14.addEventListener('click', () => {
//     let outputMarker = markerInput.value;
//     markerText.innerHTML = outputMarker;
//     markerText.style.color = marker1.color;
//     markerText.style.opacity = marker1.markerPrint(outputMarker);
// });

// btn15.addEventListener('click', () => {
//     let outputMarker = markerInput.value;
//     markerText.innerHTML = outputMarker;
//     markerText.style.color = marker1.color;
//     markerText.style.opacity = marker1fill.markerFill(outputMarker);
// });


// //5

// class Worker {
//     #experience;
//     constructor(fullName, dayRate, workingDays) {
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//         this.#experience = 1.2;
//     }

//     showSalary() {
//         let salary = this.dayRate * this.workingDays;
//         // console.log(`${ this.fullName} salary: ${salary}`);
//         return salary;
//     }
//     showSalaryWithExperience() {
//         let newSalary = this.dayRate * this.workingDays * this.#experience;
//         // console.log(`${ this.fullName} salary: ${newSalary}`);
//         return newSalary;
//     }


//     get experience() {
//         return this.#experience;
//     }

//     set experience(value) {
//         this.#experience = value;
//     }
// }

// let worker1 = new Worker("John Johnson", 20, 23);
// let worker2 = new Worker("Tom Tomson", 48, 22);
// let worker3 = new Worker("Andy Ander", 29, 23);

// let workers = [worker1, worker2, worker3];

// for(let item of workers) {
//     console.log(item.fullName);
//     console.log(`${item.fullName} salary: ${item.showSalary()}`);
//     console.log("New experience: " + item.experience);
//     console.log(`${item.fullName} salary: ${item.showSalaryWithExperience()}`);
//     item.experience = 1.5;
//     console.log("New experience: " + item.experience);
//     console.log(`${item.fullName} salary: ${item.showSalaryWithExperience()}`);
// }

// workers.sort((a, b) =>{
//     a.showSalaryWithExperience(); - b.showSalaryWithExperience();;
// });
// console.log("Sorted salary:");
// for (let worker of workers) {
//   console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`);
// }
    


