const myLibrary = [];

function Book(id, title, author, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRaed = isRead;
  }


function addBookToLibrary(title, author, pages, isRead){
  const book = new Book(title, author, pages, isRead);
  myLibrary.push(book);
}