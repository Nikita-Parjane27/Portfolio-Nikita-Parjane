/* ============================================
   PORTFOLIO — script.js
   ============================================ */

/* ---------- CUSTOM CURSOR ---------- */
const cursor    = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

// Move dot cursor instantly with mouse
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
});

// Animate ring cursor with smooth lag
function animateRing() {
  ringX += (mouseX - ringX - 20) * 0.12;
  ringY += (mouseY - ringY - 20) * 0.12;
  cursorRing.style.transform = `translate(${ringX}px, ${ringY}px)`;
  requestAnimationFrame(animateRing);
}
animateRing();

// Cursor grow effect on interactive elements
const interactiveEls = document.querySelectorAll(
  'a, button, .project-card, .skill-card, .contact-social'
);

interactiveEls.forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursorRing.style.width  = '60px';
    cursorRing.style.height = '60px';
  });
  el.addEventListener('mouseleave', () => {
    cursorRing.style.width  = '40px';
    cursorRing.style.height = '40px';
  });
});

/* ---------- SCROLL REVEAL ---------- */
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach((el) => revealObserver.observe(el));

/* ---------- ACTIVE NAV HIGHLIGHT ---------- */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 200) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--accent)';
    } else {
      link.style.color = '';
    }
  });
});