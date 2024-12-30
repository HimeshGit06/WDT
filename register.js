// Event listener for the form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting the default way

    // Get the values from the form
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create an object to store user information
    const userInfo = {
        username: username,
        email: email,
        password: password  // In a real-world scenario, never store passwords in plain text
    };

    // Save the user information to localStorage
    localStorage.setItem('userInfo', JSON.stringify(userInfo));

    // Show a success message
    document.getElementById('message').innerText = 'Registration successful!';
    window.location.href="login.html";

    // Clear form inputs
    document.getElementById('registrationForm').reset();
});
