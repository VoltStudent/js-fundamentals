//1
const btn1 = document.querySelector(".btn1");
function createArray(start, end) {
    let arr = [];
    for (let i = start; i <= end; ++i) {
        arr.push(i);
    }
    return arr;
}
btn1.addEventListener('click', () => {
    start = +document.querySelector(".start").value;
    end = +document.querySelector(".end").value;
    console.log(createArray(start, end));
});

//2
const btn2 = document.querySelector(".btn2");
function numbers(a, b) {
    let string = "";
    for (let i = a; i <= b; ++i) {
        for (let j = 0; j < i - a + 1; ++j) {
            string += i + ",";
        }
    }
    return string;
}
btn2.addEventListener('click', () => {
    a = +document.querySelector(".a").value;
    b = +document.querySelector(".b").value;
    console.log(numbers(a, b));
});

//3
const btn3 = document.querySelector(".btn3");
function randArray(k) {
    let arr2 = [];
    for (let i = 0; i <= k; ++i) {
        arr2.push(Math.round(Math.random() * 500));
    }
    return arr2;
}
btn3.addEventListener('click', () => {
    k = +document.querySelector(".k").value;
    console.log(randArray(k));
});

//4
const btn4 = document.querySelector(".btn4");
const arr3 = [5, 3, 4, 5, 6, 7, 3];
const arr4 = compact(arr3);
function compact(arr3) {
    let arr5 = [];
    for (let i = 0; i < arr3.length; ++i) {
        if (!arr5.includes(arr3[i])) {
            arr5.push(arr3[i]);
        }
    }
    return arr5;
}
btn4.addEventListener('click', () => {
    console.log(arr4);
});

//5
const btn5 = document.querySelector(".btn5");
let arr6 = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun'];
let arrNew = oneTypeArr(arr6);
function oneTypeArr(arr6) {
    let arr7 = [];
    let arr8 = [];
    let resultArr = [];
    for (let i = 0; i < arr6.length; ++i) {
        if (typeof arr6[i] === "string") {
            arr7.push(arr6[i]);
        }
        else if (typeof arr6[i] === 'number') {
            arr8.push(arr6[i]);
        }
        if (Array.isArray(arr6[i])) {
            for (let j = 0; j < arr6[i].length; ++j)
                if (typeof arr6[i][j] === "string") {
                    arr7.push(arr6[i][j]);
                }
                else if (typeof arr6[i][j] === 'number') {
                    arr8.push(arr6[i][j]);
                }
        }
    }

    resultArr.push(arr7);
    resultArr.push(arr8);
    return resultArr;
}

btn5.addEventListener('click', () => {
    console.log(arrNew);
});

//6
const btn6 = document.querySelector(".btn6");
function calc(a, b, op) {
    if (typeof a === "number" && typeof b === "number" && typeof op === "number") {
        switch (op) {
            case 1:
                return a - b;
            case 2:
                return a * b;
            case 3:
                return a / b;
            default:
                return a + b;
        }
    }
}

btn6.addEventListener('click', () => {
    a = +document.querySelector(".a-value").value;
    b = +document.querySelector(".b-value").value;
    op = +document.querySelector(".op").value;
    console.log(calc(a, b, op));
});

//7
const btn7 = document.querySelector(".btn7")
const resultTask7_1 = findUnique([1, 2, 3, 4, 5, 6, 7, 8]);
const resultTask7_2 = findUnique([1, 2, 2, 3, 4, 5, 6, 7, 8]);
function findUnique(arr9) {

    let obj = arr9.reduce((key, num) => {
        if (!key[num]) {
            key[num] = 1;
            return key;
        } else {
            key[num] += 1;
            return key;
        }
    }, {});
    for (let index in obj) {
        if (obj[index] > 1) {
            return false;
        }

    }
    return true
}

btn7.addEventListener('click', () => {
    console.log(resultTask7_1);
    console.log(resultTask7_2);
});

//Ускладнена задача
const btn8 = document.querySelector(".btn8")
const tom = create("pass_for_Tom");
function create(str) {
    return function (newStr) {
        if (newStr === str) {
            return true;
        }
        return false;
    }
}

btn8.addEventListener('click', () => {
    console.log(tom("pass_for_Tom"));
    console.log(tom("pass_for_tom"));
});

