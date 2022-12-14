const books = document.querySelector('#books');
const addBookForm = document.querySelector('#addBookForm');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const image = document.querySelector('#image');

const url = 'http://localhost:3000/books'

const getBooks = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      books.innerHTML = '';
      data.forEach((book) => {
        books.innerHTML += `
                <div class="card">
                  <img src="${book.image}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">${book.author}</p>
                    <p class="card-text">${book.year}</p>
                    <button class="btn btn-danger" onclick="deleteBook(${book.id})">Delete</button>
                    <button class="btn btn-warning" onclick="editBook(${book.id})">Edit</button>
                  </div>
                </div>
              `;
      });
    });
};


const addBook = (e) => {
  e.preventDefault();
  const book = {
    title: title.value,
    author: author.value,
    year: year.value,
    image: image.value,
  };
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      getBooks();
    });
};

const deleteBook = (id) => {
  fetch(`${url}/${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      getBooks();
    });
};

const editBook = (id) => {
  fetch(`${url}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      title.value = data.title;
      author.value = data.author;
      year.value = data.year;
      image.value = data.image;
      addBookForm.innerHTML = `
              <div class="form
                <label for="title">Title</label>
                <input type="text" name="title" id="title" class="form-control" value="${data.title}" required>
              </div>
              <div class="form
                <label for="author">Author</label>
                <input type="text" name="author" id="author" class="form-control" value="${data.author}" required>
              </div>
              <div class="form
                <label for="year">Year</label>
                <input type="text" name="year" id="year" class="form-control" value="${data.year}" required>
              </div>
              <div class="form
                <label for="image">Image</label>
                <input type="text" name="image" id="image" class="form-control" value="${data.image}" required>
              </div>
              <button type="submit" class="btnAddBook" onclick="updateBook(${data.id})">Update book</button>
            `;
    });
};

const updateBook = (id) => {
  const book = {
    title: title.value,
    author: author.value,
    year: year.value,
    image: image.value,
  };
  fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      getBooks();
    });
};

addBookForm.addEventListener('submit', addBook);

getBooks();
