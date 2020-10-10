let animal = {
    eat() {
        this.full = true;
    }
};

let rabbit = {
    __proto__: animal
};

rabbit.eat(); // It will be rabbit because the object containg the method is now the rabbit