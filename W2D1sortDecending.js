/*eslint-disable*/
let arr1 = [9, 4, 7, 1, -5, 6];
function sorter(arr) {
    let final = arr.sort((a,b) => b-a);
    return final;
}
console.log(sorter(arr1));
