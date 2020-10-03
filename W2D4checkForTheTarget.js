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

function contains(node, target) {
    
    if (node.descendents === null) {
        if (node.value === target) {
            return true;
        } else {
            return false;
        }
    } else { 
        let childResult = false;
        if (node.value === target) {
            return true;
        }
        for (let child of node.descendents) {
            childResult = contains(child, target);
            if (childResult === true) {
                return true;
            }
        }
        return false; 
    }
}
console.log(contains(homer, "Abe"));
console.log(contains(homer, "Maggie")); 