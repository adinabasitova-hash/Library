const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }


function addBookToLibrary(title, author, pages, isRead){
  const book = new Book(title, author, pages, isRead);
  myLibrary.push(book);
}

addBookToLibrary("1984", "George Orwell", 352, false);
addBookToLibrary("Harry Potter", "J.K Rowling", 400, true);
addBookToLibrary("Clean Code", "Robert Martin", 450, false);

function displayBooks(){
  const container = document.getElementById('library');
  container.innerHTML = '';

  myLibrary.forEach(book=>{
    const card = document.createElement("div");
    card.dataset.id = book.id;
    card.innerHTML = `
    <h3>${book.title}</h3>
    <h4>${book.author}</h4>
    <p>${book.pages}</p>
    <p>Read: ${book.isRead ? 'Yep!' : 'Not yet'}</p>
      `
       container.appendChild(card);
       console.log(book);
  })
}
displayBooks();