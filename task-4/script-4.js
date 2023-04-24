//1

function sumSliceArray(arr, first, second) {
    let sum = arr[first] + arr[second];
    return sum;
}

console.log(sumSliceArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 5));