const prompt = require("prompt-sync")();
function Calculator() {
    this.read = function () {
        this.num1 = (parseFloat(prompt("please enter a number")));
        this.num2 = (parseFloat(prompt("please enter a second num")));
    };

    this.sum = function () {
        return this.num1 + this.num2;
    };
    this.mul = function () {
        return this.num1 * this.num2;
    };
}
let calculator = new Calculator();
calculator.read();

console.log(calculator.mul());