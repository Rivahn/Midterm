fetch('https://upadhayay.github.io/db.json')
  .then(response => response.json())
  .then(data => {
    // Handle books
    const bookList = document.getElementById('book-list');
    if (data.books && data.books.length > 0) {
      data.books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book';
        bookItem.innerHTML = `
          <h3>${book.title}</h3>
          <p><strong>Year:</strong> ${book.year}</p>
          <p><strong>Published:</strong> ${book.published ? 'Yes' : 'No'}</p>
        `;
        bookList.appendChild(bookItem);
      });
    }
  })
  .catch(error => {
    console.error('Error fetching book data:', error);
  });
