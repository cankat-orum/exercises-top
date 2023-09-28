const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBook(t, author, pages, read) {
  const x = new Book(t, author, pages, read);
  myLibrary.push(x);
}

addBook("test1", "test1", 100, true);
addBook("test2", "test2", 200, false);

console.log(myLibrary);
