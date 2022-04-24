// Book Constructor
function book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


// UI Constructor
function UI() {}


// Event Listeners
document.getElementById('book-form').addEventListener('submit', 
function(e){
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    console.log(title, author, isbn);

    e.preventDefault();
});