const GameOfThrones = new book('Game of Thrones', 'George R. R. Martin', 6969, false)
const It = new book('It', 'Stephen King', 420, false)
const Bible = new book('The Bible', 'Grandma', 555, false)
const listOfBooks = document.querySelector('#listOfBooks');
const btnAddBook = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const btnAddBookToLibrary = document.querySelector('btnAddBookToLibrary')
let myLibrary = [GameOfThrones, It, Bible];

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
        card.classList.add('book');
        listOfBooks.appendChild(card);
    });
  }
  //add styling to 'card' div so it shows up
  
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
  
    btnAddBookToLibrary.addEventListener('click', addBookToLibrary)
    //make a popup form that asks for title, auther, pages, read
    //make the input data into a 'book' class through the book function
    //add class to 'myLibrary' as an array item
  
  console.log('works')