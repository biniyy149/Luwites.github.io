"use strict"
let x = 1;

function func() {
 
  console.log(x); 
 x = 2;

}

func(); // At first I thought there will be error because we are trying to declare a variable again down in the function
        // but now i can see that the error is because of access before initialization