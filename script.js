function signUp() {
    let username = document.getElementById("signup-username").value;
    let password = document.getElementById("signup-password").value;

    if (username === "" || password === "") {
        alert("Please enter a username and password.");
        return;
    }

    // Store in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Sign-up successful! Please login.");
    toggleForms();
}

function logIn() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        document.getElementById("popup").style.display = "block";
    } else {
        alert("Invalid username or password.");
    }
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function toggleForms() {
    document.getElementById("signup-container").classList.toggle("hidden");
    document.getElementById("login-container").classList.toggle("hidden");
}
