let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete";

sayHi(); // this will show Hi Pete, because the functions takes the recent value saved.