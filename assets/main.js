// Global-Future Website Animations & Interactivity

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for nav links
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.hash) {
        e.preventDefault();
        document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Animate hero text
  const heroTitle = document.querySelector('#hero h1');
  if (heroTitle) {
    heroTitle.classList.add('animate-hero');
  }

  // Animate services on scroll
  const serviceEls = document.querySelectorAll('.service');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('service-visible');
      }
    });
  }, { threshold: 0.2 });
  serviceEls.forEach(el => observer.observe(el));
});
