/* eslint-disable */
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterRange(arr, a, b) {
    return arr.filter(num => (num >= a && num <= b));
}
console.log(filterRange(arr2, 3, 7));