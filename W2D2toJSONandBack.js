
let user = {
    name: "Hellen Williams",
    age: 30
};

let firstUser = JSON.stringify(user);
let secondUser = JSON.parse(JSON.stringify(user));

console.log(firstUser);
console.log(secondUser);