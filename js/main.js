/* PixlForge — main.js
 * Steuert: Seitennavigation (Single-Page-Architektur), Mobile-Menü,
 * Kauf-Modal, Kontaktformular und Cookie-Banner.
 */

// ── SEITEN-NAVIGATION ─────────────────────────────────────────
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + id);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    if (a.dataset.page === id) {
      a.setAttribute('aria-current', 'page');
    } else {
      a.removeAttribute('aria-current');
    }
  });

  // Mobile-Menü schließen
  const navLinks = document.getElementById('nav-links');
  const toggle   = document.querySelector('.nav-toggle');
  if (navLinks && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '☰';
    }
  }
}

// ── MOBILE-MENÜ ──────────────────────────────────────────────
function toggleNav(btn) {
  const navLinks = document.getElementById('nav-links');
  const open = navLinks.classList.toggle('open');
  btn.setAttribute('aria-expanded', String(open));
  btn.textContent = open ? '✕' : '☰';
  btn.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
}

// ── COOKIE-BANNER ─────────────────────────────────────────────
function setCookieConsent(level) {
  try {
    localStorage.setItem('pf_cookie_consent', level);
  } catch (e) {}
  document.getElementById('cookie-banner').classList.remove('visible');
}

function initCookieBanner() {
  let consent = null;
  try {
    consent = localStorage.getItem('pf_cookie_consent');
  } catch (e) {}
  if (!consent) {
    document.getElementById('cookie-banner').classList.add('visible');
  }
}

// ── OPT-OUT WEBANALYSE ───────────────────────────────────────
function revokeAnalyticsConsent() {
  try {
    localStorage.removeItem('pf_cookie_consent');
  } catch (e) {}
  const status = document.getElementById('optout-status');
  if (status) {
    status.textContent = '✓ Ihre Einwilligung in die Webanalyse wurde widerrufen. Beim nächsten Seitenaufruf erscheint das Cookie-Banner erneut.';
  }
}

// ── KAUF-MODAL ────────────────────────────────────────────────
let selectedPlan  = '';
let selectedPrice = 0;

function handlePurchase(plan, price) {
  selectedPlan  = plan;
  selectedPrice = price;
  document.getElementById('modal-desc').textContent =
    'Sie erwerben die PixlForge ' + plan + '-Lizenz zum Einmal-Preis von € ' + price + ',–.';
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
    alert('Bitte füllen Sie sämtliche Felder vollständig aus.');
    return;
  }
  closePurchaseModal();
  const success = document.getElementById('purchase-success');
  success.classList.add('show');
  success.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ── KONTAKTFORMULAR ──────────────────────────────────────────
function submitContactForm() {
  const name    = document.getElementById('contact-name').value.trim();
  const email   = document.getElementById('contact-email').value.trim();
  const subject = document.getElementById('contact-subject').value;
  const message = document.getElementById('contact-message').value.trim();
  const privacy = document.getElementById('contact-privacy').checked;

  if (!name || !email || !subject || !message) {
    alert('Bitte füllen Sie sämtliche Pflichtfelder aus, bevor Sie das Formular absenden.');
    return;
  }
  if (!privacy) {
    alert('Bitte bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben und der Verarbeitung Ihrer Daten zustimmen.');
    return;
  }
  document.getElementById('contact-form-fields').style.display = 'none';
  const success = document.getElementById('contact-success');
  success.classList.add('show');
}

// ── TASTATUR: ESC schließt das Modal ──────────────────────────
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closePurchaseModal();
});

// ── KLICK AUF DEN HINTERGRUND SCHLIESST DAS MODAL ─────────────
document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.getElementById('purchase-modal');
  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closePurchaseModal();
    });
  }
  initCookieBanner();
});
