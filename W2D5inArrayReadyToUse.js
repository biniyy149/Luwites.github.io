let arrForInArr = [1, 2, 3, 4, 5, 6, 7]
function inArray(arr) {
    return function (x) {
        return arr.includes(x);
    };
}
let result = inArray;
let final = arrForInArr.filter(result([3, 5, 8]))
console.log(final);