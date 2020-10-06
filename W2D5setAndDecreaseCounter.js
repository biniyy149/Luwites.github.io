function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = value => count = value;

    counter.decrease = () => count--;

    return counter;
}
let callCounter = makeCounter();
console.log(callCounter());
console.log(callCounter.set(6));
console.log(callCounter.decrease());
