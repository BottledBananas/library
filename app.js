const GameOfThrones = new book('Game of Thrones', 'George R. R. Martin', 6969, false)
const It = new book('It', 'Stephen King', 420, true)
const Bible = new book('The Bible', 'Grandma', 555, true)
const listOfBooks = document.querySelector('#listOfBooks');
const btnAddBook = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const btnAddBookToLibrary = document.querySelector('#btnAddBookToLibrary')
let myLibrary = [GameOfThrones, It, Bible];

btnAddBookToLibrary.addEventListener('click', addBookToLibrary);
    //make the input data into a 'book' class through the book function
    //add class to 'myLibrary' as an array item

btnAddBook.forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget)
      openModal(modal)
    })
  })
  
  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
      closeModal(modal)
    })
  })
  
  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal')
      closeModal(modal)
    })
  })
  
  function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
  }
  
  function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
  }

  function showBooks() {
    myLibrary.forEach(book => {
        console.table(book);
        const card = document.createElement('div');
        const cardList = document.createElement('ul');
        const title = document.createElement('li');
        const auther = document.createElement('li');
        const pages = document.createElement('li');
        const read = document.createElement('li');
        card.classList.add('book');
        listOfBooks.append(card);
        card.append(cardList);
        cardList.append(title);
        cardList.append(auther);
        cardList.append(pages);
        cardList.append(read);
        title.innerText=`${book.title}`;
        auther.innerText=`${book.auther}`;
        pages.innerText=`${book.pages}`;
        read.innerText=`${book.read == true ? "Read" : "Not read"}`
    });
}
  
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

        showBooks();
        console.log("book added")
    }

  console.log('works')