(() => {
  /* ---------- Mobile menu ---------- */
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.getElementById('mobile-menu');
  const close = menu.querySelector('.menu__close');

  const focusables = () => menu.querySelectorAll('a, button');

  const open = () => {
    menu.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    close.focus();
  };

  const shut = (restoreFocus = true) => {
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    if (restoreFocus) toggle.focus();
  };

  toggle.addEventListener('click', open);
  close.addEventListener('click', () => shut());
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => shut(false)));

  menu.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') return shut();
    if (e.key !== 'Tab') return;
    const items = focusables();
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  window.matchMedia('(min-width: 1024px)').addEventListener('change', (e) => {
    if (e.matches && !menu.hidden) shut(false);
  });
})();
