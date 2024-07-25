document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.full-page');

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Form validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = form.elements['name'].value;
        const email = form.elements['email'].value;
        const message = form.elements['message'].value;

        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        // Simulate sending the form data
        alert('Message sent successfully!');
        form.reset();
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('mobile-menu');
    const nav = document.querySelector('.nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('no-search');
    });
});
