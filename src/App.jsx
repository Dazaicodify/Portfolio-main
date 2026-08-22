import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronRight,
  Plus,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  ExternalLink,
  Code2,
  Database,
  Layers,
  Cpu,
  GraduationCap,
  Award,
  Users,
  Camera,
  CheckCircle2,
  Send,
  Copy,
  Check,
  Briefcase,
  Terminal,
  Sparkles,
  Loader2,
  AlertCircle
} from "lucide-react";
import "./styles.css";

function GithubIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// 4 Core Capabilities / Services tailored from Resume
const services = [
  {
    number: "01",
    title: "Enterprise & Salesforce",
    description: "Custom Apex triggers, asynchronous batch workflows, Lightning Web Components (LWC), and SOQL optimization.",
    pills: ["Apex", "LWC", "Salesforce Flows", "SOQL / SOSL", "Salesforce DX", "Enterprise CRM"],
    icon: <Layers size={20} />
  },
  {
    number: "02",
    title: "Backend & REST APIs",
    description: "Robust microservices, modular endpoint architecture, token authentication, and relational database schema design.",
    pills: ["Python", "Flask", "REST APIs", "SQLite", "PostgreSQL", "OOP & System Design"],
    icon: <Database size={20} />
  },
  {
    number: "03",
    title: "Full-Stack & Web UI",
    description: "High-performance frontend interfaces in React.js, responsive design systems, and seamless API integrations.",
    pills: ["React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Vite", "Component Architecture", "Tailwind"],
    icon: <Code2 size={20} />
  },
  {
    number: "04",
    title: "AI, Data Science & Optimization",
    description: "End-to-end machine learning models, analytical dashboards with Power BI, and graphics rendering LOD optimizations.",
    pills: ["Scikit-learn", "Streamlit", "Pandas & NumPy", "Power BI", "Matplotlib", "C# LOD Optimization"],
    icon: <Cpu size={20} />
  }
];

// Experience from Resume
const experienceData = [
  {
    period: "May 2026 — Present",
    role: "Software Engineer",
    company: "CRMantra Technologies Pvt Ltd",
    location: "Kochi, Kerala",
    bullets: [
      "Building enterprise applications and automation solutions to streamline business processes and enhance usability.",
      "Developing and integrating frontend modules with backend services and REST APIs, while maintaining unit tests to ensure reliable deployments and scalable workflows."
    ],
    stack: ["Salesforce", "Apex", "LWC", "REST APIs", "SOQL", "Unit Testing", "Enterprise Automation"]
  },
  {
    period: "Sep 2025 — Present",
    role: "AI & Data Science Intern",
    company: "DataMites Global Training Institute",
    location: "Chennai, TN",
    bullets: [
      "Developed end-to-end machine learning workflows covering data preprocessing, feature engineering, model training, and performance evaluation using Python.",
      "Built dashboards and reports with Matplotlib, Seaborn, and Power BI to communicate trends and support decisions."
    ],
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI"]
  },
  {
    period: "May 2023 — Jun 2023",
    role: "Web Development Intern",
    company: "Facein Technologies Pvt Ltd",
    location: "Kochi, Kerala",
    bullets: [
      "Developed responsive web interfaces using HTML, CSS, JavaScript, and React, while integrating frontend components with backend APIs to improve data flow and user interactions."
    ],
    stack: ["React.js", "JavaScript", "HTML5", "CSS3", "REST APIs", "UI/UX"]
  }
];

