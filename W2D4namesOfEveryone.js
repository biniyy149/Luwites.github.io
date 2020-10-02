class TreeNode {
    constructor(value) {
        this.value = value;
        this.descendents = [];
    }
}

const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');

abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);

function printName(node) {
    console.log(node.value)
    if (node.descendents === []) {
        return "end";
    }
    else {

        for (let descendent of node.descendents) {
           printName(descendent);
        }
    }
}

console.log(printName(abe));