const serviceItems = document.querySelectorAll('.what-we-do-item');

serviceItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('hovered'); 
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('hovered'); 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from actually submitting

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        
        //console.log('Name:', name);
        //console.log('Email:', email);
        //console.log('Message:', message);
        confirmation.style.display = 'block';

        // Clear the form after submission (optional)
        contactForm.reset();
    });
});