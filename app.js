const GameOfThrones = new book('Game of Thrones', 'George R. R. Martin', 6969, false)
const It = new book('It', 'Stephen King', 420, true)
const Bible = new book('The Bible', 'Grandma', 555, true)
const listOfBooks = document.querySelector('#listOfBooks');
const btnAddBook = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const btnAddBookToLibrary = document.querySelector('#btnAddBookToLibrary')
let myLibrary = [GameOfThrones, It, Bible, It];

btnAddBookToLibrary.addEventListener('click', addBookToLibrary);

function showBooks() {
  myLibrary.forEach(book => {
    console.table(book);
    const card = document.createElement('div');
    const cardList = document.createElement('ul');
    const liTitle = document.createElement('li');
    const liAuther = document.createElement('li');
    const liPages = document.createElement('li');
    const liRead = document.createElement('li');
    card.classList.add('book');
    listOfBooks.append(card);
    card.append(cardList);        
    cardList.append(liTitle);
    cardList.append(liAuther);
    cardList.append(liPages);
    cardList.append(liRead);
    liTitle.innerText=`${book.title}`;
    liAuther.innerText=`${book.auther}`;
    liPages.innerText=`${book.pages}`;
    liRead.innerText=`${book.read == true ? "Read" : "Not read"}`;
  })
}

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
  
  function book(title, auther, pages, read) {
      this.title = title
      this.auther = auther
      this.pages = pages
      this.read = read
  }
  
  book.prototype.info = function () {
      console.log(`${title.value} by ${book.auther}, ${this.pages}, ${this.read}`)
  }

  function addBookToLibrary() {
        event.preventDefault();
        const title = document.querySelector("#title").value;
        const auther = document.querySelector("#auther").value;
        const pages = document.querySelector("#pages").value;
        const readYes = document.querySelector("#readYes");
        const readNo = document.querySelector("#readNo");
        const modals = document.querySelectorAll('.modal.active');
        const card = document.createElement('div');
        const cardList = document.createElement('ul');
        const liTitle = document.createElement('li');
        const liAuther = document.createElement('li');
        const liPages = document.createElement('li');
        const liRead = document.createElement('li');
        const btnRemove = document.createElement('button');
        const read = function() {
          if (readYes.checked == true) {
            return true
          }
          if (readNo.checked == true) {
            return false
          }
        }        
        const newBook = new book(title, auther, pages, read())
        card.classList.add('book');
        listOfBooks.append(card);
        card.append(cardList);        
        cardList.append(liTitle);
        cardList.append(liAuther);
        cardList.append(liPages);
        cardList.append(liRead);
        cardList.append(btnRemove);
        console.log("book added")
        liTitle.innerText=`${title}`;
        liAuther.innerText=`${auther}`;
        liPages.innerText=`${pages}`;
        liRead.innerText=`${read() == true ? "Read" : "Not read"}`
        btnRemove.setAttribute("class", "btnRemove");
        btnRemove.innerText="Remove"
        myLibrary.push(newBook)
        console.log("book added")
        console.log(newBook.title)
        console.log(newBook.auther)
        console.log(newBook.pages)
        console.log(newBook.read)
        modals.forEach(modal => {
            closeModal(modal)
          })
          btnRemove.addEventListener("click", () => {
            card.remove();
            cardList.remove();
            liTitle.remove();
            liAuther.remove();
            liPages.remove();
            liRead.remove();
            btnRemove.remove();
            console.log("book removed")
          });
          
    }

  console.log('works')