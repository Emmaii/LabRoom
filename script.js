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

  document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

// ===== SMOOTH SCROLL =====
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
    toast.classList.add('show');
    contactForm.reset();
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  });
}
