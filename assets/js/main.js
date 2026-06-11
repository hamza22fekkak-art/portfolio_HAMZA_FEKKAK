/* ═══════════════════════════════════════════
   HAMZA FEKKAK — PORTFOLIO JS
   Animations · Particles · Interactions
   ═══════════════════════════════════════════ */

// ── Translations ──
const T = {
  en: {
    nav_about:"About", nav_exp:"Experience", nav_skills:"Skills", nav_projects:"Projects", nav_contact:"Contact",
    hero_sub_a:"IT Engineer", hero_sub_b:"Cybersecurity Expert", hero_sub_c:"Cloud Architect", hero_sub_d:"DevSecOps Engineer",
    hero_desc:"IT professional specialized in systems administration, cloud infrastructure, and cybersecurity. Proactive and adaptable, I bring technical expertise and a collaborative spirit to drive innovation.",
    btn_projects:"View Projects", btn_cv:"Download CV", btn_contact:"Contact Me",
    sec_about:"About Me",
    about_p:"Passionate IT engineer with 5+ years of experience in systems administration, cloud infrastructure, and cybersecurity. I specialize in building secure, scalable infrastructure and driving digital transformation for enterprise clients.",
    sec_exp:"Experience", sec_skills:"Technical Skills", sec_projects:"Featured Projects", sec_certs:"Certifications", sec_github:"GitHub Stats", sec_contact:"Get in Touch",
    xp1_date:"Sep 2025 – Present", xp1_role:"IT Engineer", xp1_co:"SOFRECOM · Orange Group",
    xp2_date:"Dec 2022 – Sep 2025", xp2_role:"IT Technician", xp2_co:"LATECOERE INTERCONNECTION SYSTEMS",
    xp3_date:"Jul 2021 – Dec 2022", xp3_role:"IT Technician", xp3_co:"AMEX ROYAL AIR MAROC",
    c1_n:"System Administration & IT Infrastructure", c1_o:"Google",
    c2_n:"Ethical Hacker", c2_o:"Cisco",
    c3_n:"Fortinet Associate — Cybersecurity", c3_o:"Fortinet",
    ct_intro:"Open to new projects, creative ideas, or opportunities to be part of your vision.",
    ct_name:"Name", ct_email:"Email", ct_msg:"Message", ct_send:"Send Message",
    ct_ph_name:"Your name", ct_ph_email:"your@email.com", ct_ph_msg:"Your message…",
    footer:"Designed & built with ♥ by Hamza FEKKAK · 2025",
    metric_exp:"Years Exp", metric_projects:"Projects", metric_users:"Users Supported",
    proj1_title:"SOC Automation Platform", proj1_desc:"Built a Security Operations Center dashboard with real-time threat detection using Wazuh SIEM, Suricata IDS, and custom Python alerting pipelines.",
    proj2_title:"Cloud Migration Framework", proj2_desc:"Designed and executed enterprise cloud migration strategy from on-premise VMware to Azure, reducing infrastructure costs by 40%.",
    proj3_title:"AI-Powered Vulnerability Scanner", proj3_desc:"Developed an intelligent vulnerability assessment tool using machine learning to prioritize CVEs based on network context and exploitability scores.",
    proj4_title:"Zero Trust Architecture", proj4_desc:"Implemented zero-trust network segmentation with micro-segmentation, identity-based access controls, and continuous verification.",
    proj5_title:"DevSecOps Pipeline", proj5_desc:"Built CI/CD pipeline integrating SAST/DAST scanning, container image verification, and compliance-as-code for enterprise applications.",
    proj6_title:"Incident Response Automation", proj6_desc:"Created automated incident response playbooks using Ansible and Python, reducing MTTR from 4 hours to 15 minutes.",
    sk_systems:"Systems", sk_cloud:"Cloud", sk_security:"Security", sk_network:"Network", sk_auto:"Automation",
  },
  fr: {
    nav_about:"À propos", nav_exp:"Expérience", nav_skills:"Compétences", nav_projects:"Projets", nav_contact:"Contact",
    hero_sub_a:"Ingénieur IT", hero_sub_b:"Expert Cybersécurité", hero_sub_c:"Architecte Cloud", hero_sub_d:"Ingénieur DevSecOps",
    hero_desc:"Professionnel de l'informatique spécialisé en administration des systèmes, infrastructure cloud et cybersécurité. Proactif et adaptable, j'apporte une expertise technique et un fort esprit collaboratif pour innover.",
    btn_projects:"Voir Projets", btn_cv:"Télécharger CV", btn_contact:"Me Contacter",
    sec_about:"À propos",
    about_p:"Ingénieur IT passionné avec 5+ ans d'expérience en administration systèmes, infrastructure cloud et cybersécurité. Je me spécialise dans la construction d'infrastructures sécurisées et évolutives.",
    sec_exp:"Expérience", sec_skills:"Compétences Techniques", sec_projects:"Projets Phares", sec_certs:"Certifications", sec_github:"Statistiques GitHub", sec_contact:"Contactez-Moi",
    xp1_date:"Sep 2025 – Présent", xp1_role:"Ingénieur IT", xp1_co:"SOFRECOM · Groupe Orange",
    xp2_date:"Déc 2022 – Sep 2025", xp2_role:"Technicien IT", xp2_co:"LATECOERE INTERCONNECTION SYSTEMS",
    xp3_date:"Juil 2021 – Déc 2022", xp3_role:"Technicien IT", xp3_co:"AMEX ROYAL AIR MAROC",
    c1_n:"Administration Systèmes & Infrastructure IT", c1_o:"Google",
    c2_n:"Ethical Hacker", c2_o:"Cisco",
    c3_n:"Fortinet Associate — Cybersécurité", c3_o:"Fortinet",
    ct_intro:"Ouvert à tout nouveau projet, idée créative ou opportunité de collaboration.",
    ct_name:"Nom", ct_email:"Email", ct_msg:"Message", ct_send:"Envoyer",
    ct_ph_name:"Votre nom", ct_ph_email:"votre@email.com", ct_ph_msg:"Votre message…",
    footer:"Conçu et développé avec ♥ par Hamza FEKKAK · 2025",
    metric_exp:"Années Exp", metric_projects:"Projets", metric_users:"Utilisateurs",
    proj1_title:"Plateforme SOC Automatisée", proj1_desc:"Création d'un tableau de bord SOC avec détection de menaces en temps réel utilisant Wazuh SIEM, Suricata IDS et pipelines d'alerte Python personnalisés.",
    proj2_title:"Framework de Migration Cloud", proj2_desc:"Conception et exécution d'une stratégie de migration cloud d'entreprise de VMware on-premise vers Azure, réduisant les coûts de 40%.",
    proj3_title:"Scanner de Vulnérabilités IA", proj3_desc:"Développement d'un outil intelligent d'évaluation des vulnérabilités utilisant le machine learning pour prioriser les CVE.",
    proj4_title:"Architecture Zero Trust", proj4_desc:"Implémentation de segmentation réseau zero-trust avec micro-segmentation et contrôles d'accès basés sur l'identité.",
    proj5_title:"Pipeline DevSecOps", proj5_desc:"Construction d'un pipeline CI/CD intégrant SAST/DAST, vérification d'images conteneurs et compliance-as-code.",
    proj6_title:"Automatisation de la Réponse aux Incidents", proj6_desc:"Création de playbooks automatisés avec Ansible et Python, réduisant le MTTR de 4h à 15 min.",
    sk_systems:"Systèmes", sk_cloud:"Cloud", sk_security:"Sécurité", sk_network:"Réseau", sk_auto:"Automatisation",
  }
};

