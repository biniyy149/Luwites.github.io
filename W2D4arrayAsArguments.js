let arr, num, n;
arr = [1,2,3];
num = [7,8,9];
function numbers(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(numbers(...arr));
console.log(numbers(...num));

