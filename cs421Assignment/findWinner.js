const Map = require('./BST_Dictionary.js');
const List = require('../DLinkedList.js');

function genData(n, k) {
    let dat = new Array(n);
    for (let i = 0; i < n; i++) {
        let rand = Math.floor(Math.random() * 100) % k + 1;
        dat[i] = rand;
    }
    return dat;
}
function genData2(n, k) {
    let dat = new List.DLinkedList();
    for (let i = 0; i < n; i++) {
        let rand = Math.floor(Math.random() * 100) % k + 1;
        dat.insertLast(rand);
    }
    return dat;
}
function findWinner(dat) {
    let D = new Map.BST_Dictionary();
    let k = dat[0];
    D.insertItem(k, 1)
    for (let i = 1; i < dat.length; i++) {
        k = dat[i];
        let count = D.findElement(k);
        if (count === null) {
            D.insertItem(k, 1);
        } else {
            count = count + 1;
            D.insertItem(k, count);
        }
    }
    D.print();
    let winners; // put the winners in an array
    let iterator = D.items();
    let maximum = 0;
    while (iterator.hasNext()) {
        let obj = iterator.nextObject();
        let counter = obj.element();
        let keys = obj.key();
        if (counter === maximum) {
            winners.push(`id: ${keys}, Totalcount: ${maximum}`);
        }
        if (counter > maximum) {
            maximum = counter;
            winners = [];
            winners.push(`id: ${keys}, Totalcount: ${maximum}`);
        }
    }
    console.log(winners);
}

let dat = genData(1000, 10);
// console.log(dat);
findWinner(dat);


