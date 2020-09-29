/*eslint-disable*/
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num < a || num > b) {
            arr.splice(i, 1);
            i--;
        }
    }

}
// not finalized