let lang = "en";
function applyLang() {
  const t = T[lang];
  document.querySelectorAll("[data-t]").forEach(el => { const k = el.getAttribute("data-t"); if (t[k]) el.textContent = t[k]; });
  document.querySelectorAll("[data-ph]").forEach(el => { const k = el.getAttribute("data-ph"); if (t[k]) el.placeholder = t[k]; });
  const btn = document.getElementById("btnLang");
  if (btn) btn.textContent = lang === "en" ? "FR" : "EN";
}
function toggleLang() { lang = lang === "en" ? "fr" : "en"; applyLang(); }

// ── Typing effect ──
const typingStrings = {
  en: ["IT Engineer", "Cybersecurity Expert", "Cloud Architect", "DevSecOps Engineer"],
  fr: ["Ingénieur IT", "Expert Cybersécurité", "Architecte Cloud", "Ingénieur DevSecOps"]
};
let typingIndex = 0, charIndex = 0, isDeleting = false;
function typeLoop() {
  const strings = typingStrings[lang];
  if (!strings) return;
  const el = document.getElementById("typing-text");
  if (!el) return;

  if (!typingLoopStarted) { typingLoopStarted = true; }

  const current = strings[typingIndex % strings.length];

  if (!isDeleting) {
    el.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex >= current.length) { setTimeout(() => { isDeleting = true; }, 2000); }
  } else {
    el.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex <= 0) { isDeleting = false; typingIndex++; }
  }

  const speed = isDeleting ? 40 : 80;
  setTimeout(typeLoop, speed);
}
let typingLoopStarted = false;

