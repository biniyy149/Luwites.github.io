/*eslint-disable*/

function returnBook() {
    let student = library.students.get(document.getElementById("student_name").value);
    let book = library.librarybooks.get(document.getElementById("book_title").value);
    student.returnBook(book);
    displayInfo();
}


function add(event) {
    let book = library.librarybooks.get(event.target.parentNode.value);
    checkOut(book);

}

function updateBooksOut(book) {
    let table = document.getElementById("booksOut");
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = book.name;
    // let td2 = document.createElement("td");
    // td2.innerHTML = book.overDueFee();
    let td3 = document.createElement("td");
    td3.innerHTML = book.dueDate;
    row.append(td1);
    // row.append(td2);
    row.append(td3);
    table.append(row);
}

let currentStudent;

function pullInfo() {
    let student = library.students.get(document.getElementById("student_name").value);
    if (!student) {
        alert("Student Name Not Found, Please Try Again.");
        return;
    }
    currentStudent = student;
    displayInfo();
}

function displayInfo() {
    clearAllBooks();
    let books = currentStudent.libraryCard.booksOut.map(obj => obj.name);
    document.getElementById("info").innerHTML = `Hi ${currentStudent.name}, click on the books you would like to borrow: ${books}`;
    if (currentStudent.libraryCard.booksOut.length > 0) {
        for (let book of currentStudent.libraryCard.booksOut) {
            let table = document.getElementById("booksOut");
            let row = document.createElement("tr");
            let td1 = document.createElement("td");
            td1.innerHTML = book.name;
            let td2 = document.createElement("td");
            td2.innerHTML = book.overDueFee();
            // let td3 = document.createElement("td");
            // td3.innerHTML = book.dueDate;
            row.append(td1);
            row.append(td2);
            // row.append(td3);
            table.append(row);
        }
    }
}

function checkOut(book) {
    if (!currentStudent) {
        alert("Please enter your name and then select books to borrow.")
        return;
    }
    let books_before_checkout = currentStudent.libraryCard.booksOut;
    try {
        currentStudent.checkOutBook(book);
    } catch (e) {
        if (e instanceof ApplicationError) {
            alert("error!");
            currentStudent.libraryCard.booksOut = books_before_checkout;
            return;
        }
    }
    let books = currentStudent.libraryCard.booksOut.map(obj => obj.name);
    document.getElementById("info").innerHTML = (`Thanks for visiting, your books are ${books}`);
    updateBooksOut(book)
}

function clearAllBooks() {
    let table = document.getElementById('booksOut');
    let rows = document.querySelectorAll('#booksOut>tr')
    for (let i = rows.length; i > 0; i--) {
        table.deleteRow(i);
    }

}

function loginTest() {

    let userId = document.getElementById("login").value;
    let passWord = document.getElementById("password").value;


    if ("Luwam" === userId && "hello" === passWord || "Tahir" === userId && "hey" === passWord) {
        window.location = "index.html";
        return;
    }
    alert("Incorrect user Id or password, please sign up to with your Id and Password");
}

function register() {
    alert("Redirecting to the registration page...")
        window.location = "register.html"
}
function redirectToLibrary(){

        window.location = "index.html"
   
}
function finishBorrowing() {
    clearAllBooks();
}
