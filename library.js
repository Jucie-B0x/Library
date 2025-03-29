
const myLibrary = [
    new Book ('The Hobbit', 'J.R.R. Tolkien', '310', '1937'),
    new Book ('Dune', 'Frank Herbert', '412', '1965'),
    new Book('The Da Vinci Code', 'Dan Brown','689','2003'),
];

let openButton = document.querySelector('#addToShelf')
let closeButton = document.querySelector("#close")
let modal = document.querySelector('dialog')
let container = document.querySelector('.container');
let shelf = document.querySelector('.shelf');


function Book(title, author,pages,publish) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.publish = publish;
    this.id = crypto.randomUUID();


}

function addBookToLibrary(title, author, page ,publish){
    let newBook = new Book (title, author, page, publish);
    myLibrary.push(newBook);

}

function addBookToShelf () {
    myLibrary.forEach((book) => {
       let card = document.createElement('div');
       card.classList.add('card')
       shelf.appendChild(card)
        let info = Object.values(book);
        for (let i = 0; i<info.length-1; i++ ) {
            let p = document.createElement('p');
            p.innerText = info[i];
            card.appendChild(p)
        }
    
       
    }
)}

openButton.addEventListener('click', () => {
    modal.showModal();
})

closeButton.addEventListener('click', () => {
    modal.close()
})

addBookToShelf();




