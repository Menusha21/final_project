// register.js

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('register-form').addEventListener('submit', function(event) {
        var usernameInput = document.querySelector('input[name="username"]');
        if (!usernameInput.value.trim()) {
            event.preventDefault(); // Prevent form submission
            alert('Username is required'); // Display alert message
        }
    });
});
