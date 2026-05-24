
// ===== SCROLL ANIMATIONS =====
/**
 * Uses IntersectionObserver to add .visible class
 * to elements with [data-animate] when they enter the viewport.
 */
const animatedElements = document.querySelectorAll('[data-animate]');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Unobserve after first trigger so animation runs once
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px',
    }
  );
  animatedElements.forEach((el) => observer.observe(el));
} else {
  // Fallback for browsers without IntersectionObserver
  animatedElements.forEach((el) => el.classList.add('visible'));
}


// ===== CONTACT FORM VALIDATION =====
const contactForm   = document.getElementById('contactForm');
const formSuccess   = document.getElementById('formSuccess');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    // Clear previous errors
    document.querySelectorAll('.form__error').forEach(el => el.textContent = '');
    formSuccess.textContent = '';
    const name    = document.getElementById('name');
    const email   = document.getElementById('email');
    const message = document.getElementById('message');
    // Validate name
    if (name.value.trim().length < 2) {
      document.getElementById('nameError').textContent = 'Name must be at least 2 characters.';
      valid = false;
    }
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      valid = false;
    }
    // Validate message
    if (message.value.trim().length < 10) {
      document.getElementById('messageError').textContent = 'Message must be at least 10 characters.';
      valid = false;
    }
    if (valid) {
      formSuccess.textContent = '✓ Message sent! I\'ll get back to you soon.';
      contactForm.reset();
    }
  });
  // Live validation — clear error on input
  ['name', 'email', 'message'].forEach(fieldId => {
    const field = document.getElementById(fieldId);
    if (field) {
      field.addEventListener('input', () => {
        const errorEl = document.getElementById(fieldId + 'Error');
        if (errorEl) errorEl.textContent = '';
      });
    }
  });
}