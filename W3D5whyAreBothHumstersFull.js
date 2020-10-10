let hamster = {
    stomach: [],

    eat(food) {

        this.stomach = [food];
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};


speedy.eat("apple");
console.log(speedy.stomach); // Here it is ['apple'] and,


console.log(lazy.stomach); //It is logging [] here because the this.stomach = [food] is assigned to that specific object only