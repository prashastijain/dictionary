function searchFunction() {
    const searchTerm = document.querySelector('.search-box input').value;
    if (searchTerm) {
        alert('Searching for: ' + searchTerm);
        // Implement search functionality here
    } else {
        alert('Please enter a search term');
    }
}
