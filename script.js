/**
 * WASIF ALI // CYBERPUNK MINIMALISM 3D WEBGL PORTFOLIO ENGINE
 * Dynamic 3D Particle Mesh, WebGL Light Trails, Holographic Lens,
 * Modular Scalable Case Studies, Web Audio Synthesizer & Custom Cursor.
 */

// ============================================================================
// 1. MODULAR PROJECT DATA REGISTRY (FUTURE-PROOF SCALABILITY)
// ============================================================================
const PROJECTS_DATA = [
  {
    id: "smart-vision",
    number: "SYS_01",
    category: "ai",
    categoryLabel: "FLAGSHIP // COMPUTER VISION & SECURITY",
    title: "Smart Vision Analyzer",
    tagline: "Autonomous CCTV Threat Detection & Biometric Intelligence Platform",
    desc: "A dual-tier surveillance intelligence suite combining 60 FPS edge YOLO11 hazard localization with a concurrent 2.0s Google Gemini Flash Cloud Sentinel loop for physical violence detection, FaceNet 512-D biometrics, and instant mobile push evidence capture.",
    image: "assets/smart-vision-preview.png",
    accentColor: "#00f0ff",
    tags: ["Python 3.14", "YOLO11 Edge", "Google Gemini Flash", "FaceNet (512-D)", "CustomTkinter", "NTFY Mobile Gateway"],
    githubUrl: "https://github.com/WasifAli-IT",
    stats: [
      { label: "Edge Inference", value: "< 0.3ms" },
      { label: "Cloud Audit Loop", value: "2.0s" },
      { label: "FaceNet Accuracy", value: "98.4%" },
      { label: "UI Thread Lag", value: "0.0%" }
    ],
    fullCaseStudy: `
      <div class="case-study-content">
        <h3 class="text-white font-display text-2xl mb-3">Project Overview</h3>
        <p class="text-secondary leading-relaxed mb-4">
          CCTV surveillance in public facilities, college campuses, and banks faces a fundamental challenge: 
          human monitoring is fatigue-prone, while traditional AI systems either suffer from false alarms (misclassifying 
          ordinary furniture or mobile phones as weapons) or fail to detect physical violence like brawls and armed robberies.
        </p>

        <h4 class="text-cyan font-mono text-sm uppercase mb-2">// Multi-Tier Architecture &amp; Solutions</h4>
        <ul class="space-y-2 text-secondary mb-6 font-sans">
          <li><strong>1. YOLO11 Kinetic Edge Localization:</strong> Real-time weapon detection running at 60+ FPS on Intel Core i5 CPU with zero GPU requirement, enhanced with geometric aspect-ratio sanity checks to eliminate chair false positives.</li>
          <li><strong>2. 2.0s Multimodal Cloud Sentinel:</strong> Concurrent background audit querying Google Gemini Flash Vision API every 2.0s to detect complex physical violence (strikes, wrestling brawls, property vandalism, fallen persons) and output live tactical protocols.</li>
          <li><strong>3. FaceNet Biometric Access Control:</strong> Inception-ResNet 512-dimensional vector embedding database with anti-spoof liveness verification and multi-angle facial enrollment.</li>
          <li><strong>4. Instant Mobile Evidence Push:</strong> Asynchronous NTFY and Telegram notification gateway dispatching high-resolution CCTV evidence photos with incident timestamps directly to operator mobile lockscreens worldwide in under 400ms.</li>
        </ul>

        <div class="modal-stats-grid mb-6">
          <div class="modal-stat-box"><span class="text-cyan font-mono text-xl font-bold">YOLO11</span><span class="text-xs text-muted block">Edge Core</span></div>
          <div class="modal-stat-box"><span class="text-cyan font-mono text-xl font-bold">2.0s</span><span class="text-xs text-muted block">Cloud AI Loop</span></div>
          <div class="modal-stat-box"><span class="text-cyan font-mono text-xl font-bold">512-D</span><span class="text-xs text-muted block">FaceNet Vector</span></div>
          <div class="modal-stat-box"><span class="text-cyan font-mono text-xl font-bold">0.0%</span><span class="text-xs text-muted block">UI Latency</span></div>
        </div>

        <div class="modal-cta-row">
          <a href="https://github.com/WasifAli-IT" target="_blank" rel="noopener" class="cyber-btn cyber-btn-primary">
            <span class="btn-text">VIEW SOURCE CODE ON GITHUB</span>
            <span class="btn-icon">↗</span>
          </a>
        </div>
      </div>
    `
  },
  {
    id: "research-vault",
    number: "SYS_02",
    category: "security",
    categoryLabel: "SECURITY // OFFLINE APPLIED CRYPTOGRAPHY",
    title: "Research Vault",
    tagline: "Private Offline Desktop Research Vault Protected by AES-256-GCM & Argon2id",
    desc: "A fully offline, encryption-secured research management desktop application featuring Markdown editor with live preview, SQLite FTS5 full-text search, automated backups, and encrypted vault storage with brute-force throttling.",
    image: "assets/screenshot-1.png",
    accentColor: "#a855f7",
    tags: ["Python", "PySide6", "Argon2id", "AES-256-GCM", "SQLite FTS5", "PyInstaller"],
    githubUrl: "https://github.com/WasifAli-IT/research-vault",
    stats: [
      { label: "Encryption", value: "AES-256" },
      { label: "KDF Derivation", value: "Argon2id" },
      { label: "Automated Tests", value: "104 Passing" },
      { label: "Network Access", value: "0 (Air-Gapped)" }
    ],
    fullCaseStudy: `
      <div class="case-study-content">
        <h3 class="text-white font-display text-2xl mb-3">Project Overview</h3>
        <p class="text-secondary leading-relaxed mb-4">
          Research Vault is designed for researchers, analysts, and students who require absolute data privacy. 
          Unlike cloud-dependent note-taking applications, Research Vault operates completely offline, ensuring sensitive 
          intellectual property is stored locally and protected with modern authenticated cryptographic algorithms.
        </p>

        <h4 class="text-cyan font-mono text-sm uppercase mb-2">// Security &amp; Architectural Highlights</h4>
        <ul class="space-y-2 text-secondary mb-6 font-sans">
          <li><strong>Argon2id Key Derivation:</strong> Memory-hard key stretching preventing GPU/ASIC brute-force cracking.</li>
          <li><strong>AES-256-GCM Authenticated Encryption:</strong> Cryptographic integrity and confidentiality ensuring zero tampering.</li>
          <li><strong>SQLite FTS5 Full-Text Search:</strong> Instant indexed search across thousands of research notes and sources.</li>
          <li><strong>Clean Layered Architecture:</strong> Strict separation of repositories, core models, cryptographic services, and PySide6 UI views with 104 automated test suites.</li>
        </ul>

        <div class="modal-cta-row">
          <a href="https://github.com/WasifAli-IT/research-vault" target="_blank" rel="noopener" class="cyber-btn cyber-btn-primary">
            <span class="btn-text">VIEW SOURCE CODE ON GITHUB</span>
            <span class="btn-icon">↗</span>
          </a>
        </div>
      </div>
    `
  },
  {
    id: "neural-sentinel-bot",
    number: "SYS_03",
    category: "ai",
    categoryLabel: "AUTONOMOUS AGENTS // DISTRIBUTED TELEMETRY",
    title: "Neural Sentinel Telemetry Bot",
    tagline: "Cloud Webhook Gateway for Remote Computer Vision Auditing",
    desc: "A headless distributed alert relay bridging CCTV cameras to Telegram and NTFY cloud endpoints, delivering instant snapshot verification, incident logging, and automated threat acknowledgment via secure webhooks.",
    image: "assets/cyber-telemetry-hud.jpg",
    accentColor: "#10b981",
    tags: ["Python", "FastAPI / Requests", "Telegram Bot API", "NTFY Webhooks", "Docker"],
    githubUrl: "https://github.com/WasifAli-IT",
    stats: [
      { label: "Delivery Speed", value: "< 400ms" },
      { label: "Uptime Relay", value: "99.98%" },
      { label: "Channels", value: "Telegram/NTFY" },
      { label: "Payload Enc", value: "TLS 1.3" }
    ],
    fullCaseStudy: `
      <div class="case-study-content">
        <h3 class="text-white font-display text-2xl mb-3">Project Overview</h3>
        <p class="text-secondary leading-relaxed mb-4">
          A headless microservice designed to decouple heavy deep learning pipelines from real-time communication relays. 
          When edge CCTV devices detect an incident, this engine asynchronously streams watermarked evidence snapshots to 
          multiple remote operators with zero UI blocking.
        </p>
        <div class="modal-cta-row">
          <a href="https://github.com/WasifAli-IT" target="_blank" rel="noopener" class="cyber-btn cyber-btn-primary">
            <span class="btn-text">EXPLORE ARCHITECTURE</span>
            <span class="btn-icon">↗</span>
          </a>
        </div>
      </div>
    `
  },
  {
    id: "kinetic-vector-engine",
    number: "SYS_04",
    category: "python",
    categoryLabel: "SYSTEMS // SUB-MILLISECOND OPTICAL KINETICS",
    title: "Kinetic Vector Motion Engine",
    tagline: "High-Speed Optical Velocity Tracker for Security Surveillance",
    desc: "A lightweight CPU-optimized motion vector engine utilizing downscaled morphological frame differencing and centroid tracking to measure kinetic energy spikes in security camera fields of view.",
    image: "assets/smart-vision-hd.jpg",
    accentColor: "#f59e0b",
    tags: ["Python 3.14", "OpenCV", "NumPy Vectorization", "Kinetic Physics"],
    githubUrl: "https://github.com/WasifAli-IT",
    stats: [
      { label: "Execution Time", value: "0.22ms" },
      { label: "Resolution", value: "160x120 Grid" },
      { label: "Noise Filter", value: "Morph Open" },
      { label: "Platform", value: "CPU Only" }
    ],
    fullCaseStudy: `
      <div class="case-study-content">
        <h3 class="text-white font-display text-2xl mb-3">Project Overview</h3>
        <p class="text-secondary leading-relaxed mb-4">
          High-resolution 4K CCTV streams often overload CPU resources when performing continuous image processing. 
          The Kinetic Vector Motion Engine downscales frames to a 160x120 coordinate lattice, applies Gaussian blur and 
          morphological filtering, and calculates instant pixel energy flux in under 0.25 milliseconds.
        </p>
        <div class="modal-cta-row">
          <a href="https://github.com/WasifAli-IT" target="_blank" rel="noopener" class="cyber-btn cyber-btn-primary">
            <span class="btn-text">VIEW REPOSITORY</span>
            <span class="btn-icon">↗</span>
          </a>
        </div>
      </div>
    `
  }
];

