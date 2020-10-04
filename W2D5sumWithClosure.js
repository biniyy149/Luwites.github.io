function sum(a) {

    return function (b) {
        return a + b; 
    };
    
}

console.log(sum(5)(10)); // 15
console.log(sum(6)(-5)); // 1
console.log(sum(3)(0)); // 3
console.log(sum(-4)(0)); // -4 I think it is possible because it is calling the function inside too ananymously