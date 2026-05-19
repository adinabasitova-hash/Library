const myLibrary = [];
const dialog = document.getElementById('okno');


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
    <p>Pages: ${book.pages}</p>
    <p>Read: ${book.isRead ? "Yep!" : 'Not yet' }</p>
      `
       container.appendChild(card);
       console.log(book);
  })
}
displayBooks();

function getInpValues(){
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const isRead = document.querySelector('input[name=readOrNo]:checked').value === 'true';

  addBookToLibrary(title, author, pages, isRead);
  displayBooks();
  dialog.close(); // ← закрываем после добавления
}
document.getElementById('bookForm').addEventListener('submit',(e)=>{
  e.preventDefault();

 getInpValues();
})


document.getElementById('openDialog').addEventListener('click', () => {
  dialog.showModal();
});