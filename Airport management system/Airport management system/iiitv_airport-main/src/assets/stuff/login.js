document.addEventListener('DOMContentLoaded', function () {
    const signInForm = document.querySelector('.sign-in-form');
    const signUpForm = document.querySelector('.sign-up-form');
    const signInBtn = document.getElementById('sign-in-btn');
    const signUpBtn = document.getElementById('sign-up-btn');

    // Switch to sign up panel
    signInBtn.addEventListener('click', function () {
        signUpForm.parentElement.classList.remove('panel-hidden');
        signInForm.parentElement.classList.add('panel-hidden');
    });

    // Switch to sign in panel
    signUpBtn.addEventListener('click', function () {
        signInForm.parentElement.classList.remove('panel-hidden');
        signUpForm.parentElement.classList.add('panel-hidden');
    });

    // Handle sign in form submission
    signInForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(signInForm);
        const userData = {
            username: formData.get('username'),
            password: formData.get('password')
        };
        console.log(userData)
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.text())
        .then(data => {
            console.log(data); // Log the response data to the console
        })
        .catch(error => {
            console.error('Login error:', error);
            // Handle error (e.g., display error message to the user)
        });
    });

    // Handle sign up form submission
    signUpForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const formData = new FormData(signUpForm);
        const userData = {
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password')
        };

        fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (response.ok) {
                window.location.href = 'display.html'; // Redirect to success page
            } else {
                throw new Error('Registration failed');
            }
        })
        .catch(error => {
            console.error('Registration error:', error);
            // Handle error (e.g., display error message to the user)
        });
    });
});
