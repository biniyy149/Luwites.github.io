
/*eslint-disable*/
class ApplicationError extends Error{};

class Student {
    constructor(name, libraryCard) {
        this._name = name;
        this._libraryCard = libraryCard;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    get libraryCard(){
        return this._libraryCard;
    }

    set libraryCard(libraryCard){
        this._libraryCard = libraryCard;
    }

    checkOutBook(book) {
        let count = 0;
        let now = new Date();
        if(this.libraryCard.booksOut.length > 0){
            for(let book of this.libraryCard.booksOut){
                if(now !== book.dueDate){
                    count ++;
                }
            }
        } else {
            this.libraryCard.booksOut.push(book);
            book.dueDate = book.calcDueDate();
        }
        if(count){
            this.libraryCard.booksOut.push(book);
            book.dueDate = book.calcDueDate(); 
        }
    }
    returnBook(book) {
        for(let volume of this.libraryCard.booksOut){
            if(volume.name === document.getElementById("book_title").value){
                let index = this.libraryCard.booksOut.indexOf(book);
                this.libraryCard.booksOut.splice(index,1); 
            }
        }
    }
}
class Book {

    constructor(name, author) {
        this.name = name;
        this.author = author;
        this.calcDueDate = function(){
            let numWeeks = 2;
            let now = new Date();
            now.setDate(now.getDate() - 1)
            return now;
        }
        this._dueDate = 0;
        this.overDueFee = function(){
            let overDueRateFee = 0.50;
            const date1 = new Date(this.dueDate);
            const date2 = new Date();
            let diffTime = date2 - date1;
            if(diffTime <= 0){
                diffTime = 0;
            }
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            return `$${overDueRateFee* diffDays}`
        }
    } set dueDate (date){
        this._dueDate = date;
    } get dueDate (){
        return this._dueDate;
    }
}

class LibraryCard {
    constructor() {
        this._booksOut = [];
    }
    set booksOut(book){
        this._booksOut += book;
    }
    get booksOut(){
        return this._booksOut;
    }
}


class Library {
    constructor(librarybooks, students) {
        this.librarybooks = librarybooks;
        this.students = students;
    }

    addNewBook(newBook) {
        this.libraryBooks.set(newbook.name, newBook);
    }

    addStudent(newStudent) {
        this.students.set(newStudent.name, newStudent);
    }
}


const libraryBooks = new Map()

libraryBooks.set("The Secret", new Book("The Secret", "Rhonde"));
libraryBooks.set("The Sky Is Falling", new Book("The Sky Is Falling", "Sydney Sheldon"));
libraryBooks.set("The Jewels", new Book("The Jewels", "Daniella Steel"));
libraryBooks.set("Sleeping Murder", new Book("Sleeping Murder", "Agatha Christie"));
libraryBooks.set("Where The Forest Meets The Stars", new Book("Where The Forest Meets The Stars", "Glendy Vanderah"));
libraryBooks.set("Think Big Act Small", new Book("Think Big Act Small", "Jason Jennings"));

const students = new Map();
students.set("Tahir", new Student("Tahir", new LibraryCard()));
students.set("Luwam", new Student("Luwam", new LibraryCard()))


const library = new Library(libraryBooks, students);
library.addStudent(new Student("Tahir", new LibraryCard()));
library.addStudent(new Student("Luwam", new LibraryCard()))



