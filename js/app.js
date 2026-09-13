document.addEventListener('DOMContentLoaded', () => {
  const legalModal = document.getElementById('legalModal');
  const legalText = document.getElementById('legalText');
  const legalLabel = document.getElementById('legalModalLabel');

  document.querySelectorAll('[data-legal]').forEach(link => {
    link.addEventListener('click', () => {
      const title = link.dataset.legal || 'Information';
      legalLabel.textContent = title;
      legalText.textContent = `${title} content can be connected to your production policy pages. This demonstration keeps the consumer journey self-contained.`;
    });
  });

  document.querySelectorAll('.language-menu .dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelector('.language-menu .active')?.classList.remove('active');
      item.classList.add('active');
      document.querySelector('.language-btn span').textContent = item.textContent.trim().slice(0, 2).toUpperCase();
    });
  });
});
