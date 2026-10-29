// Set dynamic year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Theme Toggle (Light / Dark mode)
const themeToggleBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const htmlEl = document.documentElement;

// Load stored theme or default to light
const savedTheme = localStorage.getItem('nandanraj_theme') || 'light';
setTheme(savedTheme);

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlEl.getAttribute('data-theme');
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  });
}

function setTheme(theme) {
  htmlEl.setAttribute('data-theme', theme);
  localStorage.setItem('nandanraj_theme', theme);
  if (themeIcon) {
    if (theme === 'dark') {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    }
  }
}

// ATS Resume Mode Toggle
const atsToggleBtn = document.getElementById('atsToggle');
const atsToggleText = document.getElementById('atsToggleText');

if (atsToggleBtn) {
  atsToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('ats-mode');
    const isATS = document.body.classList.contains('ats-mode');
    if (isATS) {
      atsToggleText.textContent = 'Portfolio View';
      showToast('Switched to ATS Single-Column View');
    } else {
      atsToggleText.textContent = 'ATS View';
      showToast('Switched to Portfolio View');
    }
  });
}

// Copy to clipboard helper with toast notification
function copyText(text, message) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(message || 'Copied to clipboard!');
    }).catch(() => {
      fallbackCopy(text, message);
    });
  } else {
    fallbackCopy(text, message);
  }
}

function fallbackCopy(text, message) {
  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast(message || 'Copied to clipboard!');
  } catch (err) {
    prompt('Copy this text:', text);
  }
}

// Toast notification helper
let toastTimeout;
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}
