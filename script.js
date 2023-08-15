const getTitle = document.querySelector('#title');
const getAuthor = document.querySelector('#author');
const getPages = document.querySelector('#pages');
const getRead = document.getElementsByName('read');
console.log(getReadStatus());

let myLibrary = [
    {
        title: 'text',
        author: 'cuong lu',
        pages: '55',
        read: 'read'
    }
];
console.log(myLibrary);

function book(title, author, pages) {

}

function addBook() {
    title = getTitle.value;
    author = getAuthor.value;
    pages = getPages.value;
    read = getReadStatus();
}

function getReadStatus() {
    for (i = 0; i < getRead.length; i ++) {
        if (getRead[i].checked)
        return getRead[i].value;
    }
}