// ============================================================================
// 2. WEB AUDIO API SYNTHESIZER (CYBER ACOUSTIC FEEDBACK)
// ============================================================================
class CyberAudioEngine {
  constructor() {
    this.ctx = null;
    this.enabled = false;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  playBlip(freq = 1900, duration = 0.04, type = "sine") {
    if (!this.enabled || !this.ctx) return;
    try {
      if (this.ctx.state === "suspended") {
        this.ctx.resume();
      }
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.7, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay restrictions gracefully handled
    }
  }

  playClick() {
    this.playBlip(2400, 0.03, "triangle");
  }

  playHover() {
    this.playBlip(1800, 0.02, "sine");
  }

  toggle() {
    this.init();
    this.enabled = !this.enabled;
    return this.enabled;
  }
}

const audioEngine = new CyberAudioEngine();

// ============================================================================
// 3. 3D WEBGL PARTICLE SYSTEM & ADAPTIVE CYBER DATA MESH (THREE.JS)
// ============================================================================
class WebGLCyberBackground {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas || typeof THREE === "undefined") return;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 28;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.scrollProgress = 0;

    // Dynamic color management (morphs when viewing projects)
    this.currentColor = new THREE.Color("#00f0ff");
    this.targetColor = new THREE.Color("#00f0ff");

