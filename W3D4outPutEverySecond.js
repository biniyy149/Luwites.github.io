function printNumber(from, to) {
    let x = from;
    while(x <= to ) {
        alert(x);
        x++;
    }
}
setInterval(printNumber(1,7), 1000);