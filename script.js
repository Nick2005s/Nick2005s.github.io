// Notification
if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(function(permission) {
        if (permission === 'granted') {
            new Notification('Welcome!', { body: 'Thanks for visiting Sichen Huang\'s Portfolio.' });
        }
    });
}

// Event Handler
document.addEventListener('DOMContentLoaded', function() {
    const portfolioImg = document.querySelectorAll('.portfolio-img');

    portfolioImg.forEach(function(img) {
        img.addEventListener('mouseenter', function() {
            alert('Mouse entered image!');
        });
    });
});

// Conditional
const age = 25;
if (age >= 18) {
    console.log('You are an adult.');
} else {
    console.log('You are a minor.');
}

document.addEventListener('DOMContentLoaded', function() {
    const button1 = document.querySelector('#color1');
    const button2 = document.querySelector('#color2');
   
    button1.addEventListener('click', function() {
        changeColorScheme('#ff9999', '#333'); // Red color scheme
    });

    button2.addEventListener('click', function() {
        changeColorScheme('#99ccff', '#333'); // Blue color scheme
    });

    
    function changeColorScheme(bgColor, textColor) {
        document.body.style.backgroundColor = bgColor;
        document.body.style.color = textColor;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#myForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Fetch form values
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const age = document.querySelector('#age').value;
        const gender = document.querySelector('#gender').value;
        const message = document.querySelector('#message').value;

        // Validate inputs
        if (name.trim() === '') {
            alert('Please enter your name.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (age < 18) {
            alert('You must be at least 18 years old to submit the form.');
            return;
        }

        if (gender === '') {
            alert('Please select your gender.');
            return;
        }

        if (message.trim() === '') {
            alert('Please enter a message.');
            return;
        }

        // If all validations pass, submit the form
        alert('Form submitted successfully!');
        form.reset();
    });

    // Function to validate email using regular expression
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
