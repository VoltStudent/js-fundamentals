//1
const btn9 = document.querySelector(".btn9");
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sumSliceArray(arr, first, second) {
    for (let item of arr) {
        if (isNaN(item)) {
            throw TypeError(":Value in array is not a number")
        }
    }
    if (isNaN(first) || isNaN(second)) {
        throw new TypeError(":Second and third arguments are not a numbers!");
    }

    else if (!Array.isArray(arr)) {
        throw new TypeError(":First argument is not an array!");
    }
    else if (first >= arr.length || second >= arr.length || first < 0 || second < 0) {
        throw new RangeError(":Value of second and third arguments are out of range");
    }

    return arr[first] + arr[second];
}
btn9.addEventListener('click', () => {
    const first = +document.querySelector(".first").value;
    const second = +document.querySelector(".second").value;

    try {
        const result = sumSliceArray(arr, first, second);
        console.log(result);
    }
    catch (error) {
        console.error(error.name, error.message);
    }
});

//2
const btn10 = document.querySelector(".btn10");
function checkAge(name, age, status) {

    if (!name) {

        alert(" The field is empty! Please enter your name");
        throw new Error(":The field user-name is empty");
    }
    else if (!age) {
        alert("The field is empty! Please enter your age");
        throw new Error(":The field user-age is empty");
    }
    else if (!status) {
        alert("The field is empty! Please enter your status");
        throw new Error(":The field user-status is empty");
    }
    else if (age < 18 || age > 70) {
        alert("You are too old or too young to watch this movie!!!");
        throw new RangeError(":Age of user is out of range");
    }
    else if (isNaN(age)) {
        throw new TypeError(":Field age is not a number");
    }
    else if (status !== "admin" && status !== "Mike") {
        throw new EvalError(":Status input is incorrect");
    }
    alert("You can watch films at this site");

}

btn10.addEventListener('click', () => {
    const name = document.querySelector(".user-name").value;
    const age = +document.querySelector(".user-age").value;
    const status = document.querySelector(".user-status").value;

    try {
        const result = checkAge(name, age, status);
    }
    catch (error) {
        console.error(error.name, error.message);
    }
});


//3
const btn11 = document.querySelector(".btn11");
function calcRectangleArea(width, height) {

    if (width === 0 || height <= 0) {
        throw new RangeError(":Incorrect input");
    }
    else if (isNaN(width) || isNaN(height)) {
        throw new TypeError(":Values must be a number");
    }
    return width * height;
}
btn11.addEventListener('click', () => {
    const width = +document.querySelector(".width").value;
    const height = document.querySelector(".height").value;

    try {
        const result = calcRectangleArea(width, height);
        console.log(result);
    }
    catch (error) {
        console.error(error.name, error.message);
    }
});

//4
const btn12 = document.querySelector(".btn12");
class MonthException {

    constructor(message) {
        this.message = message;
        this.name = "MonthException";
    }
}

function showMonthName(month) {
    const monthInYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (month < 1 || month > 12) {
        throw new MonthException(':Incorrect month number');
    }

    return monthInYear[month - 1];
}


btn12.addEventListener('click', () => {
    const month = +document.querySelector(".month").value;
    try {
        console.log(showMonthName(month));  // May
    }

    catch (error) {
        if (error instanceof MonthException) {
            console.error(error.name, error.message);
        }
    }
});

const btn13 = document.querySelector(".btn13");

function showUser(id) {
    if (id < 0) {
        throw new Error('ID must not be negative: ' + id);
    }
    return { id: id };
}

function showUsers(ids) {
    const arr = [];
    for (let item of ids) {

        try {
          arr.push(showUser(item));
        }

        catch (error) {
            console.error(error.name, error.message);
        }
    }
    return arr;
}

btn13.addEventListener('click', () => {
    console.log(showUsers([7, -12, 44, 22]));
});

