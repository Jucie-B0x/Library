const myLibrary = [];
document.getElementById("addToShelf").addEventListener("click", intake);
let container = document.querySelector(".container");
let shelf = document.querySelector('.shelf');


function Book(title, author,pages,publish) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.publish = publish;

}


function addBookToLibrary (title, author,pages,publish) {
let newBook = new Book()
myLibrary.push(newBook);
id = crypto.randomUUID();
console.log(myLibrary);
return false;
}

function addBookToShelf () {
   let book =  document.createElement('book')
   for (i = 0; i < 4; i++){
    let info = document.createElement('p')
    info.innerText = myLibrary[i];
    book.appendChild(info)
   }
   shelf.appendChild(book);
}


function intake () {
    const overlay = document.createElement('div')
    overlay.setAttribute('id', 'overlay')

    const bookForm = document.createElement('form');
    // bookForm.setAttribute ('action', '$');
    // bookForm.setAttribute ('method', 'post');
    bookForm.setAttribute('onsubmit', 'addBookToLibrary()')
    bookForm.setAttribute ('id', 'bookForm')

    const titleLable = document.createElement('lable');
    titleLable.setAttribute('for', 'intakeTitle')
    titleLable.innerText = 'Title';

    const intakeTitle = document.createElement('input');
    intakeTitle.setAttribute('type', 'text');
    intakeTitle.setAttribute('name', 'title');
    intakeTitle.setAttribute('id', 'intakeTitle')
    intakeTitle.setAttribute('placeholder' , 'Book Title')


    const authorLable = document.createElement('lable');
    authorLable.setAttribute('for', 'intakeAuthor')
    authorLable.innerText = 'Author';

    const intakeAuthor = document.createElement('input');
    intakeAuthor.setAttribute('type', 'text');
    intakeAuthor.setAttribute('name', 'author');
    intakeAuthor.setAttribute('id', 'intakeAuthor');
    intakeAuthor.setAttribute('placeholder' , 'Author');

    const pagesLable = document.createElement('lable');
    pagesLable.setAttribute('for', 'intakePages')
    pagesLable.innerText = 'Pages';
   
    const intakePages = document.createElement('input');
    intakePages.setAttribute('type', 'number');
    intakePages.setAttribute('name', 'pages');
    intakePages.setAttribute('id', 'intakePages');
    intakePages.setAttribute('placeholder' , 'Page count');

    const publishLable = document.createElement('lable');
    publishLable.setAttribute('for', 'intakePublish')
    publishLable.innerText = 'Publish Date';

    const intakePublish = document.createElement('input');
    intakePublish.setAttribute('type', 'text');
    intakePublish.setAttribute('name', 'publish');
    intakePublish.setAttribute('id', 'intakePublish');
    intakePublish.setAttribute('placeholder' , 'Publish Date');


    const intakeSubmit = document.createElement('input');
    intakeSubmit.setAttribute('type', 'submit');
    intakeSubmit.setAttribute('id', 'intakeSubmit')
    intakeSubmit.setAttribute('value', 'Submit');


    
    bookForm.appendChild(titleLable);
    bookForm.appendChild(intakeTitle);

    bookForm.appendChild(authorLable);
    bookForm.appendChild(intakeAuthor);

    bookForm.appendChild(pagesLable);
    bookForm.appendChild(intakePages);
    
    bookForm.appendChild(publishLable);
    bookForm.appendChild(intakePublish);
    
    bookForm.appendChild(intakeSubmit);

    overlay.appendChild(bookForm);
    container.appendChild(overlay)
}

addBookToShelf();