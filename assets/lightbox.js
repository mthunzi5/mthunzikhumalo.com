// Simple lightbox for image previews
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.lightbox-link');
  if (!links.length) return;

  // create modal
  const modal = document.createElement('div');
  modal.id = 'lightboxModal';
  modal.className = 'lightbox-modal';
  modal.innerHTML = `
    <div class="lightbox-inner">
      <button class="lightbox-close" aria-label="Close">×</button>
      <img class="lightbox-img" src="" alt="Preview">
    </div>
  `;
  document.body.appendChild(modal);

  const modalImg = modal.querySelector('.lightbox-img');
  const closeBtn = modal.querySelector('.lightbox-close');

  links.forEach(a => {
    a.addEventListener('click', function(e) {
      e.preventDefault();
      const src = this.getAttribute('href');
      modalImg.src = src;
      modal.classList.add('open');
    });
  });

  function close() {
    modal.classList.remove('open');
    modalImg.src = '';
  }

  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', function(e) {
    if (e.target === modal) close();
  });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') close(); });
});
