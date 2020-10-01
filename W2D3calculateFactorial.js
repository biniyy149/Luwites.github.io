function calculateFactorial( n ) {
    factorial = 1;
    for (let i = n; i > 0; i--) {
       factorial *= i;
    }
    return factorial;
}

console.log(calculateFactorial( 7 ));

