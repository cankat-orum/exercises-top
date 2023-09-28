function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return title + author + pages + read;
  };
}

const theHobbit = new Book("The Hobbit", "JRR Tolkien", 295, false);

console.log(theHobbit.info());

Object.getPrototypeOf(theHobbit) === Book.prototype;
