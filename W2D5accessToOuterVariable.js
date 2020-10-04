function makeWorker() {
    let name = "Pete";

    return function () {
        console.log(name);
    };
}

let name = "John";


let work = makeWorker();


work(); // this will return Pete again because it has an access to the variable name within its place of origin. 
//(it doesnt need to go out look for a global one)