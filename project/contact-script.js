function sendMessage(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you, ' + name + '! Your message has been sent.\n\nDetails:\nEmail: ' + email + '\nMessage: ' + message);
    } else {
        alert('Please fill in all fields.');
    }

    return false; 
}
