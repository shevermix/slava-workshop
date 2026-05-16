// ── Before/after comparison slider ───────────────────────────
(function initComparison() {
  const root = document.getElementById('comparison');
  const after = document.getElementById('comp-after');
  const handle = document.getElementById('comp-handle');
  if (!root || !after || !handle) return;

  let split = 0.5;

  const apply = (pct) => {
    split = Math.min(1, Math.max(0, pct));
    after.style.clipPath = `inset(0 0 0 ${(1 - split) * 100}%)`;
    handle.style.left = `${split * 100}%`;
  };

  const fromEvent = (e) => {
    const rect = root.getBoundingClientRect();
    apply((e.clientX - rect.left) / rect.width);
  };

  const onDown = (e) => {
    root.setPointerCapture(e.pointerId);
    fromEvent(e);
  };

  const onMove = (e) => {
    if (!root.hasPointerCapture(e.pointerId)) return;
    if (e.buttons === 0) {
      root.releasePointerCapture(e.pointerId);
      return;
    }
    fromEvent(e);
  };

  const onUp = (e) => {
    if (root.hasPointerCapture(e.pointerId)) {
      root.releasePointerCapture(e.pointerId);
    }
  };

  root.addEventListener('pointerdown', onDown);
  root.addEventListener('pointermove', onMove);
  root.addEventListener('pointerup', onUp);
  root.addEventListener('pointercancel', onUp);
  window.addEventListener('resize', () => apply(split));
  apply(split);
})();

// ── Navbar shadow on scroll ──────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 10
    ? '0 2px 20px rgba(0,0,0,0.14)'
    : '0 1px 8px rgba(0,0,0,0.07)';
}, { passive: true });

// ── Mobile menu ──────────────────────────────────────────────
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

function closeNav() {
  mobileMenu.classList.remove('open');
}

hamburger?.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) closeNav();
});

// ── Photo upload label ───────────────────────────────────────
const photoInput = document.getElementById('photo-input');
const uploadText = document.getElementById('upload-text');

photoInput?.addEventListener('change', () => {
  const n = photoInput.files.length;
  uploadText.textContent = n > 0
    ? `${n} photo${n > 1 ? 's' : ''} selected`
    : 'UPLOAD PHOTOS';
});

// ── Contact form ─────────────────────────────────────────────
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  // TODO: connect to real email/CRM service (Formspree, Netlify Forms, etc.)
  contactForm.style.display = 'none';
  formSuccess.style.display = 'block';
});
