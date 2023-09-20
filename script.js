const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputPages = document.querySelector('#pages');
const inputRead = document.getElementsByName('read');
const buttonShowDialog = document.querySelector('.showDialog');
const buttonCloseDialog = document.querySelector('.closeDialog');
const dialog = document.querySelector('dialog');
const form = document.querySelector('form');
const books = document.querySelector('.books');

let myLibrary = [];

buttonShowDialog.addEventListener('click', showDialog);
buttonCloseDialog.addEventListener('click', closeDialog);

class book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBook() {
    title = inputTitle.value;
    author = inputAuthor.value;
    pages = inputPages.value;
    read = inputReadStatus();
    const newBook = new book(title, author, pages, read);
    myLibrary.push(newBook);
}

function showBook() {
    const bookNew = document.createElement('div');
    const showTitle = document.createElement('div');
    const showAuthor = document.createElement('div');
    const showPages = document.createElement('div');
    const showRead = document.createElement('button');
    const buttonRemoveBook = document.createElement('button')
    books.insertBefore(bookNew, books.children[books.children.length-1]);
    bookNew.appendChild(showTitle);
    bookNew.appendChild(showAuthor);
    bookNew.appendChild(showPages);
    bookNew.appendChild(showRead);
    bookNew.appendChild(buttonRemoveBook);
    bookNew.classList.add('book');
    showTitle.classList.add('bookTitle');
    showRead.classList.add('bookRead');
    buttonRemoveBook.classList.add('removeBook');
    const bookRead = Array.from(document.querySelectorAll('.bookRead'));
    showTitle.textContent = '\"' + myLibrary[myLibrary.length-1].title + '\"';
    showAuthor.textContent = myLibrary[myLibrary.length-1].author;
    showPages.textContent = myLibrary[myLibrary.length-1].pages + ' pages';
    showRead.textContent = myLibrary[myLibrary.length-1].read;
    buttonRemoveBook.textContent = 'Remove';
    if (showRead.textContent == 'yes') {
        showRead.classList.add('bookReadYes');
    }
    else showRead.classList.add('bookReadNo');
    showRead.addEventListener('click', changeStatusRead.bind(showBook, showRead, bookRead));
    buttonRemoveBook.addEventListener('click', removeBook.bind(showBook, bookNew));
}

function inputReadStatus() {
    for (i = 0; i < inputRead.length; i++) {
        if (inputRead[i].checked)
        return inputRead[i].value;
    }
}

function showDialog() {
    dialog.showModal();
}

function closeDialog(e) {
    e.preventDefault();
    addBook();
    dialog.close();
    form.reset();
    showBook();

}

function changeStatusRead(showRead, bookRead) {
    if (showRead.textContent == 'yes') {
        showRead.textContent = 'no';
        myLibrary[bookRead.length-1].read = 'no';
        showRead.classList.remove('bookReadYes');
        showRead.classList.add('bookReadNo');
    }
    else {
        showRead.textContent = 'yes';
        showRead.classList.add('bookReadYes');
        showRead.classList.remove('bookReadNo');
        myLibrary[bookRead.length-1].read = 'yes';
    }
    console.log(myLibrary);
}

function removeBook(bookNew) {
    bookNew.remove();
    myLibrary.pop();
}