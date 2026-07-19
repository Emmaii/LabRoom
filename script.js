// ===== LUCIDE ICONS =====
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}

// ===== SET CURRENT YEAR =====
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ===== MOBILE MENU TOGGLE =====
const toggle = document.getElementById('mobileMenuToggle');
const menu = document.getElementById('mobileMenu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  // Close mobile menu when a link is clicked
  document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

// ===== SMOOTH SCROLL (optional enhancement) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== CONTACT FORM TOAST SUBMISSION =====
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

if (contactForm && toast) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Display the success notification toast
    toast.classList.add('show');
    
    // Reset the form values
    contactForm.reset();
    
    // Hide toast after 3 seconds
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  });
}
