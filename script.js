document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simulating message save in local storage
    const contactInfo = { name, email, message };
    localStorage.setItem('contactInfo', JSON.stringify(contactInfo));
    
    document.getElementById('formMessage').innerText = "Your message has been saved!";
    
    // Reset form
    this.reset();
});





