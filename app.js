// Nasken AI front-end interactions
document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  if (nav && navToggle){
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('show');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('show');
      navToggle.setAttribute('aria-expanded','false');
    }));
  }

  // Year in footer
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Pricing toggle
  const monthly = document.getElementById('billMonthly');
  const yearly = document.getElementById('billYearly');
  const costs = document.querySelectorAll('.price .cost[data-monthly]');
  function setBilling(mode){
    costs.forEach(el => {
      el.textContent = el.dataset[mode];
    });
    const isYear = mode === 'yearly';
    yearly.classList.toggle('active', isYear);
    yearly.setAttribute('aria-pressed', String(isYear));
    monthly.classList.toggle('active', !isYear);
    monthly.setAttribute('aria-pressed', String(!isYear));
  }
  if (monthly && yearly){
    monthly.addEventListener('click', () => setBilling('monthly'));
    yearly.addEventListener('click', () => setBilling('yearly'));
  }

  // Smooth scroll for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
        history.pushState(null,'', '#'+id);
      }
    });
  });
});
