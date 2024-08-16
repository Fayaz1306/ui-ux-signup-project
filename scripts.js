document.addEventListener('DOMContentLoaded', () => {
    showStep('welcomeStep');
});

function showStep(stepId) {
    document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
    document.getElementById(stepId).classList.add('active');
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidUsername(username) {
    // Check if username is at least 3 characters and contains only letters, numbers, and underscores
    const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
    return usernameRegex.test(username);
}

function checkLoginFields() {
    const email = document.getElementById('loginEmail').value.trim();
    const usernameOrEmail = document.getElementById('loginUsernameOrEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    const isEmailOrUsernameValid = isValidEmail(usernameOrEmail) || isValidUsername(usernameOrEmail);

    document.getElementById('loginButton').disabled = !(email && isValidEmail(email));
    document.getElementById('loginSubmitButton').disabled = !(isEmailOrUsernameValid && password);
}

function checkSignupFields() {
    const email = document.getElementById('signupEmail').value.trim();
    const username = document.getElementById('signupUsername').value.trim();
    const password = document.getElementById('signupPassword').value.trim();
    const confirmPassword = document.getElementById('signupConfirmPassword').value.trim();
    const privacyChecked = document.getElementById('privacy').checked;

    const isPasswordMatch = password === confirmPassword;
    const isPasswordValid = password.length >= 6;

    document.getElementById('signupSubmitButton').disabled = !(
        isValidEmail(email) && isValidUsername(username) && isPasswordMatch && isPasswordValid && privacyChecked
    );
}

function checkResetFields() {
    const email = document.getElementById('resetEmail').value.trim();
    document.getElementById('resetButton').disabled = !isValidEmail(email);
}

function handleLogin() {
    const usernameOrEmail = document.getElementById('loginUsernameOrEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    if ((isValidEmail(usernameOrEmail) || isValidUsername(usernameOrEmail)) && password) {
        alert('Login successful!');
        // Here you would usually send the data to the server
    } else {
        alert('Please fill out all fields correctly.');
    }
}

function handleSignup() {
    const email = document.getElementById('signupEmail').value.trim();
    const username = document.getElementById('signupUsername').value.trim();
    const password = document.getElementById('signupPassword').value.trim();
    const confirmPassword = document.getElementById('signupConfirmPassword').value.trim();
    const privacyChecked = document.getElementById('privacy').checked;

    const isPasswordMatch = password === confirmPassword;
    const isPasswordValid = password.length >= 6;

    if (isValidEmail(email) && isValidUsername(username) && isPasswordMatch && isPasswordValid && privacyChecked) {
        alert('Signup successful!');
        // Here you would usually send the data to the server
    } else {
        alert('Please fill out all fields correctly.');
    }
}

function handlePasswordReset() {
    const email = document.getElementById('resetEmail').value.trim();

    if (isValidEmail(email)) {
        alert('Password reset link has been sent to your email!');
        // Here you would usually send the data to the server
    } else {
        alert('Please enter a valid email address.');
    }
}
