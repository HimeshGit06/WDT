// Show/Hide forms logic
const showRegisterBtn = document.getElementById('showRegister');
const showLoginBtn = document.getElementById('showLogin');
const registrationForm = document.getElementById('registrationForm');
const loginForm = document.getElementById('loginForm');
const formTitle = document.getElementById('formTitle');

// Event listener for switching to registration form
showRegisterBtn.addEventListener('click', () => {
    registrationForm.style.display = 'block';
    loginForm.style.display = 'none';
    formTitle.innerText = 'Register';
});

// Event listener for switching to login form
showLoginBtn.addEventListener('click', () => {
    registrationForm.style.display = 'none';
    loginForm.style.display = 'block';
    formTitle.innerText = 'Login';
});

// Registration form submission
document.getElementById('register').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create an object to store user info
    const userInfo = {
        username: username,
        email: email,
        password: password
    };

    // Store user info in localStorage
    localStorage.setItem('userInfo', JSON.stringify(userInfo));

    // Show success message and clear the form
    document.getElementById('registerMessage').innerText = 'Registration successful! You can now log in.';
    document.getElementById('register').reset();
    window.location.href="login.html";
});

// Login form submission
document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Retrieve user data from localStorage
    const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));

    // Check if user exists and credentials match
    if (storedUserInfo) {
        if (loginUsername === storedUserInfo.username && loginPassword === storedUserInfo.password) {
            document.getElementById('loginErrorMessage').innerText = '';
            alert('Login successful!');
            window.location.href="address.html";
            // Redirect to a new page or do something else after successful login
            // window.location.href = 'welcome.html'; // Example
        } else {
            document.getElementById('loginErrorMessage').innerText = 'Invalid username or password.';
        }
    } else {
        document.getElementById('loginErrorMessage').innerText = 'No registered users found.';
    }
});
