// ============================================
// HAMZA FEKKAK — PORTFOLIO JS
// Bilingual FR/EN
// ============================================

const translations = {
  en: {
    nav_about: "About",
    nav_experience: "Experience",
    nav_skills: "Skills",
    nav_education: "Education",
    nav_contact: "Contact",
    hero_badge: "Available for opportunities",
    hero_role: "IT Engineer & Cybersecurity",
    hero_desc: "IT professional specialized in systems administration, cloud infrastructure, and cybersecurity. Proactive and adaptable, I bring technical expertise and a strong collaborative spirit to drive innovation.",
    stat_years: "Years Exp.",
    stat_projects: "Projects Done",
    stat_users: "Users Supported",
    btn_contact: "Contact Me",
    btn_cv: "Download CV",
    exp_title: "Professional Experience",
    exp_subtitle: "My career journey in IT",
    exp1_title: "IT Engineer",
    exp1_company: "SOFRECOM, Orange Group",
    exp1_location: "Casablanca Nearshore, Casablanca",
    exp1_date: "Sep 2025 – Present",
    exp1_t1: "Conduct regular security reviews of infrastructure systems",
    exp1_t2: "Manage internal IT projects, coordinating between technical teams",
    exp1_t3: "Administer MDT, WDS, SCCM and PDQ Deploy deployment solutions",
    exp1_t4: "Write and maintain technical documentation and procedures",
    exp1_t5: "Monitor security compliance and track exemptions",
    exp1_t6: "Train users on IT best practices and security awareness",
    exp1_t7: "Supervise IT asset management via OCS Inventory",
    exp1_t8: "Level 2 & 3 technical support for complex incidents",
    exp2_title: "IT Technician",
    exp2_company: "LATECOERE INTERCONNECTION SYSTEMS",
    exp2_location: "Had Soualem, Casablanca",
    exp2_date: "Dec 2022 – Sep 2025",
    exp2_t1: "Data Center management — AD DS, DNS, DHCP, access rights (+98% security compliance)",
    exp2_t2: "Deployment, configuration via SCCM",
    exp2_t3: "EDR CrowdStrike & MDM Sophos Mobile management",
    exp2_t4: "VMware vSphere & Azure server administration",
    exp2_t5: "PowerShell automation — 30% reduction in manual repetitive tasks",
    exp2_t6: "Cisco Webex VoIP telephony management",
    exp2_t7: "Backup management & 99%+ uptime guarantee",
    exp2_t8: "Server room maintenance — 20% energy reduction",
    exp2_t9: "Technical documentation for 600+ users",
    exp2_t10: "92% first-contact ticket resolution rate",
    exp3_title: "IT Technician",
    exp3_company: "AMEX ROYAL AIR MAROC",
    exp3_location: "Casablanca",
    exp3_date: "Jul 2021 – Dec 2022",
    exp3_t1: "Incident management via Micro Focus SMAX",
    exp3_t2: "Hardware installation, configuration and maintenance",
    exp3_t3: "User session and access management",
    exp3_t4: "Software deployment via ManageEngine",
    exp3_t5: "IT stock management and resource optimization",
    exp3_t6: "Multi-channel user support (phone, email, remote)",
    skills_title: "Technical Skills",
    skills_subtitle: "Technologies I work with daily",
    cat_infra: "Infrastructure & Systems",
    cat_cloud: "Cloud & Virtualization",
    cat_security: "Security & Monitoring",
    cat_network: "Network & VoIP",
    cat_automation: "Automation & DevOps",
    cat_standards: "Standards & Methods",
    edu_title: "Education",
    edu_subtitle: "Academic background",
    edu1_title: "Master's in Systems, Networks & Cybersecurity Engineering",
    edu1_school: "ENSI, Casablanca",
    edu1_year: "2023 – 2025",
    edu2_title: "Bachelor's in Systems Administration, Databases & Cloud Computing",
    edu2_school: "SUPEMIR, Casablanca",
    edu2_year: "2023 – 2024",
    edu3_title: "Bachelor's in Project Management",
    edu3_school: "WESFORD, France",
    edu3_year: "2018 – 2021",
    edu4_title: "Technician Diploma in IT Maintenance & Network Support",
    edu4_school: "ISTICG, Berrechid",
    edu4_year: "2018 – 2020",
    edu5_title: "Baccalaureate in Physical Sciences",
    edu5_school: "Lycée Eljadida, Berrechid",
    edu5_year: "2016 – 2017",
    certs_title: "Certifications",
    certs_subtitle: "Professional credentials",
    cert1_title: "System Administration & IT Infrastructure Services",
    cert1_org: "Google Professional Certificate",
    cert2_title: "Ethical Hacker",
    cert2_org: "Cisco Networking Academy",
    cert3_title: "Fortinet Certified Associate Cybersecurity",
    cert3_org: "Fortinet",
    contact_title: "Get In Touch",
    contact_subtitle: "Feel free to reach out for collaborations or opportunities",
    contact_intro: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
    contact_name: "Name",
    contact_email: "Email",
    contact_message: "Message",
    contact_send: "Send Message",
    contact_placeholder_name: "Your name",
    contact_placeholder_email: "your@email.com",
    contact_placeholder_message: "Your message...",
    footer_text: "Designed & built with",
    footer_by: "by Hamza FEKKAK",
  },
  fr: {
    nav_about: "À propos",
    nav_experience: "Expérience",
    nav_skills: "Compétences",
    nav_education: "Formation",
    nav_contact: "Contact",
    hero_badge: "Disponible pour opportunités",
    hero_role: "Ingénieur IT & Cybersécurité",
    hero_desc: "Professionnel de l'informatique spécialisé en administration des systèmes, infrastructure cloud et cybersécurité. Proactif et adaptable, j'apporte une expertise technique et un fort esprit collaboratif pour innover.",
    stat_years: "Années Exp.",
    stat_projects: "Projets Réalisés",
    stat_users: "Utilisateurs",
    btn_contact: "Me Contacter",
    btn_cv: "Télécharger CV",
    exp_title: "Expériences Professionnelles",
    exp_subtitle: "Mon parcours professionnel en IT",
    exp1_title: "Ingénieur IT",
    exp1_company: "SOFRECOM, Groupe Orange",
    exp1_location: "Casa Nearshore, Casablanca",
    exp1_date: "Sep 2025 – Présent",
    exp1_t1: "Réaliser des revues régulières de sécurité des systèmes d'infrastructure",
    exp1_t2: "Piloter les projets IT internes, coordination entre équipes techniques",
    exp1_t3: "Gérer les solutions de déploiement MDT, WDS, SCCM et PDQ Deploy",
    exp1_t4: "Rédiger et maintenir la documentation technique et les procédures",
    exp1_t5: "Contrôler l'application des règles de sécurité et suivi des dérogations",
    exp1_t6: "Former et sensibiliser les utilisateurs aux bonnes pratiques IT",
    exp1_t7: "Superviser la gestion des équipements via OCS Inventory",
    exp1_t8: "Support technique niveaux 2 et 3 pour les incidents complexes",
    exp2_title: "Technicien IT",
    exp2_company: "LATECOERE INTERCONNECTION SYSTEMS",
    exp2_location: "Had Soualem, Casablanca",
    exp2_date: "Déc 2022 – Sep 2025",
    exp2_t1: "Gestion du Data Center — AD DS, DNS, DHCP (+98% conformité sécurité)",
    exp2_t2: "Déploiement et configuration via SCCM",
    exp2_t3: "Gestion EDR CrowdStrike et MDM Sophos Mobile",
    exp2_t4: "Administration VMware vSphere et serveurs Azure",
    exp2_t5: "Automatisation PowerShell — réduction de 30% des tâches manuelles",
    exp2_t6: "Gestion téléphonie VoIP Cisco Webex",
    exp2_t7: "Sauvegardes et continuité — disponibilité > 99%",
    exp2_t8: "Maintenance salles serveurs — réduction 20% consommation énergétique",
    exp2_t9: "Documentation technique pour +600 utilisateurs",
    exp2_t10: "92% de tickets résolus au premier contact",
    exp3_title: "Technicien IT",
    exp3_company: "AMEX ROYAL AIR MAROC",
    exp3_location: "Casablanca",
    exp3_date: "Juil 2021 – Déc 2022",
    exp3_t1: "Gestion des incidents via Micro Focus SMAX",
    exp3_t2: "Installation et maintenance du matériel informatique",
    exp3_t3: "Paramétrage et gestion des sessions utilisateurs",
    exp3_t4: "Déploiement logiciel via ManageEngine",
    exp3_t5: "Gestion du stock informatique et optimisation des ressources",
    exp3_t6: "Support utilisateurs multicanal (téléphone, email, à distance)",
    skills_title: "Compétences Techniques",
    skills_subtitle: "Les technologies que je maîtrise au quotidien",
    cat_infra: "Infrastructure & Systèmes",
    cat_cloud: "Cloud & Virtualisation",
    cat_security: "Sécurité & Supervision",
    cat_network: "Réseau & VoIP",
    cat_automation: "Automatisation & DevOps",
    cat_standards: "Standards & Méthodes",
    edu_title: "Parcours Académique",
    edu_subtitle: "Mon cursus de formation",
    edu1_title: "Master Professionnel en Ingénierie Systèmes, Réseaux et Cybersécurité",
    edu1_school: "ENSI, Casablanca",
    edu1_year: "2023 – 2025",
    edu2_title: "Licence Professionnelle en Administration Systèmes, Bases de Données et Cloud",
    edu2_school: "SUPEMIR, Casablanca",
    edu2_year: "2023 – 2024",
    edu3_title: "Bachelor Responsable de Projets",
    edu3_school: "WESFORD, France",
    edu3_year: "2018 – 2021",
    edu4_title: "Diplôme de Technicien en Maintenance et Support Informatique et Réseaux",
    edu4_school: "ISTICG, Berrechid",
    edu4_year: "2018 – 2020",
    edu5_title: "Baccalauréat Science Physique",
    edu5_school: "Lycée Eljadida, Berrechid",
    edu5_year: "2016 – 2017",
    certs_title: "Certifications",
    certs_subtitle: "Mes accréditations professionnelles",
    cert1_title: "System Administration and IT Infrastructure Services",
    cert1_org: "Certification Professionnelle Google",
    cert2_title: "Ethical Hacker",
    cert2_org: "Cisco Networking Academy",
    cert3_title: "Fortinet Certified Associate Cybersecurity",
    cert3_org: "Fortinet",
    contact_title: "Contactez-Moi",
    contact_subtitle: "N'hésitez pas à me contacter pour toute collaboration",
    contact_intro: "Je suis ouvert à tout nouveau projet, idée créative ou opportunité de collaboration.",
    contact_name: "Nom",
    contact_email: "Email",
    contact_message: "Message",
    contact_send: "Envoyer",
    contact_placeholder_name: "Votre nom",
    contact_placeholder_email: "votre@email.com",
    contact_placeholder_message: "Votre message...",
    footer_text: "Conçu et développé avec",
    footer_by: "par Hamza FEKKAK",
  }
};

let currentLang = "en";

function applyTranslations() {
  const t = translations[currentLang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key]) el.placeholder = t[key];
  });
}

function toggleLang() {
  currentLang = currentLang === "en" ? "fr" : "en";
  applyTranslations();
  document.getElementById("langBtn").textContent = currentLang === "en" ? "🇫🇷 FR" : "🇬🇧 EN";
}

// Navbar scroll effect
function handleScroll() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Active nav link
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        document.querySelectorAll(".nav-links a").forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    }
  });
}

// Scroll animations
function handleFadeUp() {
  document.querySelectorAll(".fade-up").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) {
      el.classList.add("visible");
    }
  });
}

// Mobile nav toggle
function toggleNav() {
  document.getElementById("navLinks").classList.toggle("open");
}

// Form submit
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector("button[type=submit]");
  const originalText = btn.textContent;
  btn.textContent = currentLang === "en" ? "✓ Sent!" : "✓ Envoyé !";
  btn.style.background = "#10b981";
  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = "";
    e.target.reset();
  }, 2500);
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();
  handleFadeUp();

  window.addEventListener("scroll", () => {
    handleScroll();
    handleFadeUp();
  });
});
