let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__: head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
  };
  
  let pockets = {
    money: 2000,
    __proto__: bed
  };
console.log(pockets.pen); // will be 3 because it takes it from the table object
console.log(bed.glasses); // will be 1 because it takes it from the head object