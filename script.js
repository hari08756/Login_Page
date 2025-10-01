// Toggle between Sign In and Sign Up forms
const signinPage = document.getElementById('signin-page');
const signupPage = document.getElementById('signup-page');
const showSignup = document.getElementById('show-signup');
const showSignin = document.getElementById('show-signin');
const toggleBtn = document.getElementById('toggle-btn');
const welcomeTitle = document.getElementById('welcome-title');
const welcomeText = document.getElementById('welcome-text');

showSignup.addEventListener('click', function() {
    signinPage.classList.remove('active');
    signupPage.classList.add('active');
    welcomeTitle.textContent = 'Welcome Back!';
    welcomeText.textContent = 'To keep connected with us please login with your personal info';
    toggleBtn.textContent = 'Sign In';
});

showSignin.addEventListener('click', function() {
    signupPage.classList.remove('active');
    signinPage.classList.add('active');
    welcomeTitle.textContent = 'Hello, Friend!';
    welcomeText.textContent = 'Enter your personal details and start your journey with us';
    toggleBtn.textContent = 'Sign Up';
});

toggleBtn.addEventListener('click', function() {
    if (signinPage.classList.contains('active')) {
        showSignup.click();
    } else {
        showSignin.click();
    }
});

// Form validation
document.getElementById('signin-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('signin-email');
    const password = document.getElementById('signin-password');
    let isValid = true;
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        email.parentElement.classList.add('error');
        isValid = false;
    } else {
        email.parentElement.classList.remove('error');
    }
    
    // Password validation
    if (password.value.length < 6) {
        password.parentElement.classList.add('error');
        isValid = false;
    } else {
        password.parentElement.classList.remove('error');
    }
    
    if (isValid) {
        // In a real application, you would submit the form here
        alert('Sign in successful!');
        // Reset form
        this.reset();
    }
});

document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('signup-name');
    const email = document.getElementById('signup-email');
    const password = document.getElementById('signup-password');
    const confirm = document.getElementById('signup-confirm');
    let isValid = true;
    
    // Name validation
    if (name.value.trim().length < 2) {
        name.parentElement.classList.add('error');
        isValid = false;
    } else {
        name.parentElement.classList.remove('error');
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        email.parentElement.classList.add('error');
        isValid = false;
    } else {
        email.parentElement.classList.remove('error');
    }
    
    // Password validation
    if (password.value.length < 8) {
        password.parentElement.classList.add('error');
        isValid = false;
    } else {
        password.parentElement.classList.remove('error');
    }
    
    // Confirm password validation
    if (password.value !== confirm.value) {
        confirm.parentElement.classList.add('error');
        isValid = false;
    } else {
        confirm.parentElement.classList.remove('error');
    }
    
    if (isValid) {
        // In a real application, you would submit the form here
        alert('Account created successfully!');
        // Reset form
        this.reset();
        // Switch to sign in form
        showSignin.click();
    }
});

// Social login buttons
document.querySelectorAll('.social-btn').forEach(button => {
    button.addEventListener('click', function() {
        const platform = this.querySelector('span').textContent;
        alert(`Sign in with ${platform} would be implemented here`);
    });
});

// Forgot password functionality
document.querySelector('.forgot-password').addEventListener('click', function(e) {
    e.preventDefault();
    const email = prompt('Please enter your email address to reset your password:');
    if (email) {
        alert(`Password reset instructions have been sent to ${email}`);
    }
});