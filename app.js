//button event listener for create new book, add new book and close pop up

const modalPop = document.getElementById("popUpModal");
const addBtn = document.getElementById("addBtn");
const subBtn = document.querySelector('#submit');

addBtn.addEventListener('click',openUp) ;

function openUp(){
    modalPop.classList.add('active')
}

subBtn.addEventListener('click', addBookToLibrary);

//book constructor

class Book{
    constructor(title ,author , pages, read){
        this.title = form.title.value;
        this.author = form.author.value;
        this.pages = form.pages.value + ' pages';
        this.read = form.read.checked;
    }
}

//creates book from Book constructor, add to Library
let myLibrary = [];
let newBook;

function addBookToLibrary(){

    event.preventDefault();
    modalPop.classList.remove('active');

    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    setData();
    showVisual();
    form.reset();
}

//Creates book visual in browser
function showVisual(){
    const display = document.querySelector('.library-container');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book));

    for(let i = 0; i < myLibrary.length; i++){
        createBook(myLibrary[i]);
    }
}

//creates book DOM elements, to use in render();
function createBook(item) {
    const library = document.querySelector('.library-container');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authDiv = document.createElement('div');
    const pageDiv = document.createElement('div');
    const removeBtn = document.createElement('button');
    const readBtn = document.createElement('button');
    
    
    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', myLibrary.indexOf(item));

    titleDiv.textContent = item.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authDiv.textContent = item.author;
    authDiv.classList.add('author');
    bookDiv.appendChild(authDiv);

    pageDiv.textContent = item.pages;
    pageDiv.classList.add('pages');
    bookDiv.appendChild(pageDiv);

    readBtn.classList.add('readBtn')    
    bookDiv.appendChild(readBtn);
    if(item.read===false) {
        readBtn.textContent = 'Not Read';
        readBtn.style.backgroundColor = '#e04f63';
    }else {
        readBtn.textContent = 'Read';
        readBtn.style.backgroundColor = '#63da63'
    }

    removeBtn.textContent = 'Remove'; 
    removeBtn.setAttribute('id', 'removeBtn');
    bookDiv.appendChild(removeBtn);
    
    library.appendChild(bookDiv);

    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item),1);
        setData()
        showVisual();
    });

    //add toggle ability to each book 'read' button on click
    readBtn.addEventListener('click', () => { 
        item.read = !item.read; 
        setData(); 
        showVisual();
    }); 
};


// setting Library to be stored in local storage
function setData() {
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}

//pulls books from local storage when page is refreshed
function restore() {
    if(!localStorage.myLibrary) {
        showVisual();
    }else {
        let objects = localStorage.getItem('myLibrary') // gets information from local storage to use in below loop to create DOM/display
        objects = JSON.parse(objects);
        myLibrary = objects;
        showVisual();
    }
}

restore();