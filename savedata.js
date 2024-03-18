function signup() {
    var username = document.getElementById('signupUsername').value;
    var password = document.getElementById('signupPassword').value;

    // Save username and password to local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Sign up successful! Please log in.');
    
    // Hide sign-up form and show login form
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

function login() {
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');
    
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
    } else {
        alert('Invalid username or password. Please try again.');
    }
}