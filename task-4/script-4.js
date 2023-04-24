//1
const btn9 = document.querySelector(".btn9");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
function sumSliceArray(arr, first, second) {
    for (let item of arr) {
        if (isNaN(item)) {
            throw TypeError("Value in array is not a number")
        }
    }
    if (isNaN(first, second)) {
        throw new TypeError("Second and third arguments are not a numbers!");
    }
    else if (!first || !second || !arr) {
        throw new Error("Please, enter all of arguments")
    }
    else if (!Array.isArray(arr)) {
        throw new TypeError("First argument is not an array!");
    }
    else if (first >= arr.length || second >= arr.length) {
        throw new RangeError("Value of second and third arguments are out of range");
    }

    let sum = arr[first] + arr[second];
    return sum;
}
btn9.addEventListener('click', () => {
    const firstInput = first.value;
    const secondInput = second.value;
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    try {
    const result = sumSliceArray(arr, firstInput, secondInput);
    console.log(result);
    }
    catch(error){
    console.error(error.message);
    }
});

//2
const btn10 = document.querySelector(".btn10");
function checkAge(name, age, status) {
    try {
        name = document.querySelector(".user-name").value;
        age = document.querySelector(".user-age").value;
        status = document.querySelector(".user-status").value;
    }
    catch (error) {
        console.error(error.message);
    }
    if (!name) {

        alert(" The field is empty! Please enter your name");
        throw new Error("The field user-name is empty");
    }
    else if (!age) {
        alert("The field is empty! Please enter your age");
        throw new Error("The field user-age is empty");
    }
    else if (!status) {
        alert("The field is empty! Please enter your status");
        throw new Error("The field user-status is empty");
    }
    else if (age < 18 || age > 70) {
        alert("You are too old or too young to watch this movie!!!");
        throw new RangeError("Age of user is out of range");
    }
    else if (isNaN(age)) {
        throw new TypeError("Field age is not a number");
    }
    else if (status !== "admin" && status !== "Mike") {
        throw new EvalError("Status input is incorrect");
    }
    alert("You can watch films at this site");

}

btn10.onclick = checkAge;


//3
const btn11 = document.querySelector(".btn11");
function calcRectangleArea(width, height) {
    width = document.querySelector(".width");
    height = document.querySelector(".height");
    let rectangleArea = width * height;
}