let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

alert(rabbit.jumps); // It will be True

delete rabbit.jumps;

alert(rabbit.jumps); //  It will be null because there is no jump property anymore in the rabbit object so 
                     //it will get that from the animal object.

delete animal.jumps;

alert(rabbit.jumps);  // It will be because the value of jumps in the animal object is undefined now