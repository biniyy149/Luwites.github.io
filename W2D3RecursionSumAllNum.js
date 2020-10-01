function sumAllNumbersTillOne(n) {
    if (n === 1) {
        return 1;
    }
    else {
        return n + sumAllNumbersTillOne(n - 1);
    }
}