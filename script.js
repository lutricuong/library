const getTitle = document.querySelector('#title');
const getAuthor = document.querySelector('#author');
const getPages = document.querySelector('#pages');
const getRead = document.getElementsByName('read');
const showDialog = document.querySelector('.showDialog');
const closeDialog = document.querySelector('.closeDialog');
console.log(closeDialog);

let myLibrary = [
    {
        title: 'text',
        author: 'cuong lu',
        pages: '55',
        read: 'yes'
    }
];

closeDialog.addEventListener('click', addBook)

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook(e) {
    e.preventDefault();
    title = getTitle.value;
    author = getAuthor.value;
    pages = getPages.value;
    read = getReadStatus();
    const newBook = new book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
}

function getReadStatus() {
    for (i = 0; i < getRead.length; i ++) {
        if (getRead[i].checked)
        return getRead[i].value;
    }
}