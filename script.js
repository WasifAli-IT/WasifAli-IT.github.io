// ---------- Typing animation ----------
const phrases = [
  "Python Developer in Training",
  "Web Development Student",
  "Building Secure, Offline-First Software",
  "Turning Ideas Into Working Code"
];

const typedTextEl = document.querySelector(".typed-text");
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typedTextEl.textContent = currentPhrase.substring(0, charIndex);

  let typingSpeed = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === currentPhrase.length) {
    typingSpeed = 1800; // pause at full phrase
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typingSpeed = 400;
  }

  setTimeout(typeLoop, typingSpeed);
}

if (typedTextEl) {
  typeLoop();
}

// ---------- Scroll reveal animation ----------
const revealEls = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el) => revealObserver.observe(el));

// ---------- Footer year ----------
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
// ---------- Screenshot slider ----------
const slides = document.querySelectorAll(".screenshot-slider .slide");
const dots = document.querySelectorAll(".slider-dots .dot");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));
  slides[index].classList.add("active");
  dots[index].classList.add("active");
  currentSlide = index;
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showSlide(Number(dot.dataset.index));
  });
});

if (slides.length > 1) {
  setInterval(() => {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }, 4000);
}
// ---------- Lightbox ----------
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

const slideImages = Array.from(document.querySelectorAll(".screenshot-slider .slide"));
let lightboxIndex = 0;

function openLightbox(index) {
  lightboxIndex = index;
  lightboxImg.src = slideImages[lightboxIndex].src;
  lightbox.classList.add("active");
}

function closeLightbox() {
  lightbox.classList.remove("active");
}

function showLightboxImage(index) {
  lightboxIndex = (index + slideImages.length) % slideImages.length;
  lightboxImg.src = slideImages[lightboxIndex].src;
}

slideImages.forEach((img, index) => {
  img.addEventListener("click", () => openLightbox(index));
});

lightboxClose.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", () => showLightboxImage(lightboxIndex - 1));
lightboxNext.addEventListener("click", () => showLightboxImage(lightboxIndex + 1));

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") showLightboxImage(lightboxIndex - 1);
  if (e.key === "ArrowRight") showLightboxImage(lightboxIndex + 1);
});