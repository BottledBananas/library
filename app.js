const btnAddBook = document.querySelector("#addBook")
const GameOfThrones = new book('Game of Thrones', 'George R. R. Martin', 6969, false)
const It = new book('It', 'Stephen King', 420, false)
const Bible = new book('The Bible', 'Grandma', 555, false)

let myLibrary = [GameOfThrones, It, Bible];

function showBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
    console.table(myLibrary[i])
    }
}
//let 'showBooks' create a table/card on the page when executed

function book(title, auther, pages, read) {
    this.title = title
    this.auther = auther
    this.pages = pages
    this.read = read
}

book.prototype.info = function () {
    return `${this.title} by ${this.auther}, ${this.pages} not read yet`
}

function addBookToLibrary() {

  }

  btnAddBook.addEventListener('click', addBookToLibrary)
  //make a popup form that asks for title, auther, pages, read
  //make the input data into a 'book' class through the book function
  //add class to 'myLibrary' as an array item



console.log('works')
