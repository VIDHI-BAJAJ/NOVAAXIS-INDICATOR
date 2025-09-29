        // Add interactivity to the play button
        document.querySelector('.play-button').addEventListener('click', function() {
            alert('Video playback would start here in a real implementation.');
        });
        
        // Add hover effect to feature boxes
        const featureBoxes = document.querySelectorAll('.feature-box');
        featureBoxes.forEach(box => {
            box.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#333';
            });
            box.addEventListener('mouseleave', function() {
                this.style.backgroundColor = '#000';
            });
        });

        // Add hover effect to CTA button
        document.querySelector('.cta-button').addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 6px 12px rgba(0,0,0,0.5)';
        });
        
        document.querySelector('.cta-button').addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
        });
        
        // Add click event to CTA button
        document.querySelector('.cta-button').addEventListener('click', function(e) {
            e.preventDefault();
            alert('Thank you for your interest! You would be redirected to the registration page in a real implementation.');
        });
        
        // Add animation to check icons on load
        document.addEventListener('DOMContentLoaded', function() {
            const checkIcons = document.querySelectorAll('.check-icon');
            checkIcons.forEach((icon, index) => {
                setTimeout(() => {
                    icon.style.transform = 'scale(1.2)';
                    setTimeout(() => {
                        icon.style.transform = 'scale(1)';
                    }, 200);
                }, index * 100);
            });
        });

        // Add functionality to FAQ items
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', function() {
                const faqItem = this.closest('.faq-item');
                const answer = faqItem.querySelector('.faq-answer');
                const icon = this.querySelector('.faq-icon');
                
                // Toggle current answer
                answer.classList.toggle('show');
                if (answer.classList.contains('show')) {
                    icon.textContent = '−';
                } else {
                    icon.textContent = '+';
                }
            });
        });
        
        // Add hover effect to FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px)';
                this.style.boxShadow = '0 6px 15px rgba(0,0,0,0.1)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
            });
        });
        
        // Smooth scroll to top when clicking down arrow
        document.querySelector('.down-arrow').addEventListener('click', function() {
            window.scrollTo({
                top: document.querySelector('.faq-container').offsetTop - 100,
                behavior: 'smooth'
            });
        });


                // Add hover effect to testimonials
        document.querySelectorAll('.testimonial-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 6px 15px rgba(0,0,0,0.1)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
            });
        });
        
        // Highlight animation on load
        document.addEventListener('DOMContentLoaded', function() {
            const highlights = document.querySelectorAll('.highlight');
            highlights.forEach((hl, index) => {
                hl.style.opacity = '0';
                hl.style.transform = 'scale(0.9)';
                hl.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                
                setTimeout(() => {
                    hl.style.opacity = '1';
                    hl.style.transform = 'scale(1)';
                }, index * 50);
            });
        });
