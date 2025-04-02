const myLibrary = [
  new Book("The Hobbit", "J.R.R. Tolkien", "310", "1937","Yes"),
  new Book("Dune", "Frank Herbert", "412", "1965","Yes"),
  new Book("The Da Vinci Code", "Dan Brown", "689", "2003", "Yes"),
];

let openButton = document.querySelector("#addToShelf");
let closeButton = document.querySelector("#close");
let modal = document.querySelector("dialog");
let subForm = document.querySelector("#submit")
let container = document.querySelector(".container");
let shelf = document.querySelector(".shelf");

function Book(title, author, pages, publish, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.publish = publish;
  this.hasRead = hasRead;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, page, publish, hasRead) {
  let newBook = new Book(title, author, page, publish, hasRead);
  myLibrary.push(newBook);
  addBookToShelf();
}

function addBookToShelf() {
  myLibrary.forEach((book) => {
    let card = document.createElement("div");
    card.classList.add("card");
    shelf.appendChild(card);
    let info = Object.values(book);
    for (let i = 0; i < info.length - 1; i++) {
      let p = document.createElement("p");
      p.innerText = info[i];
      card.appendChild(p);
    }
  });
}

openButton.addEventListener("click", () => {
  modal.showModal();
});

closeButton.addEventListener("click", () => {
  modal.close();
});

subForm.addEventListener("click", addBookToLibrary)

addBookToShelf();