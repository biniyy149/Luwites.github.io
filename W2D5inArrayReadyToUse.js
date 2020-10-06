let arrForInArr = [1, 2, 3, 4, 5, 6, 7]
function inArray(arr) {
        function common(n) {
            if (n === arr[i]) {
                temp.push(arr[i]);
            } else continue;
        }
        return temp;
    
}


let result = inArray;
let final = arrForInArr.filter(result([3, 5, 4]))
console.log(final);