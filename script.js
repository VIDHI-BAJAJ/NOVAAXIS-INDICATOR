        // Countdown Timer Functionality
        function updateCountdown() {
            const countdownElement = document.querySelector('.countdown-timer');
            if (!countdownElement) return;
            
            // Set target date (example: 2 days, 3 hours, 43 minutes from now)
            const targetDate = new Date();
            targetDate.setHours(targetDate.getHours() + 2);
            targetDate.setMinutes(targetDate.getMinutes() + 3);
            targetDate.setSeconds(targetDate.getSeconds() + 43);
            
            const now = new Date();
            const difference = targetDate - now;
            
            if (difference <= 0) {
                countdownElement.textContent = "00 : 00 : 00";
                return;
            }
            
            const hours = Math.floor(difference / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            countdownElement.textContent = `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
        }
        
        // Initialize countdown
        updateCountdown();
        setInterval(updateCountdown, 1000);
        
        // Add click event to all CTA buttons
        document.querySelectorAll('.cta-button').forEach(button => {
            button.addEventListener('click', function() {
                alert('Thank you for your interest! Please fill out the registration form to join the Alpha Traders Masterclass.');
            });
        });
        
        // Add hover effect to modules
        document.querySelectorAll('.module').forEach(module => {
            module.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#f9f9f9';
            });
            
            module.addEventListener('mouseleave', function() {
                this.style.backgroundColor = '#fff';
            });
        });
  