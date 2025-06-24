// Countdown Timer
        function updateCountdown() {
            const eventDate = new Date('July 25, 2025 18:00:00').getTime();
            const now = new Date().getTime();
            const timeLeft = eventDate - now;
            
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            document.getElementById('days').innerText = String(days).padStart(2, '0');
            document.getElementById('hours').innerText = String(hours).padStart(2, '0');
            document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
            document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
            
            if (timeLeft < 0) {
                clearInterval(countdownTimer);
                document.getElementById('days').innerText = '00';
                document.getElementById('hours').innerText = '00';
                document.getElementById('minutes').innerText = '00';
                document.getElementById('seconds').innerText = '00';
            }
        }
        
        // Start the countdown
        updateCountdown();
        const countdownTimer = setInterval(updateCountdown, 1000);
        
        // Ticket progress animation
        setTimeout(() => {
            document.getElementById('ticket-progress').style.width = '25%';
        }, 500);
        
        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Program kártyák kattintásra fordulnak meg
        document.getElementById('card1').addEventListener('click', function() {
            this.style.transform = this.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
        });
        
        document.getElementById('card2').addEventListener('click', function() {
            this.style.transform = this.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
        });
        
        document.getElementById('card3').addEventListener('click', function() {
            this.style.transform = this.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
        });
