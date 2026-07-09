document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const menuToggle = document.getElementById("menuToggle");
  const navShell = document.getElementById("navShell");
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("main section[id], header[id]");
  const warnedPlatformLinks = document.querySelectorAll('[data-platform-warning="true"]');
  const platformNoticeModal = document.getElementById("platformNoticeModal");
  const platformNoticeContinue = document.getElementById("platformNoticeContinue");
  const platformNoticeCancel = document.getElementById("platformNoticeCancel");
  const platformNoticeText = document.getElementById("platformNoticeText");

  let platformTargetUrl = null;

  if (menuToggle && navShell) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navShell.classList.toggle("open");
      menuToggle.classList.toggle("active", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) {
        return;
      }

      const target = document.querySelector(href);
      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start"
      });

      if (navShell && navShell.classList.contains("open")) {
        navShell.classList.remove("open");
      }

      if (menuToggle) {
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  if (prefersReducedMotion) {
    document.querySelectorAll("[data-reveal]").forEach((item) => item.classList.add("reveal-in"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    document.querySelectorAll("[data-reveal]").forEach((item) => observer.observe(item));
  }

  const setActiveNav = () => {
    let activeId = "home";

    sections.forEach((section) => {
      const top = section.getBoundingClientRect().top;
      if (top <= window.innerHeight * 0.35) {
        activeId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("active", href === `#${activeId}`);
    });
  };

  setActiveNav();
  window.addEventListener("scroll", setActiveNav, { passive: true });

  warnedPlatformLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || !platformNoticeModal || !platformNoticeContinue) {
        return;
      }

      event.preventDefault();
      platformTargetUrl = href;
      const appName = link.getAttribute("data-app-name") || "This platform";

      if (platformNoticeText) {
        platformNoticeText.textContent = `${appName} may occasionally be under scheduled maintenance. If you see a temporary server error, please try again shortly. Our team is continuously improving uptime and reliability.`;
      }

      platformNoticeContinue.setAttribute("href", platformTargetUrl);
      platformNoticeModal.classList.remove("hidden");
      platformNoticeCancel?.focus();
    });
  });

  if (platformNoticeCancel && platformNoticeModal) {
    platformNoticeCancel.addEventListener("click", () => {
      platformNoticeModal.classList.add("hidden");
      platformTargetUrl = null;
    });
  }

  if (platformNoticeContinue && platformNoticeModal) {
    platformNoticeContinue.addEventListener("click", () => {
      platformNoticeModal.classList.add("hidden");
    });
  }

  if (platformNoticeModal) {
    platformNoticeModal.addEventListener("click", (event) => {
      if (event.target === platformNoticeModal) {
        platformNoticeModal.classList.add("hidden");
        platformTargetUrl = null;
      }
    });
  }

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && platformNoticeModal && !platformNoticeModal.classList.contains("hidden")) {
      platformNoticeModal.classList.add("hidden");
      platformTargetUrl = null;
    }
  });

  // Mailto fallback to clipboard for users without a configured mail client.
  document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
    link.addEventListener("click", () => {
      try {
        const href = link.getAttribute("href") || "";
        const mail = href.replace(/^mailto:/, "").split("?")[0];
        const params = href.split("?")[1] || "";
        const search = new URLSearchParams(params);
        const subject = search.get("subject") ? decodeURIComponent(search.get("subject")) : "";
        const body = search.get("body") ? decodeURIComponent(search.get("body")) : "";
        const fallbackText = `To: ${mail}\nSubject: ${subject}\n\n${body}`;

        if (navigator.clipboard?.writeText) {
          navigator.clipboard.writeText(fallbackText).then(() => {
            let banner = document.getElementById("mailtoFallbackBanner");
            if (!banner) {
              banner = document.createElement("div");
              banner.id = "mailtoFallbackBanner";
              banner.style.position = "fixed";
              banner.style.right = "20px";
              banner.style.bottom = "20px";
              banner.style.background = "rgba(17,17,17,0.95)";
              banner.style.color = "#fff";
              banner.style.padding = "12px 16px";
              banner.style.borderRadius = "10px";
              banner.style.boxShadow = "0 8px 22px rgba(0,0,0,0.2)";
              banner.style.zIndex = "2100";
              banner.style.fontSize = "14px";
              banner.textContent = "If your email app did not open, details were copied to clipboard.";
              document.body.appendChild(banner);
              setTimeout(() => banner.remove(), 7000);
            }
          }).catch(() => {
            // Ignore clipboard errors to avoid blocking user interaction.
          });
        }
      } catch (_err) {
        // Ignore parser errors for malformed mailto links.
      }
    });
  });
});
