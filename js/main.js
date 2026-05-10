// Sticky nav shadow
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 72;
    window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
  });
});

// Contact form validation & submit
const form = document.getElementById('contact-form');
const successMsg = document.getElementById('form-success');

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.querySelector('[name="name"]').value.trim();
  const phone = form.querySelector('[name="phone"]').value.trim();
  const phoneClean = phone.replace(/\D/g, '');

  if (!name) { alert('Пожалуйста, введите ваше имя.'); return; }
  if (phoneClean.length < 7) { alert('Пожалуйста, введите корректный номер телефона.'); return; }

  form.style.display = 'none';
  successMsg.style.display = 'block';
});
