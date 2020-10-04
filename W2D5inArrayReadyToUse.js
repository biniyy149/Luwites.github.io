let arrForInArr = [1, 2, 3, 4, 5, 6, 7]
function inArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let tempArr = [];
        return function (ele) {
            for (let j = 0; j < ele.length; j++) {
                if (arr[i] === ele[j]) {
                    tempArr[k] = arr[i];
                }
            }
        }
    }
    return tempArr;
}
let result = inArray;
let final = arrForInArr.filter(result([3, 5]))
console.log(final);