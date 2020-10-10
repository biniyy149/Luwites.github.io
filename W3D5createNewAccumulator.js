/*eslint-disable*/
const prompt = require("prompt-sync")();
function Accumulator(startingValue) {
    this.read = function() {
        this.currentValue = (parseFloat(prompt("enter one value")));
    };
    this.value = function() {
        return startingValue + this.currentValue;
    };

}
let accumulator = new Accumulator(3);
accumulator.read();
console.log(accumulator.value());