function byField(key) {
    return function(first, second) {
        if(first[key] > second[key]) {
            return first;
        } else {
            return second;
        }

    }
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];
// function byField(fieldName) {
//     return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
// }
let abc = users.sort(byField('name'));
let efg = users.sort(byField('age'));
console.log(abc);