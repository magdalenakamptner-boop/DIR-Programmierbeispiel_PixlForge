/* PixlForge — main.js */

// ── PAGE ROUTING ──────────────────────────────────────────────
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + id);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  // Update active nav link
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    a.setAttribute('aria-current', a.dataset.page === id ? 'page' : 'false');
  });
  // Close mobile nav
  const navLinks = document.getElementById('nav-links');
  const toggle   = document.querySelector('.nav-toggle');
  navLinks.classList.remove('open');
  if (toggle) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  }
}

// ── MOBILE NAV ────────────────────────────────────────────────
function toggleNav(btn) {
  const navLinks = document.getElementById('nav-links');
  const open = navLinks.classList.toggle('open');
  btn.setAttribute('aria-expanded', String(open));
  btn.textContent = open ? '✕' : '☰';
}

// ── COOKIE BANNER ─────────────────────────────────────────────
function setCookieConsent(level) {
  try { localStorage.setItem('pf_cookie_consent', level); } catch(e) {}
  document.getElementById('cookie-banner').classList.remove('visible');
}

function initCookieBanner() {
  let consent = null;
  try { consent = localStorage.getItem('pf_cookie_consent'); } catch(e) {}
  if (!consent) {
    document.getElementById('cookie-banner').classList.add('visible');
  }
}

// ── PURCHASE MODAL ────────────────────────────────────────────
let selectedPlan  = '';
let selectedPrice = 0;

function handlePurchase(plan, price) {
  selectedPlan  = plan;
  selectedPrice = price;
  document.getElementById('modal-desc').textContent =
    'Sie kaufen: PixlForge ' + plan + ' — €' + price + ' (einmalig, Demo)';
  const overlay = document.getElementById('purchase-modal');
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  setTimeout(() => document.getElementById('modal-email').focus(), 80);
}

function closePurchaseModal() {
  const overlay = document.getElementById('purchase-modal');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
}

function completePurchase() {
  const email = document.getElementById('modal-email').value.trim();
  const name  = document.getElementById('modal-name').value.trim();
  if (!email || !name) {
    alert('Bitte füllen Sie alle Felder aus.');
    return;
  }
  closePurchaseModal();
  const success = document.getElementById('purchase-success');
  success.classList.add('show');
  success.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ── CONTACT FORM ──────────────────────────────────────────────
function submitContactForm() {
  const name    = document.getElementById('contact-name').value.trim();
  const email   = document.getElementById('contact-email').value.trim();
  const subject = document.getElementById('contact-subject').value;
  const message = document.getElementById('contact-message').value.trim();
  const privacy = document.getElementById('contact-privacy').checked;

  if (!name || !email || !subject || !message) {
    alert('Bitte füllen Sie alle Pflichtfelder aus.');
    return;
  }
  if (!privacy) {
    alert('Bitte stimmen Sie der Datenschutzerklärung zu.');
    return;
  }
  document.getElementById('contact-form-fields').style.display = 'none';
  const success = document.getElementById('contact-success');
  success.classList.add('show');
}

// ── KEYBOARD: ESC closes modal ─────────────────────────────────
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closePurchaseModal();
});

// ── BACKDROP CLICK ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  const overlay = document.getElementById('purchase-modal');
  if (overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) closePurchaseModal();
    });
  }
  initCookieBanner();
});
