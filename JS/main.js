// Data
const portfolioData = {
    projects: [
      {
        title: "F1_SIMULATOR.exe",
        description: "Interactive site to explore F1 information using a public API.",
        tech: ["JavaScript", "HTML", "CSS", "BootStrap"],
        status: "ACTIVE",
        year: "2025",
        lines: "+7000",
      },
      {
        title: "Kario_Media.exe",
        description: "Web platform to manage projects and progress for a digital consulting firm.",
        tech: ["HTML", "CSS"],
        status: "ACTIVE",
        year: "2025",
        lines: "+5000",
      },
      {
        title: "CAMPUS_PLATFORM.exe",
        description: "Educational platform to manage courses, users, and learning content.",
        tech: ["Python"],
        status: "COMPLETE",
        year: "2025",
        lines: "+2000",
      }
    ],
    skills: [
      { name: "JavaScript", level: 90, category: "Frontend" },
      { name: "Html", level: 99, category: "Frontend" },
      { name: "CSS", level: 99, category: "Frontend" },
      { name: "Node.js", level: 30, category: "Backend" },
      { name: "Python", level: 85, category: "Backend" },
      { name: "MongoDB", level: 90, category: "Database" },
      { name: "MySQL", level: 89, category: "Database" },
      { name: "Coming Soon", level: 100, category: "DevOps" }
    ],
    experience: [
      {
        title: "Senior Full Stack Developer",
        company: "TechCorp Industries",
        period: "2022 - Present",
        description: "Leading development of enterprise web applications and mentoring junior developers.",
        achievements: ["Increased system performance by 40%", "Led team of 5 developers", "Implemented CI/CD pipeline"],
      },
      {
        title: "Frontend Developer",
        company: "Digital Solutions Ltd",
        period: "2020 - 2022",
        description: "Developed responsive web applications using modern JavaScript frameworks.",
        achievements: ["Built 15+ client projects", "Reduced load times by 60%", "Implemented design system"],
      },
      {
        title: "Junior Developer",
        company: "StartupXYZ",
        period: "2019 - 2020",
        description: "Started career building web applications and learning industry best practices.",
        achievements: ["Completed 50+ bug fixes", "Learned 5 new technologies", "Contributed to open source"],
      },
    ],
    education: [
      {
        degree: "Full Stack Web Development",
        school: "Campuslands",
        year: "2024-2025",
        gpa: "3.8/4.0",
      },
      {
        degree: "System Technician",
        school: "SENA",
        year: "2023-2024",
        gpa: "Certificate",
      },
    ],
    certifications: [
      "Python Essentials",
      "Microsoft Office Specialist: Excel Associate",
      "Introduction to IoT"
    ],
  }
  
  // State
  let currentSection = "about"
  let typingIndex = 0
  const typingText = "Welcome to my digital workspace... System initialized successfully."
  
  // DOM Elements
  const navButtons = document.querySelectorAll(".nav-btn")
  const mainContent = document.getElementById("main-content")
  const windowTitle = document.getElementById("window-title-text")
  const typingElement = document.getElementById("typing-text")
  const currentTimeElement = document.getElementById("current-time")
  const currentDateElement = document.getElementById("current-date")
  const lastUpdateElement = document.getElementById("last-update")
  const uptimeElement = document.getElementById("uptime")
  
  // Initialize
  document.addEventListener("DOMContentLoaded", () => {
    initializeApp()
  })
  
  function initializeApp() {
    setupNavigation()
    startTypingAnimation()
    startClock()
    startSystemStats()
    loadSection("about")
    updateFooter()
  }
  
  // Navigation
  function setupNavigation() {
    navButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const section = this.dataset.section
        switchSection(section)
      })
    })
  }
  
  function switchSection(section) {
    // Update active button
    navButtons.forEach((btn) => btn.classList.remove("active"))
    document.querySelector(`[data-section="${section}"]`).classList.add("active")
  
    // Update window title
    const titles = {
      about: "ABOUT.TXT",
      experience: "WORK.LOG",
      projects: "PROJECTS.DIR",
      skills: "SKILLS.EXE",
      education: "EDU.DAT",
      contact: "CONTACT.BAT",
    }
    windowTitle.textContent = titles[section]
  
    // Load content
    loadSection(section)
    currentSection = section
  }
  
  function loadSection(section) {
    const content = generateSectionContent(section)
    mainContent.innerHTML = content
  }
  
  // Content Generation
  function generateSectionContent(section) {
    switch (section) {
      case "about":
        return generateAboutContent()
      case "experience":
        return generateExperienceContent()
      case "projects":
        return generateProjectsContent()
      case "skills":
        return generateSkillsContent()
      case "education":
        return generateEducationContent()
      case "contact":
        return generateContactContent()
      default:
        return "<div>Section not found</div>"
    }
  }
  
  function generateAboutContent() {
    return `
          <div class="about-content">
              <div class="profile-section">
                  <div class="profile-avatar">
                        <img class="avatar" src="./storage/img/dll.jpeg">
                  </div>
                  <div class="profile-info">
                      <h1>DANIEL_GUERRERO.dev</h1>
                      <p class="subtitle">Full Stack Developer | Digital Architect</p>
                      <div class="profile-tags">
                          <div class="tag">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                  <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16l4 4-4 4H2l4-4-4-4z"></path>
                              </svg>
                              <span>Coffee Driven</span>
                          </div>
                          <div class="tag">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                  <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
                              </svg>
                              <span>Code Enthusiast</span>
                          </div>
                      </div>
                  </div>
              </div>
              
              <div class="separator-line"></div>
              
              <div class="about-grid">
                  <div class="info-section">
                      <h3>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                              <path d="M9 9h6v6H9z"></path>
                          </svg>
                          &gt; SYSTEM_INFO:
                      </h3>
                      <p>I am a Full Stack software developer focused on professional and personal growth. I work with Python, HTML, CSS, JavaScript, and MySQL, and I have experience building web applications using REST APIs and JSON Server.

I am proactive, adaptable, and value clear communication and teamwork. I’m always eager to learn and contribute to meaningful projects.</p>
                      <ul class="status-list">
                          <li class="status-item">
                              <div class="status-dot pulse"></div>
                              <span>Available for new projects</span>
                          </li>
                          <li class="status-item">
                              <div class="status-dot"></div>
                              <span>Remote work preferred</span>
                          </li>
                          <li class="status-item">
                              <div class="status-dot"></div>
                              <span>Open source contributor</span>
                          </li>
                      </ul>
                  </div>
                  
                  <div class="info-section">
                      <h3>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"></polygon>
                          </svg>
                          &gt; QUICK_STATS:
                      </h3>
                      <div class="stats-grid">
                          <div class="stat-card">
                              <div class="stat-number">3</div>
                              <div class="stat-label">Projects</div>
                          </div>
                          <div class="stat-card">
                              <div class="stat-number">1</div>
                              <div class="stat-label">Years Exp</div>
                          </div>
                          <div class="stat-card">
                              <div class="stat-number">100K+</div>
                              <div class="stat-label">Lines Code</div>
                          </div>
                          <div class="stat-card">
                              <div class="stat-number">24/7</div>
                              <div class="stat-label">Debugging</div>
                          </div>
                      </div>
                  </div>
              </div>
              
              <div class="ascii-art">
      <pre>
╔══════════════════════════════════════╗
║  "Code is poetry written in logic"   ║
║           - Anonymous Hacker         ║
╚══════════════════════════════════════╝</pre>
  </div>
          </div>
      `
  }
  
  function generateExperienceContent() {
    return `
          <div class="experience-content">
              <div class="section-header">
                  <h2>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                          <line x1="8" y1="21" x2="16" y2="21"></line>
                          <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                      WORK_EXPERIENCE.log
                  </h2>
              </div>
              
              <div class="experience-list">
                      <div class="experience-card">
                          <div class="experience-header">
                              <div>
                                  <div class="job-title">COMING SOON</div>
                              </div>
                          </div>
                      </div>
              </div>
          </div>
      `
  }
  
  function generateProjectsContent() {
    return `
          <div class="projects-content">
              <div class="section-header">
                  <h2>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <polyline points="16,18 22,12 16,6"></polyline>
                          <polyline points="8,6 2,12 8,18"></polyline>
                      </svg>
                      PROJECT_DIRECTORY
                  </h2>
              </div>
              
              <div class="projects-grid">
                  ${portfolioData.projects
                    .map(
                      (project) => `
                      <div class="project-card">
                          <div class="project-header">
                              <div class="project-title">${project.title}</div>
                              <div class="project-badges">
                                  <div class="badge">${project.year}</div>
                                  <div class="badge">${project.status}</div>
                              </div>
                          </div>
                          <div class="project-description">${project.description}</div>
                          <div class="tech-tags">
                              ${project.tech.map((tech) => `<div class="tech-tag">${tech}</div>`).join("")}
                          </div>
                          <div class="project-footer">
                              <div class="project-stats">Lines of code: ${project.lines}</div>
                              <div class="project-buttons">
                                  <button class="btn">
                                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                      </svg>
                                      CODE
                                  </button>
                                  <button class="btn">
                                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                          <polyline points="15,3 21,3 21,9"></polyline>
                                          <line x1="10" y1="14" x2="21" y2="3"></line>
                                      </svg>
                                      DEMO
                                  </button>
                              </div>
                          </div>
                      </div>
                  `,
                    )
                    .join("")}
              </div>
          </div>
      `
  }
  
  function generateSkillsContent() {
    const categories = ["Frontend", "Backend", "Database", "DevOps"]
  
    return `
          <div class="skills-content">
              <div class="section-header">
                  <h2>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <path d="M9 9h6v6H9z"></path>
                      </svg>
                      SKILL_MATRIX.exe
                  </h2>
              </div>
              
              <div class="terminal-line">
                  <span class="prompt">&gt;</span>
                  <span class="output">Loading skill modules...</span>
              </div>
              
              <div class="skills-categories">
                  ${categories
                    .map(
                      (category) => `
                      <div class="skill-category">
                          <h3>&gt; ${category.toUpperCase()}_SKILLS:</h3>
                          <div class="skills-grid">
                              ${portfolioData.skills
                                .filter((skill) => skill.category === category)
                                .map(
                                  (skill) => `
                                  <div class="skill-item">
                                      <div class="skill-header">
                                          <span class="skill-name">${skill.name}</span>
                                          <span class="skill-percentage">${skill.level}%</span>
                                      </div>
                                      <div class="progress-bar">
                                          <div class="progress-fill" style="width: ${skill.level}%"></div>
                                      </div>
                                  </div>
                              `,
                                )
                                .join("")}
                          </div>
                      </div>
                  `,
                    )
                    .join("")}
              </div>
              
              <div class="terminal-line">
                  <span class="prompt">&gt;</span>
                  <span class="ready">All systems operational. Ready for deployment.</span>
              </div>
          </div>
      `
  }
  
  function generateEducationContent() {
    return `
          <div class="education-content">
              <div class="section-header">
                  <h2>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                      </svg>
                      EDUCATION_DATA.dat
                  </h2>
              </div>
              
              <div class="education-sections">
                  <div class="education-section">
                      <h3>&gt; FORMAL_EDUCATION:</h3>
                      <div class="education-grid">
                          ${portfolioData.education
                            .map(
                              (edu) => `
                              <div class="education-card">
                                  <div class="education-header">
                                      <div>
                                          <div class="degree-title">${edu.degree}</div>
                                          <div class="school-name">${edu.school}</div>
                                      </div>
                                      <div>
                                          <div class="education-year">${edu.year}</div>
                                          <div class="education-gpa">${edu.gpa}</div>
                                      </div>
                                  </div>
                              </div>
                          `,
                            )
                            .join("")}
                      </div>
                  </div>
                  
                  <div class="education-section">
                      <h3>&gt; CERTIFICATIONS:</h3>
                      <div class="certifications-grid">
                          ${portfolioData.certifications
                            .map(
                              (cert) => `
                              <div class="certification-item">
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                      <circle cx="12" cy="8" r="7"></circle>
                                      <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"></polyline>
                                  </svg>
                                  <span class="certification-name">${cert}</span>
                              </div>
                          `,
                            )
                            .join("")}
                      </div>
                  </div>
              </div>
          </div>
      `
  }
  
  function generateContactContent() {
    return `
          <div class="contact-content">
              <div class="section-header">
                  <h2>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      CONTACT_PROTOCOL.bat
                  </h2>
              </div>
              
              <div class="terminal-line">
                  <span class="prompt">&gt;</span>
                  <span class="output">Establishing communication channels...</span>
              </div>
              
              <div class="contact-grid">
                  <div class="contact-card">
                      <div class="contact-item">
                          <div class="contact-info">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                  <polyline points="22,6 12,13 2,6"></polyline>
                              </svg>
                              <div>
                                  <div class="contact-label">EMAIL</div>
                                  <div class="contact-value">dg1049291388@gmail.com</div>
                              </div>
                          </div>
                          <button class="btn">CONNECT</button>
                      </div>
                  </div>
                  
                  <div class="contact-card">
                      <div class="contact-item">
                          <div class="contact-info">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                              </svg>
                              <div>
                                  <div class="contact-label">GITHUB</div>
                                  <div class="contact-value">/Danny200523</div>
                              </div>
                          </div>
                          <button class="btn">CONNECT</button>
                      </div>
                  </div>
                  
                  <div class="contact-card">
                      <div class="contact-item">
                          <div class="contact-info">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                  <rect x="2" y="9" width="4" height="12"></rect>
                                  <circle cx="4" cy="4" r="2"></circle>
                              </svg>
                              <div>
                                  <div class="contact-label">LINKEDIN</div>
                                  <div class="contact-value">/in/daniel-esteban-guerrero-quintero-b16173356</div>
                              </div>
                          </div>
                          <button class="btn">CONNECT</button>
                      </div>
                  </div>
                  
                  <div class="contact-card">
                      <div class="contact-item">
                          <div class="contact-info">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                  <path d="M9 9h6v6H9z"></path>
                              </svg>
                              <div>
                                  <div class="contact-label">DISCORD</div>
                                  <div class="contact-value">danny_2005_</div>
                              </div>
                          </div>
                          <button class="btn">CONNECT</button>
                      </div>
                  </div>
              </div>
              
              <div class="contact-form">
                  <h3>&gt; SEND_MESSAGE:</h3>
                  <form id="contact-form">
                      <div class="form-grid">
                          <div class="form-group">
                              <label class="form-label">NAME:</label>
                              <input type="text" class="form-input" placeholder="Enter your name..." required>
                          </div>
                          <div class="form-group">
                              <label class="form-label">EMAIL:</label>
                              <input type="email" class="form-input" placeholder="your.email@domain.com" required>
                          </div>
                      </div>
                      <div class="form-group full-width">
                          <label class="form-label">MESSAGE:</label>
                          <textarea class="form-textarea" placeholder="Type your message here..." required></textarea>
                      </div>
                      <button type="submit" class="form-submit">SEND_MESSAGE.exe</button>
                  </form>
              </div>
              
              <div class="terminal-line">
                  <span class="prompt">&gt;</span>
                  <span class="ready">All communication protocols active. Standing by for incoming transmissions...</span>
              </div>
          </div>
      `
  }
  
  // Animations and Effects
  function startTypingAnimation() {
    function typeNextCharacter() {
      if (typingIndex < typingText.length) {
        typingElement.textContent = typingText.slice(0, typingIndex + 1)
        typingIndex++
        setTimeout(typeNextCharacter, 80)
      }
    }
    typeNextCharacter()
  }
  
  function startClock() {
    function updateTime() {
      const now = new Date()
      currentTimeElement.textContent = now.toLocaleTimeString()
      currentDateElement.textContent = now.toLocaleDateString()
    }
  
    updateTime()
    setInterval(updateTime, 1000)
  }
  
  function startSystemStats() {
    function updateStats() {
      const cpu = Math.floor(Math.random() * 30) + 20
      const memory = Math.floor(Math.random() * 40) + 40
      const projects = Math.floor(Math.random() * 10) + 15
  
      // Update header stats
      document.getElementById("cpu-usage").textContent = cpu
      document.getElementById("memory-usage").textContent = memory
      document.getElementById("project-count").textContent = projects
  
      // Update monitor stats
      document.getElementById("cpu-percent").textContent = cpu + "%"
      document.getElementById("memory-percent").textContent = memory + "%"
      document.getElementById("projects-count").textContent = projects
  
      // Update progress bars
      document.getElementById("cpu-progress").style.width = cpu + "%"
      document.getElementById("memory-progress").style.width = memory + "%"
      document.getElementById("projects-progress").style.width = (projects / 25) * 100 + "%"
    }
  
    updateStats()
    setInterval(updateStats, 2000)
  }
  
  function updateFooter() {
    const now = new Date()
    lastUpdateElement.textContent = now.toLocaleDateString()
    uptimeElement.textContent = Math.floor(Math.random() * 365)
  }
  
  // Form handling
  document.addEventListener("submit", (e) => {
    if (e.target.id === "contact-form") {
      e.preventDefault()
  
      // Simulate form submission
      const submitButton = e.target.querySelector(".form-submit")
      const originalText = submitButton.textContent
  
      submitButton.textContent = "SENDING..."
      submitButton.disabled = true
  
      setTimeout(() => {
        submitButton.textContent = "MESSAGE_SENT.exe"
        setTimeout(() => {
          submitButton.textContent = originalText
          submitButton.disabled = false
          e.target.reset()
        }, 2000)
      }, 1500)
    }
  })
  