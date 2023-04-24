//1
let arr = [];
function createArray(start, end) {
    for (let i = start; i <= end; ++i) {
        arr.push(i);
    }
    return arr;
}
createArray(2, 9);
console.log(arr);

//2
let string = "";
function numbers(a, b) {
    for (let i = a; i <= b; ++i) {
        for (let j = 0; j < i - a + 1; ++j) {
            string += i + ",";
        }
    }
}

numbers(1, 3);
console.log(string);

//3
let arr2 = [];
function randArray(k) {
    for (let i = 0; i <= k; ++i) {
        arr2.push(Math.round(Math.random() * 500));
    }
}
randArray(5);
console.log(arr2);

//4
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
console.log(arr4); // [5,3,4,6,7]

//5
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

console.log(arrNew);

//6
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

console.log(calc(3, 7, 2));

//7
let resultTask7_1 = findUnique([1, 2, 3, 4, 5, 6, 7, 8]);
let resultTask7_2 = findUnique([1, 2, 2, 3, 4, 5, 6, 7, 8]);
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

console.log(resultTask7_1);
console.log(resultTask7_2);

//Ускладнена задача
function create(str) {
    return function(newStr) {
        if(newStr === str){
            return true;
        } 
        return false;
    }
}

const tom = create("pass_for_Tom");
tom("pass_for_Tom"); //повертає true 
tom("pass_for_tom"); //повертає false