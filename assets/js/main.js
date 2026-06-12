/* ═══════════════════════════════════════════════════
   HAMZA FEKKAK — PORTFOLIO JS
   Network Animation · Typing · Scroll · Interactions
   ═══════════════════════════════════════════════════ */

// ── Network Particle Animation ──
(function() {
  const canvas = document.getElementById('network-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, particles = [];

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = canvas.parentElement.offsetWidth * dpr;
    h = canvas.height = canvas.parentElement.offsetHeight * dpr;
    ctx.scale(dpr, dpr);
    w /= dpr; h /= dpr;
  }
  resize();

  // Create nodes
  const count = Math.floor((w * h) / 18000);
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - .5) * .3,
      vy: (Math.random() - .5) * .3,
      r: Math.random() * 1.8 + .8,
    });
  }

  let mouseX = -1000, mouseY = -1000;
  canvas.parentElement.addEventListener('mousemove', e => {
    const r = canvas.getBoundingClientRect();
    mouseX = e.clientX - r.left;
    mouseY = e.clientY - r.top;
  });
  canvas.parentElement.addEventListener('mouseleave', () => { mouseX = -1000; mouseY = -1000; });

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      // Draw node
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(59,130,246,.5)';
      ctx.fill();

      // Connect to nearby nodes
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x, dy = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(59,130,246,${.08 * (1 - dist / 140)})`;
          ctx.lineWidth = .5;
          ctx.stroke();
        }
      }

      // Mouse interaction
      const dx = p.x - mouseX, dy = p.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 180) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouseX, mouseY);
        ctx.strokeStyle = `rgba(168,85,247,${.15 * (1 - dist / 180)})`;
        ctx.lineWidth = .6;
        ctx.stroke();
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
  window.addEventListener('resize', resize);
})();

// ── Typing Effect ──
const typingStrings = [
  "INGÉNIEUR SYSTÈMES, RÉSEAUX & CYBERSÉCURITÉ",
  "System & Network Administrator",
  "Cybersecurity Engineer",
  "IT Infrastructure Specialist"
];
let ti = 0, ci = 0, del = false;
function typeLoop() {
  const el = document.getElementById('typing-text');
  if (!el) return;
  const s = typingStrings[ti % typingStrings.length];
  if (!del) {
    el.textContent = s.substring(0, ci + 1);
    ci++;
    if (ci >= s.length) setTimeout(() => { del = true; }, 2500);
  } else {
    el.textContent = s.substring(0, ci - 1);
    ci--;
    if (ci <= 0) { del = false; ti++; }
  }
  setTimeout(typeLoop, del ? 35 : 70);
}
typeLoop();

// ── Scroll Reveal ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.06, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Navbar ──
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 50);
  const y = window.scrollY + 100;
  document.querySelectorAll('section[id]').forEach(sec => {
    const a = document.querySelector(`.nav-links a[href="#${sec.id}"]`);
    if (!a) return;
    if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight) {
      document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
      a.classList.add('active');
    }
  });
});

// ── Mouse Follow Glow ──
(function() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const glow = document.createElement('div');
  glow.style.cssText = 'position:fixed;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(59,130,246,.06) 0%,transparent 70%);pointer-events:none;z-index:1;transform:translate(-50%,-50%);opacity:0;transition:opacity .4s';
  document.body.appendChild(glow);
  hero.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
    glow.style.opacity = '1';
  });
  hero.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });
})();

// ── Form ──
function handleSubmit(e) {
  e.preventDefault();
  const b = e.target.querySelector('button[type=submit]');
  const o = b.textContent;
  b.textContent = '✓ Sent!';
  b.style.background = '#10b981';
  setTimeout(() => { b.textContent = o; b.style.background = ''; e.target.reset(); }, 2500);
}

// ── Lang Toggle ──
let lang = 'en';
function toggleLang() {
  lang = lang === 'en' ? 'fr' : 'en';
  const btn = document.getElementById('btnLang');
  if (btn) btn.textContent = lang === 'en' ? 'FR' : 'EN';
}