// 6 Projects from Resume with Thumbnail Support
const projectsData = [
  {
    id: "proj-1",
    number: "01",
    title: "Expense Tracker API",
    period: "Jan 2026 – Feb 2026",
    category: "BACKEND & ANALYTICS",
    image: "expense3.png", // Place your project screenshot path here e.g. "/images/expense-tracker.jpg"
    description: "Modular RESTful API to manage categorized expenses, monthly budgets, and real-time financial chart generation.",
    bullets: [
      "Built RESTful APIs with SQLite to manage expenses, categories, and analytics in a structured backend flow.",
      "Designed the backend for clean frontend integration and real-time chart generation using Chart.js."
    ],
    stack: ["Python", "Flask", "SQLite", "Chart.js", "REST APIs"],
    github: "https://github.com/Dazaicodify"
  },
  {
    id: "proj-2",
    number: "02",
    title: "Diabetes Diagnostic Model",
    period: "Dec 2025 – Jan 2026",
    category: "MACHINE LEARNING",
    image: "diabetes-ml3.png", // Place your project screenshot path here e.g. "/images/diabetes-ml.jpg"
    description: "Clinical diagnostic workflow utilizing machine learning classifiers with an interactive parameter-testing web interface.",
    bullets: [
      "Developed and deployed a machine learning model with a Streamlit interface.",
      "Performed data cleansing, feature scaling, and evaluated accuracy with cross-validation."
    ],
    stack: ["Python", "Scikit-learn", "Streamlit", "Pandas", "NumPy"],
    github: "https://github.com/Dazaicodify"
  },
  {
    id: "proj-3",
    number: "03",
    title: "BFS Pathfinding Visualizer",
    period: "Nov 2025 – Dec 2025",
    category: "ALGORITHMS & GRAPH THEORY",
    image: "pathvisualizer.png", // Place your project screenshot path here e.g. "/images/bfs-visualizer.jpg"
    description: "Interactive visual simulator demonstrating Breadth-First Search (BFS) graph traversal and shortest-path computation.",
    bullets: [
      "Implemented graph traversal algorithms to visualize real-time shortest-path computation on dynamic grid maps.",
      "Optimized step-by-step queue execution and frontier cell rendering."
    ],
    stack: ["Python", "Algorithms", "Graph Theory", "Data Structures"],
    github: "https://github.com/Dazaicodify"
  },
  {
    id: "proj-4",
    number: "04",
    title: "WhatsApp Automation Service",
    period: "Jul 2025 – Aug 2025",
    category: "SYSTEM AUTOMATION",
    image: "whatsappautomation.png", // Place your project screenshot path here e.g. "/images/whatsapp-bot.jpg"
    description: "Automated message scheduling and webhook delivery service engineered with object-oriented design principles.",
    bullets: [
      "Designed and developed an automated message scheduling service using Python, REST APIs, and OOP to streamline delivery workflows.",
      "Engineered flexible payload structures and logging mechanisms for high extensibility."
    ],
    stack: ["Python", "REST APIs", "OOP", "Automation", "JSON"],
    github: "https://github.com/Dazaicodify"
  },
  {
    id: "proj-5",
    number: "05",
    title: "Immersive VR Showroom",
    period: "Sep 2023 – Jan 2024",
    category: "3D GRAPHICS & OPTIMIZATION",
    image: "vr1.jpg", // Place your project screenshot path here e.g. "/images/vr-showroom.jpg"
    description: "Optimized 3D rendering pipeline delivering 30% improved frame rates on resource-constrained hardware setups.",
    bullets: [
      "Optimized 3D rendering pipelines using Level of Detail (LOD) systems, improving hardware frame rates by 30%.",
      "Managed mesh polygon budgets and spatial asset culling to satisfy strict technical constraints."
    ],
    stack: ["C#", "Unity", "LOD Systems", "System Optimization"],
    github: "https://github.com/Dazaicodify"
  },
  {
    id: "proj-6",
    number: "06",
    title: "Nike Homepage",
    period: "Aug 2023 – Sep 2023",
    category: "FRONTEND & UI DESIGN",
    image: "tail1.png", // Place your project screenshot path here e.g. "/images/nike-clone.jpg"
    description: "Pixel-perfect, fully responsive clone of the Nike e-commerce website with modern layout systems and fluid interactions.",
    bullets: [
      "Replicated Nike's homepage with responsive grid layouts, hero sections, product cards, and navigation using HTML5 and CSS3.",
      "Applied CSS Flexbox and Grid for consistent cross-device rendering and added smooth hover micro-animations."
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Flexbox", "CSS Grid"],
    github: "https://github.com/Dazaicodify",
    live: "https://dazaicodify.github.io/Portfolio/#projects"
  }
];

// Certifications & Achievements from Resume
const certifications = [
  {
    title: "Salesforce Platform Developer I (PD1)",
    issuer: "Salesforce",
    tag: "Enterprise CRM"
  },
  {
    title: "Google Data Analysis Fundamentals",
    issuer: "Google",
    tag: "Data & Analytics"
  },
  {
    title: "HackerRank SQL (Advanced)",
    issuer: "HackerRank",
    tag: "Database & Querying"
  },
  {
    title: "Infosys Springboard - Python",
    issuer: "Infosys",
    tag: "Programming"
  },
  {
    title: "Skillsoft - Introduction to AWS",
    issuer: "Skillsoft",
    tag: "Cloud Infrastructure"
  },
  {
    title: "Infosys Springboard - Data Science",
    issuer: "Infosys",
    tag: "Machine Learning"
  }
];

const achievements = [
  "IEEE SIGHT Society Chair (2024)",
  "IEEE Student Branch Treasurer (2023)",
  "NSS Energy Cell Coordinator (2023)",
  "2nd Prize in Meetmind App Development Competition"
];

// Modest Volunteering Experience
const volunteeringMoments = [
  {
    id: "vol-1",
    image: "ieee.jpeg", // Add photo path here e.g. "/images/volunteering-1.jpg"
    caption: "IEEE SIGHT & Student Community Mentorship",
    subtext: "Technical workshops & youth guidance"
  },
  {
    id: "vol-2",
    image: "nss.jpg", // Add photo path here e.g. "/images/volunteering-2.jpg"
    caption: "NSS Energy Cell Coordination & Campus Drives",
    subtext: "Conducted awareness sessions on energy conservation and sustainable energy practices."
  },
  {
    id: "vol-3",
    image: "meetmind.jpeg", // Add photo path here e.g. "/images/volunteering-3.jpg"
    caption: "Hackathon Coordination & Mentorship",
    subtext: "Secured 2nd prize in a college-level coding competition and coordinated hackathon events, guiding 150+ students."
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null); // { type: 'success' | 'error', message: string }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("richuraju2.0@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "8bc138f1-246a-45af-a7b0-c189f49ee382",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact: Message from ${formData.name}`,
          from_name: formData.name
        })
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({
          type: "success",
          message: "Thank you for reaching out! Your message has been sent successfully. Richu will get back to you shortly."
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus({
          type: "error",
          message: result.message || "Failed to send message. Please try again or reach out directly via email."
        });
      }
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "An unexpected error occurred. Please check your internet connection or email directly to richuraju2.0@gmail.com."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="growaz-shell">
      {/* Ambient Radial Glow in Backdrop */}
      <div className="glow-backdrop"></div>

      {/* Floating Dark Navbar */}
      <header className={`growaz-navbar ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#top" className="brand-link" onClick={closeMenu}>
            Richu<span className="brand-dot">.</span>
          </a>

          <nav className={`nav-links-menu ${menuOpen ? "nav-open" : ""}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#education" onClick={closeMenu}>Education</a>
            <a href="#beyond-academics" onClick={closeMenu}>Beyond Academics</a>
            <a href="#contact" className="mobile-contact-link" onClick={closeMenu}>Let's Connect</a>
          </nav>

          <div className="nav-right">
            <a href="#contact" className="pill-contact-btn">
              Let's Connect
            </a>
            <button
              className="menu-hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        {/* =========================================================
            HERO SECTION (Matching Template Design Box & Tags)
            ========================================================= */}
        <section className="growaz-hero-section">
          <div className="hero-box-container">
            {/* Interactive Wireframe Box */}
            <div className="wireframe-hero-box">
              {/* 4 Corner Anchor Handles */}
              <span className="box-handle handle-tl"></span>
              <span className="box-handle handle-tr"></span>
              <span className="box-handle handle-bl"></span>
              <span className="box-handle handle-br"></span>

              {/* Floating Tags */}
              <div className="floating-tag tag-engineer">
                <span className="tag-cursor-arrow"></span>
                <span>Engineer</span>
              </div>

              <div className="floating-tag tag-expert">
                <span className="tag-cursor-arrow"></span>
                <span>Full-Stack</span>
              </div>

              <div className="floating-tag tag-innovative">
                <span className="tag-cursor-arrow"></span>
                <span>Innovative</span>
              </div>

              {/* Central Big Typography */}
              <h1 className="hero-main-title">
                <span className="title-sans">Engineering</span>
                <span className="title-italic">Digital futures</span>
              </h1>

              {/* Subtitle Description */}
              <p className="hero-subtext">
                Transforming Ideas into Reality · Crafting Scalable Backend Systems · One System at a Time · Building Reliable Digital Futures with Innovation and Precision
              </p>

              {/* Central Pill CTA */}
              <div className="hero-cta-wrap">
                <a href="#about" className="pill-cta-btn">
                  <span className="cta-icon-circle">
                    <ChevronRight size={16} />
                  </span>
                  <span>Click to know about me!</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            ABOUT RICHU SECTION (Left Text Narrative + Right Pic Container)
            ========================================================= */}
        <section id="about" className="growaz-about-section">
          <div className="growaz-container">
            <div className="about-split-container">
              {/* Left Column: Narrative & Actions */}
              <div className="about-text-column">
                <div className="about-label-badge">
                  <span className="sub-label">About Richu</span>
                </div>

                <h2 className="about-headline">
                  Passionate about crafting <span className="heading-italic">scalable systems</span> and intuitive digital experiences.
                </h2>

                <p className="about-manifesto-text">
                  Richu Raju is a software engineer skilled in backend and full-stack development, with experience in Python, JavaScript, Salesforce (Apex & LWC), and REST API design. Focused on building scalable, maintainable applications and solving real-world challenges.
                </p>

                {/* Expertise Highlights */}
                <div className="about-highlights-row">
                  <div className="about-highlight-pill">
                    <Sparkles size={14} className="highlight-icon" />
                    <span>Backend & REST APIs</span>
                  </div>
                  <div className="about-highlight-pill">
                    <Sparkles size={14} className="highlight-icon" />
                    <span>Salesforce Apex & LWC</span>
                  </div>
                  <div className="about-highlight-pill">
                    <Sparkles size={14} className="highlight-icon" />
                    <span>React & Modern Web</span>
                  </div>
                </div>

                <div className="about-actions-row">
                  <a href="#experience" className="pill-cta-btn">
                    <span className="cta-icon-circle">
                      <ChevronRight size={16} />
                    </span>
                    <span>Work experience</span>
                  </a>
                  <button onClick={handleCopyEmail} className="pill-ghost-btn" title="Copy Email">
                    {copied ? <Check size={15} className="text-amber" /> : <Copy size={15} />}
                    <span>{copied ? "Email Copied!" : "richuraju2.0@gmail.com"}</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Picture Container */}
              <div className="about-pic-column">
                <div className="about-pic-card-wrapper">
                  {/* Ambient glowing backdrop */}
                  <div className="about-pic-glow"></div>

                  <div className="about-pic-frame">
                    {/* 4 Corner Anchor Handles */}
                    <span className="box-handle handle-tl"></span>
                    <span className="box-handle handle-tr"></span>
                    <span className="box-handle handle-bl"></span>
                    <span className="box-handle handle-br"></span>

                    <img
                      src="/richu2.JPG"
                      alt="Richu Raju"
                      className="about-portrait-img"
                    />

                    {/* Floating Info / Role Badge */}
                    <div className="about-pic-floating-badge">
                      <div className="badge-status-dot"></div>
                      <div className="badge-text-group">
                        <span className="badge-name">Richu Raju</span>
                        <span className="badge-role">Software Engineer &bull; Kochi, India</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SERVICES / TAILORED CAPABILITIES GRID
            ========================================================= */}
        <section id="skills" className="growaz-services-section">
          <span id="services" style={{ position: "absolute", top: "-80px" }}></span>
          <div className="growaz-container">
            <div className="services-header-row">
              <h2 className="services-main-heading">
                <span>Skills that</span>
                <span className="heading-italic">are tailored</span>
              </h2>

              <a href="#projects" className="services-view-link">
                <span className="cta-icon-circle">
                  <ChevronRight size={16} />
                </span>
                <span>View Projects</span>
              </a>
            </div>

            <div className="services-cards-grid">
              {services.map((item) => (
                <div className="service-card" key={item.number}>
                  <div className="service-card-top">
                    <span className="service-num">{item.number}</span>
                    <h3 className="service-card-title">{item.title}</h3>
                  </div>

                  <p className="service-card-desc">{item.description}</p>

                  <div className="service-pills-wrap">
                    {item.pills.map((pill) => (
                      <span className="service-pill" key={pill}>
                        {pill}
                      </span>
                    ))}
                  </div>

                  <div className="service-card-bottom">
                    <a href="#contact" className="service-plus-btn" aria-label={`Inquire about ${item.title}`}>
                      <Plus size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            WORK EXPERIENCE TIMELINE
            ========================================================= */}
        <section id="experience" className="growaz-experience-section">
          <div className="growaz-container">
            <div className="section-title-wrap">
              <span className="sub-label">Career Journey</span>
              <h2 className="section-heading-text">
                <span>Professional</span> <span className="heading-italic">experience</span>
              </h2>
            </div>

            <div className="experience-list-wrap">
              {experienceData.map((exp, idx) => (
                <div className="experience-item-card" key={idx}>
                  <div className="exp-card-header">
                    <div>
                      <h3 className="exp-role-title">{exp.role}</h3>
                      <div className="exp-company-sub">
                        <span className="exp-company-name">{exp.company}</span>
                        <span className="exp-dot">&bull;</span>
                        <span className="exp-loc">{exp.location}</span>
                      </div>
                    </div>
                    <span className="exp-period-pill">{exp.period}</span>
                  </div>

                  <ul className="exp-bullets-list">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>

                  <div className="exp-stack-tags">
                    {exp.stack.map((s) => (
                      <span className="tag-pill" key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            PROJECTS & SYSTEM ARCHITECTURES (With Thumbnail Containers)
            ========================================================= */}
        <section id="projects" className="growaz-projects-section">
          <div className="growaz-container">
            <div className="section-title-wrap">
              <span className="sub-label">Featured Works</span>
              <h2 className="section-heading-text">
                <span>Selected</span> <span className="heading-italic">projects</span>
              </h2>
            </div>

            <div className="projects-grid-wrap">
              {projectsData.map((proj) => (
                <div className="project-feature-card" key={proj.id}>
                  {/* Thumbnail Image Container */}
                  <div className="project-thumbnail-box">
                    {proj.image ? (
                      <img src={proj.image} alt={proj.title} className="proj-thumb-img" />
                    ) : (
                      <div className="project-thumb-placeholder">
                        <div className="thumb-ambient-orb"></div>
                        <Camera size={24} className="thumb-cam-icon" />
                        <span className="thumb-label">Project Thumbnail &bull; {proj.number}</span>
                      </div>
                    )}
                    <span className="proj-number-badge">{proj.number}</span>
                  </div>

                  <div className="project-body-content">
                    <div className="proj-meta-line">
                      <span className="proj-cat-tag">{proj.category}</span>
                      <span className="proj-date-text">{proj.period}</span>
                    </div>

                    <h3 className="proj-title-text">{proj.title}</h3>
                    <p className="proj-desc-text">{proj.description}</p>

                    <ul className="proj-bullets-list">
                      {proj.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>

                    <div className="proj-card-footer">
                      <div className="proj-stack-pills">
                        {proj.stack.map((stk) => (
                          <span className="mini-pill" key={stk}>{stk}</span>
                        ))}
                      </div>

                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        className="proj-github-link"
                      >
                        <GithubIcon size={16} /> Code <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            EDUCATION, CERTIFICATIONS & ACHIEVEMENTS
            ========================================================= */}
        <section id="education" className="growaz-credentials-section">
          <span id="credentials" style={{ position: "absolute", top: "-80px" }}></span>
          <div className="growaz-container">
            <div className="section-title-wrap">
              <span className="sub-label">Qualifications</span>
              <h2 className="section-heading-text">
                <span>Education &</span> <span className="heading-italic">Certifications</span>
              </h2>
            </div>

            <div className="credentials-split-layout">
              {/* Education Card */}
              <div className="education-column">
                <div className="edu-box-card">
                  <div className="edu-badge-icon">
                    <GraduationCap size={24} />
                  </div>
                  <div className="edu-details-wrap">
                    <span className="edu-timeline-badge">Nov 2021 – Jun 2025</span>
                    <h3 className="edu-degree-title">B.Tech in Computer Science and Design</h3>
                    <span className="edu-cgpa-pill">CGPA: 7.3 / 10</span>
                    <p className="edu-college-name">
                      Viswajyothi College of Engineering and Technology, Muvattupuzha, Kerala
                    </p>
                  </div>
                </div>

                {/* Achievements List */}
                <div className="achievements-box-card">
                  <div className="achieve-header">
                    <Award size={20} className="achieve-icon" />
                    <h4>Leadership & Achievements</h4>
                  </div>
                  <ul className="achieve-list">
                    {achievements.map((item, aIdx) => (
                      <li key={aIdx}>
                        <CheckCircle2 size={15} className="achieve-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Certifications Grid */}
              <div className="certifications-column">
                <h4 className="cert-section-title">Verified Certifications</h4>
                <div className="certs-grid">
                  {certifications.map((cert, cIdx) => (
                    <div className="cert-item-card" key={cIdx}>
                      <span className="cert-tag">{cert.tag}</span>
                      <h5 className="cert-title">{cert.title}</h5>
                      <span className="cert-issuer">Issued by {cert.issuer}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            BEYOND ACADEMICS (VOLUNTEERING & COMMUNITY)
            ========================================================= */}
        <section id="beyond-academics" className="growaz-volunteering-section">
          <span id="volunteering" style={{ position: "absolute", top: "-80px" }}></span>
          <div className="growaz-container">
            <div className="section-title-wrap">
              <span className="sub-label">Life & Community</span>
              <h2 className="section-heading-text">
                <span>Beyond</span> <span className="heading-italic">academics</span>
              </h2>
            </div>

            <div className="volunteering-moments-grid">
              {volunteeringMoments.map((item) => (
                <div className="vol-moment-card" key={item.id}>
                  <div className="vol-photo-container">
                    {item.image ? (
                      <img src={item.image} alt={item.caption} className="vol-real-photo" />
                    ) : (
                      <div className="vol-placeholder-box">
                        <Camera size={22} className="vol-icon" />
                        <span>Photo Container</span>
                      </div>
                    )}
                  </div>
                  <div className="vol-caption-box">
                    <h4 className="vol-caption-title">{item.caption}</h4>
                    <p className="vol-caption-sub">{item.subtext}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            CONTACT SECTION (Matching Glowaz Dark Warm Aesthetic)
            ========================================================= */}
        <section id="contact" className="growaz-contact-section">
          <div className="growaz-container">
            <div className="contact-card-wrapper">
              <div className="contact-left-info">
                <span className="sub-label">Let's talk</span>
                <h2 className="contact-main-heading">
                  <span>Have a project in mind?</span><br />
                  <span className="heading-italic">Let's build together.</span>
                </h2>
                <p className="contact-desc">
                  Open to full-time software engineering roles, enterprise consulting, and API integrations. Reach out directly or submit your details.
                </p>

                <div className="contact-details-list">
                  <div className="contact-row">
                    <Mail size={18} className="contact-icon" />
                    <a href="mailto:richuraju2.0@gmail.com" className="contact-link">
                      richuraju2.0@gmail.com
                    </a>
                  </div>
                  <div className="contact-row">
                    <Phone size={18} className="contact-icon" />
                    <a href="tel:+917907994272" className="contact-link">
                      (+91) 7907994272
                    </a>
                  </div>
                  <div className="contact-row">
                    <MapPin size={18} className="contact-icon" />
                    <span>Thodupuzha / Kochi, Kerala, India</span>
                  </div>
                </div>

                <div className="contact-social-row">
                  <a
                    href="https://github.com/Dazaicodify"
                    target="_blank"
                    rel="noreferrer"
                    className="social-badge-btn"
                  >
                    <GithubIcon size={16} /> GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/richuraju02"
                    target="_blank"
                    rel="noreferrer"
                    className="social-badge-btn"
                  >
                    <LinkedinIcon size={16} /> LinkedIn
                  </a>
                </div>
              </div>

              <div className="contact-right-form">
                <div className="form-inner-box">
                  <h3>Send a message</h3>
                  {formStatus?.type === "success" ? (
                    <div className="form-sent-alert">
                      <CheckCircle2 size={24} className="text-amber" />
                      <div>
                        <strong>Message Sent Successfully!</strong>
                        <p>{formStatus.message}</p>
                        <button
                          type="button"
                          onClick={() => setFormStatus(null)}
                          className="form-reset-btn"
                        >
                          Send another message
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="growaz-form">
                      {formStatus?.type === "error" && (
                        <div className="form-error-alert">
                          <AlertCircle size={18} className="alert-icon-error" />
                          <span>{formStatus.message}</span>
                        </div>
                      )}

                      <div className="form-field">
                        <label htmlFor="name">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          required
                          disabled={isSubmitting}
                          placeholder="e.g. Sarah Connor"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="email">Your Email</label>
                        <input
                          type="email"
                          id="email"
                          required
                          disabled={isSubmitting}
                          placeholder="sarah@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="message">Message</label>
                        <textarea
                          id="message"
                          rows={4}
                          required
                          disabled={isSubmitting}
                          placeholder="Tell me about your project or role..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                      </div>
                      <button type="submit" disabled={isSubmitting} className="pill-cta-btn form-btn">
                        <span className="cta-icon-circle">
                          {isSubmitting ? (
                            <Loader2 size={15} className="btn-spinner" />
                          ) : (
                            <Send size={15} />
                          )}
                        </span>
                        <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="growaz-footer">
        <div className="growaz-container footer-inner">
          <div className="footer-left-side">
            <span className="footer-brand">Richu Raju<span className="brand-dot">.</span></span>
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Richu Raju. Software Engineer. All rights reserved.
            </p>
          </div>
          <div className="footer-nav-menu">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#beyond-academics">Beyond Academics</a>
            <a href="#top" className="footer-top-link">Back to top &uarr;</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;