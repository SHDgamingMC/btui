
    const eventDate = new Date('February 27, 2026 9:00:00 UTC').getTime();
    
    // Elements
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const countdownContainer = document.getElementById('countdown');
    const reminderBtn = document.getElementById('reminder-btn');
    
    // Random flare animation
    function createFlares() {
      const container = document.querySelector('.container');
      const flareCount = 10;
      
      for (let i = 0; i < flareCount; i++) {
        const flare = document.createElement('div');
        flare.className = 'flare';
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        flare.style.left = `${posX}%`;
        flare.style.top = `${posY}%`;
        
        // Random delay
        flare.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(flare);
      }
    }
    
    // Create flares
    createFlares();
    
    // Update countdown function
    function updateCountdown() {
      const now = new Date().getTime();
      const distance = eventDate - now;
      
      // Time calculations
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      // Add leading zeros
      const formatNumber = num => num < 10 ? `0${num}` : num;
      
      // Update DOM
      daysEl.textContent = formatNumber(days);
      hoursEl.textContent = formatNumber(hours);
      minutesEl.textContent = formatNumber(minutes);
      secondsEl.textContent = formatNumber(seconds);
      
      // Beat animation on seconds change
      secondsEl.classList.add('beat-animation');
      setTimeout(() => {
        secondsEl.classList.remove('beat-animation');
      }, 500);
      
      // When countdown is over
      if (distance < 0) {
        clearInterval(countdown);
        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";
        
        // Add "LIVE NOW" message
        const eventDetails = document.querySelector('.event-details');
        const liveNow = document.createElement('div');
        liveNow.textContent = "LIVE NOW";
        liveNow.style.color = "var(--accent)";
        liveNow.style.fontSize = "2rem";
        liveNow.style.fontWeight = "900";
        liveNow.style.marginTop = "1rem";
        liveNow.style.animation = "beat 1s infinite";
        eventDetails.appendChild(liveNow);
      }
    }
    
    // Initial call
    updateCountdown();
    
    // Update every second
    const countdown = setInterval(updateCountdown, 1000);
    
    // Reminder button functionality
    reminderBtn.addEventListener('click', function() {
      this.textContent = "Reminder Set!";
      this.style.background = "linear-gradient(90deg, #0aff85, #00b2ff)";
      setTimeout(() => {
        this.textContent = "Set a Reminder";
        this.style.background = "linear-gradient(90deg, var(--primary), var(--secondary))";
      }, 3000);
      
      // Trigger more pulse rings on click
      const container = document.querySelector('.container');
      for (let i = 0; i < 3; i++) {
        const extraPulse = document.createElement('div');
        extraPulse.className = 'pulse-ring';
        extraPulse.style.animationDelay = `${i * 0.2}s`;
        extraPulse.style.animationDuration = '1s';
        container.appendChild(extraPulse);
        
        // Remove the extra pulse after animation
        setTimeout(() => {
          extraPulse.remove();
        }, 1000);
      }
    });
    
    // Make ticker content dynamic
    const tickerContent = document.querySelector('.ticker-content');
    const originalWidth = tickerContent.offsetWidth;
    tickerContent.style.animationDuration = `${originalWidth / 50}s`;

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Start counter animation only when card is visible
          if (entry.target.querySelector('.counter')) {
            const counter = entry.target.querySelector('.counter');
            const target = parseInt(counter.getAttribute('data-target'));
            animateCounter(counter, target);
          }
        }
      });
    }, {
      root: null,
      threshold: 0.3,
      rootMargin: '0px'
    });

    // Observe all metric cards
    document.querySelectorAll('.metric-card').forEach(card => {
      observer.observe(card);
    });

    // Counter animation
    function animateCounter(counterElement, target) {
      const duration = 2000; // 2 seconds
      const startTime = performance.now();
      const formatNumber = num => {
        return new Intl.NumberFormat().format(Math.floor(num));
      };

      // Special handling for smaller numbers (less than 100)
      const increment = target <= 100 ? 1 : Math.ceil(target / 100);
      let current = 0;

      function updateCounter(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Use easeOutExpo for smoother ending
        const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        current = Math.floor(easeOutExpo * target);
        
        counterElement.textContent = formatNumber(current);
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counterElement.textContent = formatNumber(target);
        }
      }
      
      requestAnimationFrame(updateCounter);
    }

    // Button click effect (no actual submission)
    document.querySelector('.cta-button').addEventListener('click', function(e) {
      e.preventDefault();
      this.textContent = "Request Submitted!";
      setTimeout(() => {
        this.textContent = "Schedule Analytics Demo";
      }, 2000);
    });

    // Trigger animations on page load for initial visibility
    setTimeout(() => {
      document.querySelectorAll('.metric-card').forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('visible');
          if (card.querySelector('.counter')) {
            const counter = card.querySelector('.counter');
            const target = parseInt(counter.getAttribute('data-target'));
            animateCounter(counter, target);
          }
        }, index * 300); // Staggered animation
      });
    }, 500);

    



    




