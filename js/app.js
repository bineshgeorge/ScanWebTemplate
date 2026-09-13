document.addEventListener('DOMContentLoaded', () => {
  // Info modal: title from data-info, body is a placeholder until pages are connected.
  const label = document.getElementById('infoModalLabel');
  const text = document.getElementById('infoText');
  document.querySelectorAll('[data-info]').forEach(el => {
    el.addEventListener('click', () => {
      label.textContent = el.dataset.info;
      text.textContent = `${el.dataset.info}: connect to the production page.`;
    });
  });

  // Language selector (visual only; production should reload with locale).
  document.querySelectorAll('.language-menu .dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelector('.language-menu .active')?.classList.remove('active');
      item.classList.add('active');
      const btn = document.querySelector('.language-btn');
      btn.querySelector('span').textContent = item.lang.toUpperCase();
      btn.setAttribute('aria-label', `Language: ${item.textContent.trim()}`);
    });
  });

  // Modules: all collapsed on mobile/tablet, first open on desktop (tab rail needs one panel).
  if (window.innerWidth < 1200) {
    document.querySelectorAll('.module-panel.show').forEach(pnl => {
      pnl.classList.remove('show');
      const btn = document.querySelector(`[data-bs-target="#${pnl.id}"]`);
      btn?.classList.add('collapsed');
      btn?.setAttribute('aria-expanded', 'false');
    });
  }

  // Gallery thumbnails.
  const main = document.getElementById('galleryMain');
  document.querySelectorAll('.thumb').forEach(t => {
    t.addEventListener('click', () => {
      const prev = document.querySelector('.thumb.active');
      prev?.classList.remove('active');
      prev?.setAttribute('aria-pressed', 'false');
      t.classList.add('active');
      t.setAttribute('aria-pressed', 'true');
      if (main) main.src = t.dataset.src;
    });
  });
});
