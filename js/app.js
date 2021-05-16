//Book Constructor
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
//UI Constructor
function UI() {}

UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');
  //create tr element
  const row = document.createElement('tr');
  //Insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;

  list.appendChild(row);

  // console.log(row);
}

//Show alert
UI.prototype.showAlert = function(message, className){
  //create div
  const div = document.createElement('div');
  //Add class
  div.className = `alert ${className}`;
  //Add text
  div.appendChild(document.createTextNode(message));
  //Get parent
  const container = document.querySelector('.container');

  const form = document.querySelector('#book-form');
  //Insert alert
  container.insertBefore(div, form);

  //Timeout after 3sec
  setTimeout(function(){
    document.querySelector('.alert').remove();
  },3000);
}

//Delete Book
UI.prototype.deleteBook = function(target){
  if(target.className == 'delete'){
    target.parentElement.parentElement.remove();
  }
}

//Clear fields
UI.prototype.cleaFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

//Local storage class
class Store{
  static getBooks(){
    let books;
    if(localStorage.getItem('books') === nul){
      books=[];
    }else{
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  
  static dislayBooks(){
    const books = Store.getBooks();

    books.forEach(function(book) {
      const ui = new UI;

      //Add book to UI
      ui.addBookToList(book);

    });

  }


  static addBook(book){
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));

  }


  static removeBook(){

  }
}

//DOM load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);
//Event Listener
document.getElementById('book-form').addEventListener('submit', function(e){
  //Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  //Instantiate book
  const book = new Book(title, author, isbn);

  //Instantiate UI
  const ui = new UI();

  //Validate
  if(title === '' || author === '' || isbn === '') {
    ui.showAlert('Please fill in all fields', 'error');
  }else{

    //Add book to list
  ui.addBookToList(book);

  //Add to SL
  Store.addBook(book);

  //show success
  ui.showAlert('Book Added!', 'success');

  //clear fields
  ui.clearFields();

  }

  
  // console.log(book);

  e.preventDefault();
});

//Eventlistener for delete
document.getElementById('book-list').addEventListener('click', function(e){
  
  //Instantiate UI
  const ui = new UI();

  //Delete book
  ui.deleteBook(e.target);

  //Show alert
  ui.showAlert('Book Deleted!', 'success');
  
  e.preventDefault();
})