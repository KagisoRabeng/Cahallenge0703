document.addEventListener('DOMContentLoaded', () => {
    const bookList = document.getElementById('book-list');
    const bookForm = document.getElementById('book-form');

    // Book constructor
    function Book(title, author, read) {
        this.title = title;
        this.author = author;
        this.read = read;
    }

    // Array to store books
    let books = [];

    // Function to display books
    function displayBooks() {
        bookList.innerHTML = ''; // Clear the current list
        books.forEach((book, index) => {
            const bookDiv = document.createElement('div');
            bookDiv.classList.add('book');

            const bookInfo = document.createElement('p');
            bookInfo.textContent = `${book.title} by ${book.author}`;

            const bookRead = document.createElement('input');
            bookRead.type = 'checkbox';
            bookRead.checked = book.read;
            bookRead.addEventListener('change', () => {
                book.read = bookRead.checked;
            });

            bookDiv.appendChild(bookInfo);
            bookDiv.appendChild(bookRead);
            bookList.appendChild(bookDiv);
        });
    }

    // Function to add a new book
    function addBook(event) {
        event.preventDefault();

        const title = bookForm.title.value;
        const author = bookForm.author.value;
        const read = bookForm.read.checked;

        const newBook = new Book(title, author, read);
        books.push(newBook);

        displayBooks();

        // Clear form
        bookForm.reset();
    }

    // Event listener for form submission
    bookForm.addEventListener('submit', addBook);

    displayBooks();
});
