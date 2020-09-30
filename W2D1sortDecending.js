/*eslint-disable*/
let arr1 = [9, 4, 7, 1, -5, 6];
function sorter(arr) {
    let sorted = arr.sort((a,b) => b-a);
    return sorted;
}
console.log(sorter(arr1));