    this.initObjects();
    this.initListeners();
    this.animate();
  }

  initObjects() {
    // -------------------------------------------------------------
    // Object A: 3D Holographic Cyber Core (Geometric Lattice)
    // -------------------------------------------------------------
    const geom = new THREE.IcosahedronGeometry(8.5, 2);
    this.coreMaterial = new THREE.MeshBasicMaterial({
      color: this.currentColor,
      wireframe: true,
      transparent: true,
      opacity: 0.18
    });
    this.coreMesh = new THREE.Mesh(geom, this.coreMaterial);
    this.scene.add(this.coreMesh);

    // Inner glowing ring
    const ringGeom = new THREE.TorusGeometry(12, 0.05, 16, 100);
    this.ringMaterial = new THREE.MeshBasicMaterial({
      color: this.currentColor,
      transparent: true,
      opacity: 0.25
    });
    this.ringMesh = new THREE.Mesh(ringGeom, this.ringMaterial);
    this.ringMesh.rotation.x = Math.PI / 2.5;
    this.scene.add(this.ringMesh);

    // -------------------------------------------------------------
    // Object B: 2,500 Dynamic Stardust Particles
    // -------------------------------------------------------------
    const particleCount = 2200;
    const posArray = new Float32Array(particleCount * 3);
    const scaleArray = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 80;
      posArray[i + 1] = (Math.random() - 0.5) * 80;
      posArray[i + 2] = (Math.random() - 0.5) * 60;
      scaleArray[i / 3] = Math.random() * 0.8 + 0.2;
    }

    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    particleGeom.setAttribute("scale", new THREE.BufferAttribute(scaleArray, 1));

    // Particle Material with Soft Glow
    this.particleMaterial = new THREE.PointsMaterial({
      color: this.currentColor,
      size: 0.16,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });

    this.particleMesh = new THREE.Points(particleGeom, this.particleMaterial);
    this.scene.add(this.particleMesh);
  }

  setAccentColor(hexColor) {
    this.targetColor.set(hexColor);
    document.documentElement.style.setProperty("--accent-color", hexColor);
  }

  initListeners() {
    window.addEventListener("resize", () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    window.addEventListener("mousemove", (e) => {
      this.mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    window.addEventListener("scroll", () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      this.scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // Smooth lerp mouse coordinates
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    // Smooth lerp colors
    this.currentColor.lerp(this.targetColor, 0.05);
    this.coreMaterial.color.copy(this.currentColor);
    this.ringMaterial.color.copy(this.currentColor);
    this.particleMaterial.color.copy(this.currentColor);

    // Rotate Core
    if (this.coreMesh) {
      this.coreMesh.rotation.x += 0.002;
      this.coreMesh.rotation.y += 0.003;
      this.coreMesh.position.x = this.mouse.x * 2.5;
      this.coreMesh.position.y = this.mouse.y * 2.5 - this.scrollProgress * 15;
    }

    if (this.ringMesh) {
      this.ringMesh.rotation.z += 0.004;
      this.ringMesh.position.x = this.mouse.x * 1.5;
      this.ringMesh.position.y = this.mouse.y * 1.5 - this.scrollProgress * 15;
    }

    // Rotate Particles
    if (this.particleMesh) {
      this.particleMesh.rotation.y = this.mouse.x * 0.2 + this.scrollProgress * 2.5;
      this.particleMesh.rotation.x = -this.mouse.y * 0.2;
    }

    // Camera subtle breathing
    this.camera.position.x = this.mouse.x * 1.2;
    this.camera.position.y = this.mouse.y * 1.2;

    this.renderer.render(this.scene, this.camera);
  }
}

// ============================================================================
// 4. INTERACTIVE CUSTOM CYBER CURSOR
// ============================================================================
class CyberCursor {
  constructor() {
    this.cursor = document.getElementById("cyber-cursor");
    this.follower = document.getElementById("cyber-cursor-follower");
    this.hud = document.getElementById("cyber-cursor-hud");
    this.coordsEl = this.hud ? this.hud.querySelector(".hud-coords") : null;

    if (!this.cursor || !this.follower) return;

    this.pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    this.mouse = { x: this.pos.x, y: this.pos.y };

    this.init();
  }

  init() {
    window.addEventListener("mousemove", (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;

      this.cursor.style.transform = `translate(${this.mouse.x}px, ${this.mouse.y}px)`;

      if (this.coordsEl && Math.random() > 0.4) {
        this.coordsEl.textContent = `X:${String(Math.round(this.mouse.x)).padStart(4, '0')} Y:${String(Math.round(this.mouse.y)).padStart(4, '0')}`;
        this.hud.style.transform = `translate(${this.mouse.x + 14}px, ${this.mouse.y + 14}px)`;
      }
    });

    this.animateFollower();
    this.bindHoverElements();
  }

  animateFollower() {
    requestAnimationFrame(() => this.animateFollower());
    this.pos.x += (this.mouse.x - this.pos.x) * 0.18;
    this.pos.y += (this.mouse.y - this.pos.y) * 0.18;
    this.follower.style.transform = `translate(${this.pos.x}px, ${this.pos.y}px)`;
  }

  bindHoverElements() {
    const interactiveSelectors = "a, button, .cyber-project-card, .feature-card, .arsenal-card, .hologram-btn, .cmd-pill, input";
    document.querySelectorAll(interactiveSelectors).forEach((el) => {
      el.addEventListener("mouseenter", () => {
        document.body.classList.add("cursor-hover");
        audioEngine.playHover();
      });
      el.addEventListener("mouseleave", () => {
        document.body.classList.remove("cursor-hover");
      });
      el.addEventListener("click", () => {
        audioEngine.playClick();
      });
    });
  }
}

// ============================================================================
// 5. DECRYPTING TYPED SCRAMBLER EFFECT
// ============================================================================
class TextScrambler {
  constructor(el) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________ABCDEF0123456789";
    this.phrases = [
      "ENGINEERING AUTONOMOUS AI & CCTV DEFENSE SUITES",
      "ZERO-LAG EDGE DEEP LEARNING (60+ FPS ON INTEL CPU)",
      "2.0s GOOGLE GEMINI FLASH CLOUD SENTINEL INTEGRATION",
      "FACENET 512-D BIOMETRIC ACCESS & MOBILE EVIDENCE PUSH"
    ];
    this.phraseIdx = 0;
    this.update = this.update.bind(this);
    this.startLoop();
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 20);
      this.queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(this.frameReq);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = "";
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.chars[Math.floor(Math.random() * this.chars.length)];
          this.queue[i].char = char;
        }
        output += `<span class="text-cyan">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;

    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameReq = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  startLoop() {
    const nextPhrase = () => {
      this.setText(this.phrases[this.phraseIdx]).then(() => {
        setTimeout(nextPhrase, 3600);
      });
      this.phraseIdx = (this.phraseIdx + 1) % this.phrases.length;
    };
    nextPhrase();
  }
}

// ============================================================================
// 6. MODULAR PROJECT GRID RENDERER
// ============================================================================
function renderProjectGrid(filter = "all") {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  const filtered = filter === "all" 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter((p) => p.category === filter);

  container.innerHTML = filtered.map((project, idx) => `
    <article class="cyber-project-card" 
             data-project-id="${project.id}" 
             data-accent="${project.accentColor}"
             style="--card-accent: ${project.accentColor}">
      <div class="project-card-header">
        <span class="project-category-tag font-mono">${project.categoryLabel}</span>
        <span class="project-card-number font-mono">${project.number}</span>
      </div>

      <div class="project-card-image-wrap">
        <img src="${project.image}" alt="${project.title}" class="project-card-image" loading="lazy" />
        <div class="card-scanline"></div>
      </div>

      <div class="project-card-body">
        <h3 class="project-card-title">${project.title}</h3>
        <p class="project-card-desc">${project.desc}</p>

        <div class="project-card-tags">
          ${project.tags.map((t) => `<span class="card-tag font-mono">${t}</span>`).join("")}
        </div>

        <div class="project-card-footer">
          <button class="card-link open-modal-btn font-mono" data-id="${project.id}">
            <span>VIEW CASE STUDY</span>
            <span>→</span>
          </button>
          <a href="${project.githubUrl}" target="_blank" rel="noopener" class="card-link font-mono" aria-label="GitHub Source">
            <span>GITHUB</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </article>
  `).join("");

  // Re-bind hover sounds and WebGL color morph
  bindProjectHoverEvents();
}

function bindProjectHoverEvents() {
  document.querySelectorAll(".cyber-project-card").forEach((card) => {
    const accent = card.dataset.accent;
    card.addEventListener("mouseenter", () => {
      if (window.cyberBg) {
        window.cyberBg.setAccentColor(accent);
      }
    });
    card.addEventListener("mouseleave", () => {
      if (window.cyberBg) {
        window.cyberBg.setAccentColor("#00f0ff");
      }
    });
  });

  document.querySelectorAll(".open-modal-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const id = btn.dataset.id;
      openProjectModal(id);
    });
  });
}

// ============================================================================
// 7. SPECIFICATION DOSSIER (CASE STUDY MODAL)
// ============================================================================
const modalOverlay = document.getElementById("project-modal");
const modalBody = document.getElementById("modal-body-content");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalCategory = document.getElementById("modal-project-category");

function openProjectModal(projectId) {
  const project = PROJECTS_DATA.find((p) => p.id === projectId);
  if (!project || !modalOverlay) return;

  if (modalCategory) modalCategory.textContent = project.categoryLabel;

  modalBody.innerHTML = `
    <div class="modal-dossier-header mb-6">
      <span class="font-mono text-cyan text-xs">${project.number} // DECLASSIFIED SPECIFICATION</span>
      <h2 class="font-display text-white text-3xl font-bold mt-1">${project.title}</h2>
      <p class="text-secondary text-sm font-mono mt-1">${project.tagline}</p>
    </div>

    ${project.fullCaseStudy}
  `;

  modalOverlay.classList.add("active");
  modalOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  audioEngine.playClick();
}

function closeProjectModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove("active");
  modalOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", closeProjectModal);
}
if (modalOverlay) {
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeProjectModal();
  });
}
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeProjectModal();
});

// Flagship Architecture Specs Button
const flagshipSpecsBtn = document.getElementById("open-smartvision-modal");
if (flagshipSpecsBtn) {
  flagshipSpecsBtn.addEventListener("click", () => openProjectModal("smart-vision"));
}

// ============================================================================
// 8. HOLOGRAPHIC SHOWCASE LENS (TAB CONTROLS)
// ============================================================================
function initHologramControls() {
  const buttons = document.querySelectorAll(".hologram-btn");
  const views = document.querySelectorAll(".media-view");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetView = btn.dataset.view;
      buttons.forEach((b) => b.classList.remove("active"));
      views.forEach((v) => v.classList.remove("active"));

      btn.classList.add("active");
      const activeEl = document.getElementById(targetView);
      if (activeEl) activeEl.classList.add("active");

      audioEngine.playClick();
    });
  });
}

// ============================================================================
// 9. INTERACTIVE CYBER TERMINAL
// ============================================================================
function initTerminal() {
  const terminalInput = document.getElementById("terminal-input");
  const terminalBody = document.getElementById("terminal-body");
  const quickCmds = document.querySelectorAll(".cmd-pill");
  if (!terminalInput || !terminalBody) return;

  const commands = {
    help: `
      <div class="text-secondary font-mono text-xs leading-relaxed">
        <div class="text-cyan font-bold mb-1">// AVAILABLE TERMINAL COMMANDS:</div>
        <div><span class="text-white font-bold">sysinfo</span>    - Display hardware telemetry, python runtime & vision core</div>
        <div><span class="text-white font-bold">vision</span>     - Query Smart Vision Analyzer architecture specifications</div>
        <div><span class="text-white font-bold">projects</span>   - List all classified systems in repository</div>
        <div><span class="text-white font-bold">skills</span>     - Display technical arsenal & core competencies</div>
        <div><span class="text-white font-bold">manifesto</span>  - Read engineering philosophy & core principles</div>
        <div><span class="text-white font-bold">contact</span>    - Retrieve secure transmission channels & email</div>
        <div><span class="text-white font-bold">clear</span>      - Clear terminal screen</div>
      </div>
    `,
    projects: `
      <div class="text-secondary font-mono text-xs leading-relaxed">
        <div class="text-cyan font-bold mb-1">// CLASSIFIED SYSTEMS REPOSITORY:</div>
        <div>[SYS_01] <span class="text-white font-bold">Smart Vision Analyzer</span> (AI / Real-time CCTV Hazard Localization)</div>
        <div>[SYS_02] <span class="text-white font-bold">Research Vault</span> (Security / AES-256-GCM Air-Gapped Vault)</div>
        <div>[SYS_03] <span class="text-white font-bold">Neural Sentinel Telemetry Bot</span> (Distributed NTFY / Telegram Gateway)</div>
        <div>[SYS_04] <span class="text-white font-bold">Kinetic Vector Motion Engine</span> (Sub-millisecond Velocity Tracker)</div>
      </div>
    `,
    contact: `
      <div class="text-secondary font-mono text-xs leading-relaxed">
        <div class="text-cyan font-bold mb-1">// SECURE TRANSMISSION CHANNELS:</div>
        <div>DIRECT EMAIL : <span class="text-white font-bold">wasifali19477@gmail.com</span></div>
        <div>GITHUB PROFILE: <span class="text-white font-bold">https://github.com/WasifAli-IT</span></div>
        <div>LOCATION      : Lahore, Pakistan // CIT GCT</div>
      </div>
    `,
    sysinfo: `
      <div class="text-secondary">
        <div>// SYSTEM TELEMETRY SUMMARY</div>
        <div>OPERATING SYSTEM : Windows x64 / Intel Core i5 8th Gen (Optimized)</div>
        <div>PRIMARY RUNTIME   : Python 3.14 (AsyncIO, Threading, SIMD)</div>
        <div>VISION CORE       : YOLO11 + FaceNet (512-D) + OpenCV</div>
        <div>CLOUD ENGINE      : Google Gemini 3.5 Flash Multimodal (2.0s Loop)</div>
        <div>STATUS            : ALL DEFENSE SYSTEMS FULLY OPERATIONAL</div>
      </div>
    `,
    vision: `
      <div class="text-cyan">
        <div>// SMART VISION ANALYZER PROTOCOL</div>
        <div>Active Streams: 1x Local CCTV, 1x Background Multimodal Sentinel</div>
        <div>Zero False-Alarm Filter: Enabled (Phone/Chair Aspect Invariant)</div>
        <div>Mobile Notification Gateway: NTFY / Telegram Push Active</div>
      </div>
    `,
    manifesto: `
      <div class="text-white">
        <div>// WASIF ALI MANIFESTO</div>
        <div>"Real-world security software cannot afford false alarms or GPU bottlenecks."</div>
        <div>"I engineer zero-lag, thread-isolated architectures that deliver high-precision intelligence on standard hardware."</div>
      </div>
    `,
    skills: `
      <div class="text-secondary">
        <div>LANGUAGES: Python, C/C++, JavaScript (ES6+), SQL, HTML5/CSS3</div>
        <div>AI / VISION: YOLO11, FaceNet, Google Gemini Flash, OpenCV, PyTorch</div>
        <div>SECURITY: AES-256-GCM, Argon2id, Anti-Spoof Liveness, Digital Hashes</div>
      </div>
    `,
    help: `
      <div class="text-muted">Available commands: sysinfo, vision, manifesto, skills, clear</div>
    `,
    clear: ""
  };

  function executeCommand(cmdRaw) {
    const cmd = cmdRaw.trim().toLowerCase();
    if (cmd === "clear") {
      terminalBody.innerHTML = `
        <div class="terminal-line terminal-input-row" id="terminal-input-row">
          <span class="text-cyan">wasif@defense-suite:~$</span>
          <input type="text" class="terminal-input" id="terminal-input" autocomplete="off" spellcheck="false" />
        </div>
      `;
      initTerminal();
      return;
    }

    const outputHtml = commands[cmd] || `<div class="text-red-alert">Command not recognized: '${cmd}'. Type 'help' for options.</div>`;

    const entry = document.createElement("div");
    entry.className = "terminal-entry mb-3";
    entry.innerHTML = `
      <div class="terminal-line">
        <span class="text-cyan">wasif@defense-suite:~$</span> <span class="text-white">${cmd}</span>
      </div>
      <div class="terminal-output">${outputHtml}</div>
    `;

    const inputRow = document.getElementById("terminal-input-row");
    terminalBody.insertBefore(entry, inputRow);
    terminalInput.value = "";
    terminalBody.scrollTop = terminalBody.scrollHeight;
    audioEngine.playClick();
  }

  terminalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      executeCommand(terminalInput.value);
    }
  });

  quickCmds.forEach((btn) => {
    btn.addEventListener("click", () => {
      const cmd = btn.dataset.cmd;
      executeCommand(cmd);
    });
  });
}

// ============================================================================
// 10. TOAST NOTIFICATION HUD & COPY TO CLIPBOARD
// ============================================================================
function showCyberToast(msg) {
  const toast = document.getElementById("cyber-toast");
  const toastText = document.getElementById("toast-text");
  if (!toast || !toastText) return;

  toastText.textContent = msg;
  toast.classList.add("active");
  audioEngine.playBlip(2600, 0.05, "sine");

  setTimeout(() => {
    toast.classList.remove("active");
  }, 2800);
}

function initCopyEmail() {
  const copyBtn = document.getElementById("copy-email-btn");
  const emailEl = document.getElementById("email-address");

  if (copyBtn && emailEl) {
    copyBtn.addEventListener("click", () => {
      const email = emailEl.textContent.trim();
      navigator.clipboard.writeText(email).then(() => {
        showCyberToast("ENCRYPTED TARGET COPIED // wasifali19477@gmail.com");
      });
    });
  }
}

// ============================================================================
// 11. AUDIO FEEDBACK TOGGLE
// ============================================================================
function initAudioToggle() {
  const audioBtn = document.getElementById("audio-toggle-btn");
  if (!audioBtn) return;

  const label = audioBtn.querySelector(".audio-label");

  audioBtn.addEventListener("click", () => {
    const isNowOn = audioEngine.toggle();
    if (isNowOn) {
      audioBtn.classList.add("active");
      if (label) label.textContent = "FX: ON";
      showCyberToast("ACOUSTIC FEEDBACK SYNTHESIZER ACTIVATED");
    } else {
      audioBtn.classList.remove("active");
      if (label) label.textContent = "FX: OFF";
      showCyberToast("ACOUSTIC FEEDBACK MUTED");
    }
  });
}

// ============================================================================
// 12. MOBILE NAVIGATION DRAWER
// ============================================================================
function initMobileMenu() {
  const menuToggle = document.getElementById("mobile-menu-toggle");
  const drawer = document.getElementById("mobile-nav-drawer");
  const closeBtn = document.getElementById("mobile-drawer-close");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  if (!menuToggle || !drawer) return;

  menuToggle.addEventListener("click", () => {
    drawer.classList.add("active");
    audioEngine.playClick();
  });

  const closeMenu = () => {
    drawer.classList.remove("active");
  };

  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  mobileLinks.forEach((link) => link.addEventListener("click", closeMenu));
}

// ============================================================================
// 13. LENIS SMOOTH SCROLL & INITIALIZATION
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize 3D WebGL Canvas
  window.cyberBg = new WebGLCyberBackground("webgl-canvas");

  // 2. Initialize Custom Cyber Cursor
  new CyberCursor();

  // 3. Initialize Decrypting Text Scrambler
  const scramblerEl = document.getElementById("typed-scrambler");
  if (scramblerEl) new TextScrambler(scramblerEl);

  // 4. Render Modular Projects Grid
  renderProjectGrid("all");

  // Filter Tabs
  document.querySelectorAll(".filter-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".filter-tab").forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      renderProjectGrid(tab.dataset.filter);
      audioEngine.playClick();
    });
  });

  // 5. Initialize Holographic Showcase
  initHologramControls();

  // 6. Initialize Terminal
  initTerminal();

  // 7. Initialize Audio & Copy
  initAudioToggle();
  initCopyEmail();
  initMobileMenu();

  // 8. Footer Year
  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 9. Lenis Smooth Scroll
  if (typeof Lenis !== "undefined") {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync with GSAP ScrollTrigger if present
    if (typeof ScrollTrigger !== "undefined") {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }
  }

  // 10. FPS Counter Simulation in Header
  let lastTime = performance.now();
  let frameCount = 0;
  const fpsEl = document.getElementById("nav-fps");

  function updateFPS() {
    frameCount++;
    const now = performance.now();
    if (now - lastTime >= 1000) {
      const fps = Math.round((frameCount * 1000) / (now - lastTime));
      if (fpsEl) fpsEl.textContent = `${fps} FPS`;
      frameCount = 0;
      lastTime = now;
    }
    requestAnimationFrame(updateFPS);
  }
  updateFPS();
});
