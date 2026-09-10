(function () {
  // ============================================================
  // MOBILE NAV TOGGLE
  // ============================================================
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.classList.toggle('active');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.classList.remove('active');
      });
    });
  }

  // ============================================================
  // REVEAL ON SCROLL
  // ============================================================
  const revealEls = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealEls.forEach(function (el) {
    revealObserver.observe(el);
  });

  // ============================================================
  // SMOOTH SCROLL UNTUK ANCHOR LINK
  // ============================================================
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ============================================================
  // ACTIVE NAV LINK HIGHLIGHT
  // ============================================================
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.main-nav a');
  
  navLinks.forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  // ============================================================
  // YEAR FOOTER
  // ============================================================
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  console.log('✨ E-Portofolio Indana Zulfa');
})();