// ── Canvas floating particles ──
function initParticles() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w, h;
  let particles = [];

  function resize() {
    w = canvas.width = canvas.parentElement.offsetWidth;
    h = canvas.height = canvas.parentElement.offsetHeight;
  }
  resize();

  // Create particles
  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - .5) * .4,
      vy: (Math.random() - .5) * .4,
      r: Math.random() * 2 + .5,
      opacity: Math.random() * .5 + .1,
    });
  }

  let mouseX = -1, mouseY = -1;
  canvas.parentElement.addEventListener("mousemove", e => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });
  canvas.parentElement.addEventListener("mouseleave", () => { mouseX = -1; mouseY = -1; });

  function draw() {
    ctx.clearRect(0, 0, w, h);
    const w2 = canvas.width;
    const h2 = canvas.height;
    // Update & draw particles
    for (const p of particles) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = w2;
      if (p.x > w2) p.x = 0;
      if (p.y < 0) p.y = h2;
      if (p.y > h2) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(59,130,246,${p.opacity})`;
      ctx.fill();

      // Connect nearby particles
      for (const q of particles) {
        const dx = p.x - q.x, dy = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(59,130,246,${.06 * (1 - dist / 120)})`;
          ctx.lineWidth = .5;
          ctx.stroke();
        }
      }

      // Mouse interaction
      if (mouseX >= 0) {
        const dx = p.x - mouseX, dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(168,85,247,${.15 * (1 - dist / 150)})`;
          ctx.lineWidth = .5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();

  window.addEventListener("resize", () => { resize(); w2 = canvas.width; h2 = canvas.height; });
}

// ── Scroll reveal ──
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

// ── Navbar scroll ──
function initNavbar() {
  window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 50);

    // Active link
    const y = window.scrollY + 100;
    document.querySelectorAll("section[id]").forEach(sec => {
      const a = document.querySelector(`.nav-links a[href="#${sec.id}"]`);
      if (!a) return;
      if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight) {
        document.querySelectorAll(".nav-links a").forEach(l => l.classList.remove("active"));
        a.classList.add("active");
      }
    });
  });
}

// ── Mouse follow glow (hero) ──
function initMouseGlow() {
  const hero = document.querySelector(".hero");
  if (!hero) return;
  const glow = document.createElement("div");
  glow.style.cssText = `
    position:fixed; width:400px; height:400px; border-radius:50%;
    background:radial-gradient(circle, rgba(59,130,246,.07) 0%, transparent 70%);
    pointer-events:none; z-index:0; transition:opacity .3s;
    transform:translate(-50%,-50%); opacity:0;
  `;
  document.body.appendChild(glow);

  hero.addEventListener("mousemove", e => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
    glow.style.opacity = "1";
  });
  hero.addEventListener("mouseleave", () => { glow.style.opacity = "0"; });
}

// ── Form handling ──
function initForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const b = this.querySelector("button[type=submit]");
    const old = b.textContent;
    b.textContent = lang === "en" ? "✓ Sent!" : "✓ Envoyé !";
    b.style.background = "#10b981";
    b.style.color = "#fff";
    setTimeout(() => { b.textContent = old; b.style.background = ""; b.style.color = ""; this.reset(); }, 2500);
  });
}

// ── Tech stack badges for XP ──
const xpBadges = {
  1: ["Security Reviews", "Project Management", "MDT/WDS", "SCCM", "PowerShell", "OCS Inventory", "ITIL"],
  2: ["Data Center", "CrowdStrike", "Sophos", "VMware", "Azure", "PowerShell", "Webex", "Backup", "99% Uptime"],
  3: ["SMAX", "Hardware", "ManageEngine", "User Support", "Inventory"]
};
function renderXPBadges() {
  document.querySelectorAll("[data-xp-badges]").forEach(el => {
    const key = parseInt(el.getAttribute("data-xp-badges"));
    const badges = xpBadges[key] || [];
    el.innerHTML = badges.map(b => `<span class="xp-badge">${b}</span>`).join("");
  });
}

// ── Init ──
document.addEventListener("DOMContentLoaded", () => {
  applyLang();
  typeLoop();
  initParticles();
  initReveal();
  initNavbar();
  initMouseGlow();
  initForm();
  renderXPBadges();

  // Ensure particles canvas animates even when tab is backgrounded
  setTimeout(initReveal, 500);
});
