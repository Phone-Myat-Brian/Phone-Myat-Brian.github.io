document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Basic form submission handling
    const form = document.querySelector('#contact form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // Here you would typically handle the form submission,
        // for example, by sending the data to a server.
        alert('Thank you for your message!');
        form.reset();
    });
});
