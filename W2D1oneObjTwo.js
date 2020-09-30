/*eslint-disable*/
let obj = {};

function xyz() {
    return obj;
}
function abc() {
    return obj;
}
console.log(new xyz() == new abc())
