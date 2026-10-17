const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const storedTheme = (() => { try { return localStorage.getItem('yasaswini-theme'); } catch (_) { return null; } })();
if (storedTheme === 'dark' || storedTheme === 'light') root.dataset.theme = storedTheme;
function updateThemeButton(){ themeToggle.textContent = root.dataset.theme === 'dark' ? '☼' : '◐'; themeToggle.setAttribute('aria-label', root.dataset.theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'); }
updateThemeButton();
themeToggle.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('yasaswini-theme', root.dataset.theme); } catch (_) {}
  updateThemeButton();
});
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent('Portfolio contact from ' + form.get('name'));
  const body = encodeURIComponent('Name: ' + form.get('name') + '\\nEmail: ' + form.get('email') + '\\n\\n' + form.get('message'));
  window.location.href = 'mailto:yasaswini5096@gmail.com?subject=' + subject + '&body=' + body;
});