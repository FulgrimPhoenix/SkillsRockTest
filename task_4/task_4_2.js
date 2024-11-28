class Book {
  constructor(title, author, isbn) {
    this.title = String(title);
    this.author = String(author);
    this.isbn = String(isbn);
    this.available = true;
  }
}

class Library {
  constructor() {
    this.listAvailableBooks = [];
  }
  addBook(book) {
    this.listAvailableBooks.push(book);
    console.log(`вы добавили в библиотеку книгу под названием "${book.title}"`);
  }
  borrowBook(isbn) {
    let book = this.listAvailableBooks.find((item) =>
      item.isbn === String(isbn)
    );
    this.listAvailableBooks.forEach((item) =>
      item.isbn === String(isbn) ? (item.available = false) : null
    );
    console.log(`Вы взяли книгу под названием "${book.title}"`);
  }

  returnBook(isbn) {
    this.listAvailableBooks.forEach((item) =>
      item.isbn === String(isbn) ? (item.available = true) : null
    );
  }
  showListAvailableBooks() {
    return this.listAvailableBooks.filter(item => item.available === true);
  }
}

const testBook1 = new Book("My book", "me", 123);
const testBook2 = new Book("Owner book", "he", 122);
const testBook3 = new Book("Legend book", "he", 121);
const testLibrary = new Library();

testLibrary.addBook(testBook1)
testLibrary.addBook(testBook2);
testLibrary.addBook(testBook3)

console.log(111, testLibrary.showListAvailableBooks());

