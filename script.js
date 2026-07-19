document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons Vector Engine
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Set Dynamic Copyright Framework Year
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Mobile Navigation Interaction Model
  const menuToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle('hidden');
    });

    // Dismiss overlay structure upon valid link routing selection
    document.querySelectorAll('#mobileMenu aria-label, #mobileMenu a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });

    // Close mobile menu if user clicks outside of it
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        mobileMenu.classList.add('hidden');
      }
    });
  }

  // Smooth Scroll View Navigation Realignment
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        
        // Offset scroll calculation to account for fixed header layout height
        const headerOffset = 90;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Corporate Proposal Intake Form Validation Engine
  const contactForm = document.getElementById('contactForm');
  const toastNotification = document.getElementById('toast');

  if (contactForm && toastNotification) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Collect data points for structured transmission mapping
      const submissionPayload = {
        officerName: document.getElementById('name').value.trim(),
        corporateEmail: document.getElementById('email').value.trim(),
        projectScope: document.getElementById('message').value.trim()
      };

      // Execution verification notification loop
      toastNotification.classList.add('show');
      contactForm.reset();

      // Dismiss tracking toast window cleanly
      setTimeout(() => {
        toastNotification.classList.remove('show');
      }, 4000);
    });
  }
});
