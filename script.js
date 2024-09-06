document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form values
    const from_name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Prepare the email template parameters
    const templateParams = {
        name: from_name,
        email: email,
        message: message
    };
    
    // Send the form data via EmailJS
    emailjs.send('service_dhblyc7', 'template_9bd0cec', templateParams)
    .then(function(response) {
        document.getElementById('form-status').innerHTML = 'Message sent successfully!';
        document.getElementById('contactForm').reset(); // Reset the form
    }, function(error) {
        document.getElementById('form-status').innerHTML = 'Failed to send message. Please try again.';
    });
});
