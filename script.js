//   document.addEventListener('DOMContentLoaded', function() {
//             // Mobile menu toggle
//             const menuToggle = document.querySelector('.menu-toggle');
//             const navMenu = document.querySelector('.nav-menu');
//             menuToggle.addEventListener('click', function() {
//                 menuToggle.classList.toggle('active');
//                 navMenu.classList.toggle('active');
//             });
//             // Close menu when clicking a link
//             document.querySelectorAll('.nav-item').forEach(link => {
//                 link.addEventListener('click', () => {
//                     menuToggle.classList.remove('active');
//                     navMenu.classList.remove('active');
//                 });
//             });
//             // FAQ toggle functionality
//             const faqItems = document.querySelectorAll('.faq-item');
//             faqItems.forEach(item => {
//                 item.addEventListener('click', () => {
//                     item.classList.toggle('active');
//                 });
//             });
//             // Testimonial auto-scroll
//             const testimonialsContainer = document.getElementById('testimonialsContainer');
//             let scrollAmount = 0;
//             let scrollInterval;
//             function startAutoScroll() {
//                 scrollInterval = setInterval(() => {
//                     testimonialsContainer.scrollLeft += 1;
//                     if (testimonialsContainer.scrollLeft >= testimonialsContainer.scrollWidth / 2) {
//                         testimonialsContainer.scrollLeft = 0;
//                     }
//                 }, 30);
//             }
//             function stopAutoScroll() {
//                 clearInterval(scrollInterval);
//             }
//             // Start auto-scroll initially
//             startAutoScroll();
//             // Stop auto-scroll on hover
//             testimonialsContainer.addEventListener('mouseenter', stopAutoScroll);
//             testimonialsContainer.addEventListener('mouseleave', startAutoScroll);
//             // Play button functionality
//             const playButton = document.querySelector('.play-button');
//             if (playButton) {
//                 playButton.addEventListener('click', () => {
//                     alert('Video playback would start here in a real implementation!');
//                 });
//             }
//             // Smooth scrolling for anchor links
//             document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//                 anchor.addEventListener('click', function(e) {
//                     e.preventDefault();
//                     const target = document.querySelector(this.getAttribute('href'));
//                     if (target) {
//                         window.scrollTo({
//                             top: target.offsetTop - 80,
//                             behavior: 'smooth'
//                         });
//                     }
//                 });
//             });
//         });


document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle (kept as-is, though note: your HTML doesn't have .menu-toggle or .nav-menu currently)
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        document.querySelectorAll('.nav-item').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // FAQ toggle functionality - CORRECTED VERSION
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Find the parent FAQ item
            const faqItem = question.closest('.faq-item');
            // Toggle the active class on the FAQ item
            faqItem.classList.toggle('active');
            
            // Update the toggle symbol
            const toggle = question.querySelector('.faq-toggle');
            if (faqItem.classList.contains('active')) {
                toggle.textContent = '−'; // Minus sign when expanded
            } else {
                toggle.textContent = '+'; // Plus sign when collapsed
            }
        });
    });

    // Testimonial auto-scroll
    const testimonialsContainer = document.getElementById('testimonialsContainer');
    if (testimonialsContainer) {
        let scrollAmount = 0;
        let scrollInterval;
        
        function startAutoScroll() {
            scrollInterval = setInterval(() => {
                testimonialsContainer.scrollLeft += 1;
                if (testimonialsContainer.scrollLeft >= testimonialsContainer.scrollWidth / 2) {
                    testimonialsContainer.scrollLeft = 0;
                }
            }, 30);
        }
        
        function stopAutoScroll() {
            clearInterval(scrollInterval);
        }
        
        // Start auto-scroll initially
        startAutoScroll();
        
        // Stop auto-scroll on hover
        testimonialsContainer.addEventListener('mouseenter', stopAutoScroll);
        testimonialsContainer.addEventListener('mouseleave', startAutoScroll);
    }

    // Play button functionality
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', () => {
            alert('Video playback would start here in a real implementation!');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});