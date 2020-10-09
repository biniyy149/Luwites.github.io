function print(from, to) {
    let now = from;

    setTimeout(function count() {
        alert(now);
        if (now < to) {
            setTimeout(count, 4000);
        }
        now++;
    }, 4000);
}
print(1, 7);


