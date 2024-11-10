const menuToggle = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('#nav-links');
const closeMenu = document.querySelector('#close-menu');

menuToggle.addEventListener('click', () => {
    navLinks.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('active');
});















window.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.card');
    const section = document.getElementById('card-section');
    const sectionPosition = section.getBoundingClientRect().top;

    // If the section is in view, trigger the animation
    if (sectionPosition < window.innerHeight) {
        cards.forEach(card => {
            card.classList.add('active');
        });
    }
});













// Create an intersection observer to detect when the section is in view
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add class to trigger animation
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, {
    threshold: 0.5 // Trigger when 50% of the section is in view
});

// Observe the banner section
const bannerSection = document.getElementById('banner-section');
observer.observe(bannerSection);














// Handling form submission
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if (email) {
        alert(`Thank you for subscribing with email: ${email}`);
        emailInput.value = ''; // Clear the input after submission
    } else {
        alert('Please enter a valid email address');
    }
});
