const myLibrary = [];

function Book(title, author,pages,publish) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.publish = publish;

}


function addBookToLibrary () {
let newBook = new Book(title, author,pages,publish)
myLibrary.push(newBook);
console.log(myLibrary);

}