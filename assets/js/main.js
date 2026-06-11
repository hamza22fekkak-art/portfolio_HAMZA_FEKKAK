1|/* ═══════════════════════════════════════════
2|   HAMZA FEKKAK — PORTFOLIO JS
3|   Animations · Particles · Interactions
4|   ═══════════════════════════════════════════ */
5|
6|// ── Translations ──
7|const T = {
8|  en: {
9|    nav_about:"About", nav_exp:"Experience", nav_skills:"Skills", nav_projects:"Projects", nav_contact:"Contact",
10|    hero_sub_a:"IT Engineer", hero_sub_b:"Cybersecurity Expert", hero_sub_c:"Cloud Architect", hero_sub_d:"DevSecOps Engineer",
11|    hero_desc:"IT professional specialized in systems administration, cloud infrastructure, and cybersecurity. Proactive and adaptable, I bring technical expertise and a collaborative spirit to drive innovation.",
12|    btn_projects:"View Projects", btn_cv:"Download CV", btn_contact:"Contact Me",
13|    sec_about:"About Me",
14|    about_p:"Passionate IT engineer with 5+ years of experience in systems administration, cloud infrastructure, and cybersecurity. I specialize in building secure, scalable infrastructure and driving digital transformation for enterprise clients.",
15|    sec_exp:"Experience", sec_skills:"Technical Skills", sec_projects:"Featured Projects", sec_certs:"Certifications", sec_github:"GitHub Stats", sec_contact:"Get in Touch",
16|    xp1_date:"Sep 2025 – Present", xp1_role:"IT Engineer", xp1_co:"SOFRECOM · Orange Group",
17|    xp2_date:"Dec 2022 – Sep 2025", xp2_role:"IT Technician", xp2_co:"LATECOERE INTERCONNECTION SYSTEMS",
18|    xp3_date:"Jul 2021 – Dec 2022", xp3_role:"IT Technician", xp3_co:"AMEX ROYAL AIR MAROC",
19|    c1_n:"System Administration & IT Infrastructure", c1_o:"Google",
20|    c2_n:"Ethical Hacker", c2_o:"Cisco",
21|    c3_n:"Fortinet Associate — Cybersecurity", c3_o:"Fortinet",
22|    ct_intro:"Open to new projects, creative ideas, or opportunities to be part of your vision.",
23|    ct_name:"Name", ct_email:"Email", ct_msg:"Message", ct_send:"Send Message",
24|    ct_ph_name:"Your name", ct_ph_email:"your@email.com", ct_ph_msg:"Your message…",
25|    footer:"Designed & built with ♥ by Hamza FEKKAK · 2025",
26|    metric_exp:"Years Exp", metric_projects:"Projects", metric_users:"Users Supported",
    stat_years_val:"5+", stat_projects_val:"50+", stat_users_val:"600+",
27|    proj1_title:"SOC Automation Platform", proj1_desc:"Built a Security Operations Center dashboard with real-time threat detection using Wazuh SIEM, Suricata IDS, and custom Python alerting pipelines.",
28|    proj2_title:"Cloud Migration Framework", proj2_desc:"Designed and executed enterprise cloud migration strategy from on-premise VMware to Azure, reducing infrastructure costs by 40%.",
29|    proj3_title:"AI-Powered Vulnerability Scanner", proj3_desc:"Developed an intelligent vulnerability assessment tool using machine learning to prioritize CVEs based on network context and exploitability scores.",
30|    proj4_title:"Zero Trust Architecture", proj4_desc:"Implemented zero-trust network segmentation with micro-segmentation, identity-based access controls, and continuous verification.",
31|    proj5_title:"DevSecOps Pipeline", proj5_desc:"Built CI/CD pipeline integrating SAST/DAST scanning, container image verification, and compliance-as-code for enterprise applications.",
32|    proj6_title:"Incident Response Automation", proj6_desc:"Created automated incident response playbooks using Ansible and Python, reducing MTTR from 4 hours to 15 minutes.",
33|    sk_systems:"Systems", sk_cloud:"Cloud", sk_security:"Security", sk_network:"Network", sk_auto:"Automation",
34|  },
35|  fr: {
36|    nav_about:"À propos", nav_exp:"Expérience", nav_skills:"Compétences", nav_projects:"Projets", nav_contact:"Contact",
37|    hero_sub_a:"Ingénieur IT", hero_sub_b:"Expert Cybersécurité", hero_sub_c:"Architecte Cloud", hero_sub_d:"Ingénieur DevSecOps",
38|    hero_desc:"Professionnel de l'informatique spécialisé en administration des systèmes, infrastructure cloud et cybersécurité. Proactif et adaptable, j'apporte une expertise technique et un fort esprit collaboratif pour innover.",
39|    btn_projects:"Voir Projets", btn_cv:"Télécharger CV", btn_contact:"Me Contacter",
40|    sec_about:"À propos",
41|    about_p:"Ingénieur IT passionné avec 5+ ans d'expérience en administration systèmes, infrastructure cloud et cybersécurité. Je me spécialise dans la construction d'infrastructures sécurisées et évolutives.",
42|    sec_exp:"Expérience", sec_skills:"Compétences Techniques", sec_projects:"Projets Phares", sec_certs:"Certifications", sec_github:"Statistiques GitHub", sec_contact:"Contactez-Moi",
43|    xp1_date:"Sep 2025 – Présent", xp1_role:"Ingénieur IT", xp1_co:"SOFRECOM · Groupe Orange",
44|    xp2_date:"Déc 2022 – Sep 2025", xp2_role:"Technicien IT", xp2_co:"LATECOERE INTERCONNECTION SYSTEMS",
45|    xp3_date:"Juil 2021 – Déc 2022", xp3_role:"Technicien IT", xp3_co:"AMEX ROYAL AIR MAROC",
46|    c1_n:"Administration Systèmes & Infrastructure IT", c1_o:"Google",
47|    c2_n:"Ethical Hacker", c2_o:"Cisco",
48|    c3_n:"Fortinet Associate — Cybersécurité", c3_o:"Fortinet",
49|    ct_intro:"Ouvert à tout nouveau projet, idée créative ou opportunité de collaboration.",
50|    ct_name:"Nom", ct_email:"Email", ct_msg:"Message", ct_send:"Envoyer",
51|    ct_ph_name:"Votre nom", ct_ph_email:"votre@email.com", ct_ph_msg:"Votre message…",
52|    footer:"Conçu et développé avec ♥ par Hamza FEKKAK · 2025",
53|    metric_exp:"Années Exp", metric_projects:"Projets", metric_users:"Utilisateurs",
    stat_years_val:"5+", stat_projects_val:"50+", stat_users_val:"600+",
54|    proj1_title:"Plateforme SOC Automatisée", proj1_desc:"Création d'un tableau de bord SOC avec détection de menaces en temps réel utilisant Wazuh SIEM, Suricata IDS et pipelines d'alerte Python personnalisés.",
55|    proj2_title:"Framework de Migration Cloud", proj2_desc:"Conception et exécution d'une stratégie de migration cloud d'entreprise de VMware on-premise vers Azure, réduisant les coûts de 40%.",
56|    proj3_title:"Scanner de Vulnérabilités IA", proj3_desc:"Développement d'un outil intelligent d'évaluation des vulnérabilités utilisant le machine learning pour prioriser les CVE.",
57|    proj4_title:"Architecture Zero Trust", proj4_desc:"Implémentation de segmentation réseau zero-trust avec micro-segmentation et contrôles d'accès basés sur l'identité.",
58|    proj5_title:"Pipeline DevSecOps", proj5_desc:"Construction d'un pipeline CI/CD intégrant SAST/DAST, vérification d'images conteneurs et compliance-as-code.",
59|    proj6_title:"Automatisation de la Réponse aux Incidents", proj6_desc:"Création de playbooks automatisés avec Ansible et Python, réduisant le MTTR de 4h à 15 min.",
60|    sk_systems:"Systèmes", sk_cloud:"Cloud", sk_security:"Sécurité", sk_network:"Réseau", sk_auto:"Automatisation",
61|  }
62|};
63|
64|let lang = "en";
65|function applyLang() {
66|  const t = T[lang];
67|  document.querySelectorAll("[data-t]").forEach(el => { const k = el.getAttribute("data-t"); if (t[k]) el.textContent = t[k]; });
68|  document.querySelectorAll("[data-ph]").forEach(el => { const k = el.getAttribute("data-ph"); if (t[k]) el.placeholder = t[k]; });
69|  const btn = document.getElementById("btnLang");
70|  if (btn) btn.textContent = lang === "en" ? "FR" : "EN";
71|}
72|function toggleLang() { lang = lang === "en" ? "fr" : "en"; applyLang(); }
73|
74|// ── Typing effect ──
75|const typingStrings = {
76|  en: ["IT Engineer", "Cybersecurity Expert", "Cloud Architect", "DevSecOps Engineer"],
77|  fr: ["Ingénieur IT", "Expert Cybersécurité", "Architecte Cloud", "Ingénieur DevSecOps"]
78|};
79|let typingIndex = 0, charIndex = 0, isDeleting = false;
80|function typeLoop() {
81|  const strings = typingStrings[lang];
82|  if (!strings) return;
83|  const el = document.getElementById("typing-text");
84|  if (!el) return;
85|
86|  if (!typingLoopStarted) { typingLoopStarted = true; }
87|
88|  const current = strings[typingIndex % strings.length];
89|
90|  if (!isDeleting) {
91|    el.textContent = current.substring(0, charIndex + 1);
92|    charIndex++;
93|    if (charIndex >= current.length) { setTimeout(() => { isDeleting = true; }, 2000); }
94|  } else {
95|    el.textContent = current.substring(0, charIndex - 1);
96|    charIndex--;
97|    if (charIndex <= 0) { isDeleting = false; typingIndex++; }
98|  }
99|
100|  const speed = isDeleting ? 40 : 80;
101|  setTimeout(typeLoop, speed);
102|}
103|let typingLoopStarted = false;
104|
105|// ── Canvas floating particles ──
106|function initParticles() {
107|  const canvas = document.getElementById("hero-canvas");
108|  if (!canvas) return;
109|  const ctx = canvas.getContext("2d");
110|  let w, h;
111|  let particles = [];
112|
113|  function resize() {
114|    w = canvas.width = canvas.parentElement.offsetWidth;
115|    h = canvas.height = canvas.parentElement.offsetHeight;
116|  }
117|  resize();
118|
119|  // Create particles
120|  for (let i = 0; i < 60; i++) {
121|    particles.push({
122|      x: Math.random() * w,
123|      y: Math.random() * h,
124|      vx: (Math.random() - .5) * .4,
125|      vy: (Math.random() - .5) * .4,
126|      r: Math.random() * 2 + .5,
127|      opacity: Math.random() * .5 + .1,
128|    });
129|  }
130|
131|  let mouseX = -1, mouseY = -1;
132|  canvas.parentElement.addEventListener("mousemove", e => {
133|    const rect = canvas.getBoundingClientRect();
134|    mouseX = e.clientX - rect.left;
135|    mouseY = e.clientY - rect.top;
136|  });
137|  canvas.parentElement.addEventListener("mouseleave", () => { mouseX = -1; mouseY = -1; });
138|
139|  function draw() {
140|    ctx.clearRect(0, 0, w, h);
141|    const w2 = canvas.width;
142|    const h2 = canvas.height;
143|    // Update & draw particles
144|    for (const p of particles) {
145|      p.x += p.vx; p.y += p.vy;
146|      if (p.x < 0) p.x = w2;
147|      if (p.x > w2) p.x = 0;
148|      if (p.y < 0) p.y = h2;
149|      if (p.y > h2) p.y = 0;
150|
151|      ctx.beginPath();
152|      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
153|      ctx.fillStyle = `rgba(59,130,246,${p.opacity})`;
154|      ctx.fill();
155|
156|      // Connect nearby particles
157|      for (const q of particles) {
158|        const dx = p.x - q.x, dy = p.y - q.y;
159|        const dist = Math.sqrt(dx * dx + dy * dy);
160|        if (dist < 120) {
161|          ctx.beginPath();
162|          ctx.moveTo(p.x, p.y);
163|          ctx.lineTo(q.x, q.y);
164|          ctx.strokeStyle = `rgba(59,130,246,${.06 * (1 - dist / 120)})`;
165|          ctx.lineWidth = .5;
166|          ctx.stroke();
167|        }
168|      }
169|
170|      // Mouse interaction
171|      if (mouseX >= 0) {
172|        const dx = p.x - mouseX, dy = p.y - mouseY;
173|        const dist = Math.sqrt(dx * dx + dy * dy);
174|        if (dist < 150) {
175|          ctx.beginPath();
176|          ctx.moveTo(p.x, p.y);
177|          ctx.lineTo(mouseX, mouseY);
178|          ctx.strokeStyle = `rgba(168,85,247,${.15 * (1 - dist / 150)})`;
179|          ctx.lineWidth = .5;
180|          ctx.stroke();
181|        }
182|      }
183|    }
184|    requestAnimationFrame(draw);
185|  }
186|  draw();
187|
188|  window.addEventListener("resize", () => { resize(); w2 = canvas.width; h2 = canvas.height; });
189|}
190|
191|// ── Scroll reveal ──
192|function initReveal() {
193|  const observer = new IntersectionObserver((entries) => {
194|    entries.forEach(entry => {
195|      if (entry.isIntersecting) {
196|        entry.target.classList.add("visible");
197|      }
198|    });
199|  }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
200|
201|  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
202|}
203|
204|// ── Navbar scroll ──
205|function initNavbar() {
206|  window.addEventListener("scroll", () => {
207|    const nav = document.getElementById("navbar");
208|    if (nav) nav.classList.toggle("scrolled", window.scrollY > 50);
209|
210|    // Active link
211|    const y = window.scrollY + 100;
212|    document.querySelectorAll("section[id]").forEach(sec => {
213|      const a = document.querySelector(`.nav-links a[href="#${sec.id}"]`);
214|      if (!a) return;
215|      if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight) {
216|        document.querySelectorAll(".nav-links a").forEach(l => l.classList.remove("active"));
217|        a.classList.add("active");
218|      }
219|    });
220|  });
221|}
222|
223|// ── Mouse follow glow (hero) ──
224|function initMouseGlow() {
225|  const hero = document.querySelector(".hero");
226|  if (!hero) return;
227|  const glow = document.createElement("div");
228|  glow.style.cssText = `
229|    position:fixed; width:400px; height:400px; border-radius:50%;
230|    background:radial-gradient(circle, rgba(59,130,246,.07) 0%, transparent 70%);
231|    pointer-events:none; z-index:0; transition:opacity .3s;
232|    transform:translate(-50%,-50%); opacity:0;
233|  `;
234|  document.body.appendChild(glow);
235|
236|  hero.addEventListener("mousemove", e => {
237|    glow.style.left = e.clientX + "px";
238|    glow.style.top = e.clientY + "px";
239|    glow.style.opacity = "1";
240|  });
241|  hero.addEventListener("mouseleave", () => { glow.style.opacity = "0"; });
242|}
243|
244|// ── Form handling ──
245|function initForm() {
246|  const form = document.getElementById("contactForm");
247|  if (!form) return;
248|  form.addEventListener("submit", function(e) {
249|    e.preventDefault();
250|    const b = this.querySelector("button[type=submit]");
251|    const old = b.textContent;
252|    b.textContent = lang === "en" ? "✓ Sent!" : "✓ Envoyé !";
253|    b.style.background = "#10b981";
254|    b.style.color = "#fff";
255|    setTimeout(() => { b.textContent = old; b.style.background = ""; b.style.color = ""; this.reset(); }, 2500);
256|  });
257|}
258|
259|// ── Tech stack badges for XP ──
260|const xpBadges = {
261|  1: ["Security Reviews", "Project Management", "MDT/WDS", "SCCM", "PowerShell", "OCS Inventory", "ITIL"],
262|  2: ["Data Center", "CrowdStrike", "Sophos", "VMware", "Azure", "PowerShell", "Webex", "Backup", "99% Uptime"],
263|  3: ["SMAX", "Hardware", "ManageEngine", "User Support", "Inventory"]
264|};
265|function renderXPBadges() {
266|  document.querySelectorAll("[data-xp-badges]").forEach(el => {
267|    const key = parseInt(el.getAttribute("data-xp-badges"));
268|    const badges = xpBadges[key] || [];
269|    el.innerHTML = badges.map(b => `<span class="xp-badge">${b}</span>`).join("");
270|  });
271|}
272|
273|// ── Init ──
274|document.addEventListener("DOMContentLoaded", () => {
275|  applyLang();
276|  typeLoop();
277|  initParticles();
278|  initReveal();
279|  initNavbar();
280|  initMouseGlow();
281|  initForm();
282|  renderXPBadges();
283|
284|  // Ensure particles canvas animates even when tab is backgrounded
285|  setTimeout(initReveal, 500);
286|});
287|