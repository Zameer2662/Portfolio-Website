let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navlinks = document.querySelectorAll('header nav a');

// Toggle menu icon and navbar
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// Remove toggle icon and navbar on nav link click
navlinks.forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');

        // Check if the clicked link is for the skills section
        if (link.getAttribute('href') === '#skills') {
            progressAnimated = false; // Reset the animation flag

            // Introduce a delay before starting the animation
            setTimeout(() => {
                animateProgressBars(); // Trigger the animation for progress bars
            }, 100); // Adjust this delay as needed for visibility
        }
    };
});

// Initialize progress animation flag
let progressAnimated = false;

// Function to animate the progress bars
// Function to animate the progress bars
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(bar => {
        const targetWidth = bar.getAttribute('data-width'); // Get the target width from the data attribute
        
        // Reset the width to 0 for animation
        bar.style.transition = 'none'; // Disable transition temporarily
        bar.style.width = '0'; // Start from 0% for animation
        
        // Use setTimeout to create a slight delay before starting the animation
        setTimeout(() => {
            bar.style.transition = 'width 2s ease'; // Enable transition for smooth effect
            bar.style.width = targetWidth; // Animate to the target width
        }, 100); // Slight delay before starting the animation
    });
}


// Scroll event listener
window.onscroll = () => {
    // Section active link functionality
    let sections = document.querySelectorAll('section');
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        }
    });

    // Sticky navbar functionality
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Check if skills section is in view and trigger progress animation
    const skillsSection = document.querySelector('#skills');
    const sectionTop = skillsSection.offsetTop;
    const sectionHeight = skillsSection.offsetHeight;
    const scrollY = window.scrollY;

    if (!progressAnimated && scrollY + window.innerHeight > sectionTop + sectionHeight / 2) {
        animateProgressBars(); // Call the function to animate the progress bars
        progressAnimated = true; // Set the flag to true to prevent re-triggering
    }
}

// Scroll reveal JS
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('heading', { origin: 'top' });
ScrollReveal().reveal('.services-box, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content, .about-img', { origin: 'left' });
ScrollReveal().reveal('.about-content, .home-img', { origin: 'right' });

// Typed JS
const typed = new Typed('.multiple-text', {
    strings: ['App Developer', 'Node Developer', '.NET Developer' , 'MERN Stack Developer'],
    typeSpeed: 50,
    backSpeed: 70,
    backDelay: 70,
    loop: true,
});
