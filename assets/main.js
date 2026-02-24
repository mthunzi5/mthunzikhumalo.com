// Global-Future Website Animations & Interactivity

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  }

  // Close menu when a link is clicked
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        menuToggle?.classList.remove('active');
      });
    });
  }

  // Smooth scroll for nav links
  document.querySelectorAll('nav a, a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.hash && this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(this.hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Animate hero text on load
  const heroTitle = document.querySelector('#hero h1');
  if (heroTitle) {
    heroTitle.classList.add('animate-hero');
  }

  // Animate elements on scroll using Intersection Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all service cards and feature items
  document.querySelectorAll(
    '.service-card, .gateway-feature, .highlight-card, .contact-item'
  ).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Handle window resize for responsive behavior
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      // Close mobile menu on larger screens
      if (window.innerWidth > 768) {
        navLinks?.classList.remove('active');
        menuToggle?.classList.remove('active');
      }
    }, 250);
  });

  // Add active state to nav links on scroll
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', function() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  });

  // Mailto fallback: copy email + template to clipboard and show a small banner
  document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', function () {
      try {
        const href = this.getAttribute('href');
        const mail = href.replace(/^mailto:/, '').split('?')[0];
        const params = href.split('?')[1] || '';
        const search = new URLSearchParams(params);
        const subject = search.get('subject') ? decodeURIComponent(search.get('subject')) : '';
        const body = search.get('body') ? decodeURIComponent(search.get('body')) : '';
        const fallbackText = `To: ${mail}\nSubject: ${subject}\n\n${body}`;

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(fallbackText).then(() => {
            let banner = document.getElementById('mailtoFallbackBanner');
            if (!banner) {
              banner = document.createElement('div');
              banner.id = 'mailtoFallbackBanner';
              banner.style.position = 'fixed';
              banner.style.right = '20px';
              banner.style.bottom = '20px';
              banner.style.background = 'rgba(34,34,34,0.95)';
              banner.style.color = '#fff';
              banner.style.padding = '12px 16px';
              banner.style.borderRadius = '8px';
              banner.style.boxShadow = '0 6px 18px rgba(0,0,0,0.2)';
              banner.style.zIndex = 2000;
              banner.style.fontSize = '14px';
              banner.textContent = 'If your email client did not open, the message contents were copied to your clipboard. Paste into your email app and send to: globalfuturecomm@gmail.com';
              document.body.appendChild(banner);
              setTimeout(() => banner.remove(), 8000);
            }
          }).catch(() => {});
        }
      } catch (e) {
        // silently ignore
      }
    });
  });
});
