/*eslint-disable*/
let arr1 = ["hello", "how", "are", "you"];
function copySorted(arr) {
    return arr.slice().sort();
}


console.log(copySorted(arr1));