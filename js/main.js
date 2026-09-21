const themeToggle = document.querySelector('.theme-toggle');

const savedTheme = localStorage.getItem('atelier-theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark-theme');
  themeToggle.setAttribute('aria-pressed', 'true');
  themeToggle.setAttribute('aria-label', 'Switch to light theme');
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  const isDark = document.body.classList.contains('dark-theme');

  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.setAttribute(
    'aria-label',
    isDark ? 'Switch to light theme' : 'Switch to dark theme'
  );

  localStorage.setItem('atelier-theme', isDark ? 'dark' : 'light');
});