let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        console.log(`${phrase}, ${user}`);
    }
}

sayHi(); // I thought there will be an error because the function is wrapped by the if statement and it won't be accesible from outside,
         // but it is running fine in the vscode and giving me an output of Hello, John.