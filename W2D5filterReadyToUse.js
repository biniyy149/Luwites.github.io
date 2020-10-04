function inBetween(a, b) {
    return function between(n) {
        if (n >= a && n <=b) {
            return true;
        } else {
            return false;
        }
    }
}
arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let x = inBetween;
y = arr3.filter(x(5,10));
console.log(y);
