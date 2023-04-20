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
    arr2.push(Math.ceil(Math.random() * 500));
  }
}
randArray(5);
console.log(arr2);

//4
const arr3 = [5, 3, 4, 5,6,7,3];
const arr4 = compact(arr);
function compact(arr3) {
    let arr5 = arr3.reduce((keys, value) =>{
        if(!keys[value]){
            return keys[value] = 1;
        }
        else {
            return keys[value] =+ 1;
        }
    },{});
   
}