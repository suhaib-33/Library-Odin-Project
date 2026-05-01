const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

function render() {
  const result = document.querySelector("#render");
  result.innerHTML = ""; // clear old content

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];

    // create card
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${book.title}</h3>
      <h5>${book.author}</h5>
      <p>${book.pages} pages</p>
      <p>${book.read ? "Read" : "Not Read"}</p>
    `;

    result.appendChild(card);
  }
}

function addBookToLibrary() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;

  const myBook = new Book(title, author, pages, read);
  myLibrary.push(myBook);

  render();
}

const newStartButton = document.querySelector("#btns");

newStartButton.addEventListener("click", function () {
  const newStartForm = document.querySelector("#form-new");
  newStartForm.style.display = "block";
});

document.querySelector("#form-new").addEventListener("submit", function (e) {
  e.preventDefault();
  addBookToLibrary();
});