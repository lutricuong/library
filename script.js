const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputPages = document.querySelector('#pages');
const inputRead = document.getElementsByName('read');
const buttonShowDialog = document.querySelector('.showDialog');
const buttonCloseDialog = document.querySelector('.closeDialog');
const dialog = document.querySelector('dialog');
const form = document.querySelector('form');

let myLibrary = [
    {
        title: 'text',
        author: 'cuong lu',
        pages: '55',
        read: 'yes'
    }
];

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
    console.log(myLibrary);
}

function inputReadStatus() {
    for (i = 0; i < inputRead.length; i ++) {
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

function showBook() {
    myLibrary.forEach((book) => {
        for (const information in book) {
            console.log(book[information]);
        }
    });
}
function test() {
const books = document.querySelector('.books');
books.appendChild(document.createElement("div"));
}