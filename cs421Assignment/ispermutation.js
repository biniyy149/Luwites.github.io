const Sort = require('./ArraySorter.js');
const PQ = require('./PriorityQueue.js');
const Tab = require('./BST_Dictionary.js');
const Map = require('./HT_Dictionary.js');


function genData(n, k) {
    let dat = new Array(n);
    for (let i = 0; i < n; i++) {
        let rand = Math.floor(Math.random() * 1024) % k + 1;
        dat[i] = rand;
    }
    return dat;
}

let mySorter = new Sort.ArraySorter();

function isPermutationSort(A, B) {
    if (A.length !== B.length) {
        return false;
    }
    mySorter.quickSort(A);
    // mySorter.insertionSort(A);
    mySorter.heapSort(B);
    for (let i = 0; i < A.length; i++) {
        if (A[i] !== B[i]) {
            return false
        }
    }
    return true;
}
function isPermutationPQ(A, B) {
    if (A.length !== B.length) {
        return false;
    }
    let PQA = new PQ.PriorityQueue();
    for (let i = 0; i < A.length; i++) {
        PQA.insertItem(A[i], A[i])
    }
    let PQB = new PQ.PriorityQueue();
    for (let i = 0; i < B.length; i++) {
        PQB.insertItem(B[i], B[i])
    }
    while (!PQA.isEmpty()) {
        if (PQA.minKey() !== PQB.minKey()) {
            return false;
        }
        PQA.removeMin();
        PQB.removeMin();
    }
    return true;
}
function isPermutationBST(A, B) {
    if (A.length !== B.length) {
        return false;
    }
    let temp1 = A[0];
    let newA = new Tab.BST_Dictionary();
    newA.insertItem(temp1, 1)
    for (let i = 1; i < A.length; i++) {
        let count = newA.findElement(A[i]);
        if (count === null) {
            newA.insertItem(A[i], 1);
        } else {
            newA.insertItem(A[i], count + 1);
        }
    }
    let temp2 = B[0];
    let newB = new Tab.BST_Dictionary();
    newB.insertItem(temp2, 1);
    for (let i = 1; i < B.length; i++) {
        let count2 = newB.findElement(B[i]);
        if (count2 === null) {
            newB.insertItem(B[i], 1);
        } else {
            newB.insertItem(B[i], count + 1);
        }
    }

    let iter = newA.items()
    while (iter.hasNext()) {
        let obj = iter.nextObject();
        let key = obj.key();
        let counterA = obj.element()
        let counterB = newB.findElement(key);
        if (counterA !== counterB) {
            return false;
        }
    }
    return true;
}

function isPermutationHT(A, B) {
    let DA = new Map.HT_Dictionary();
    let DB = new Map.HT_Dictionary();

}

let dat = genData(100, 200);
mySorter.print(dat);
console.log();
mySorter.print(dat);

let A = [17, 15, 55, 34, 19, 28, 5, 2, 10, 99, 75, 25, 67, 94, 122, 21];
let B = [ 15, 55, 34, 19, 28, 5, 2, 10, 99, 75, 25, 67, 94, 122, 17,21];
console.log(isPermutationSort(A,B));
console.log(isPermutationPQ(A,B));
console.log(isPermutationBST(A,B));

