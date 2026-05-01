const { createElement } = require("react");


const myLibrary = [];

function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID()
}


function render() {
  let result = document.querySelector("#render")
  result.innerHTML = "";
  for(let i = 0; i < myLibrary.length; i++ ) {
    let card =  document.createElement("div");
    card.textContent = myLibrary[i].title;
    card.textContent = myLibrary[i].author;
    card.textContent = myLibrary[i].pages;
    card.textContent = myLibrary[i].read;
    result.appendChild(card);
  }
}

function addBookToLibrary() {
let title = document.querySelector("#title").value;
let author = document.querySelector("#author").value;
let pages = document.querySelector("#pages").value;
let read = document.querySelector("#read").checked;
let myBook = new Book(title, author, pages, read)
myLibrary.push(myBook);
render()
}



let newStartButton = document.querySelector("#btns")

newStartButton.addEventListener("click", function () {
  let newStartForm = document.querySelector("#form-new")
  newStartForm.style.display = "block";
})


document.querySelector("#form-new").addEventListener("submit", function(e) {
  e.preventDefault();
  addBookToLibrary();
})