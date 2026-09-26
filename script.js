// DOM Elements
const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll("#navMenu a");
const sections = document.querySelectorAll("section[id]");

// Theme Management
const THEME_KEY = "tq_portfolio_theme";

function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀";
    themeBtn.setAttribute("title", "Chuyển sang giao diện sáng");
  } else {
    document.body.classList.remove("dark");
    themeBtn.textContent = "☾";
    themeBtn.setAttribute("title", "Chuyển sang giao diện tối");
  }
}

themeBtn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  themeBtn.textContent = isDark ? "☀" : "☾";
  themeBtn.setAttribute("title", isDark ? "Chuyển sang giao diện sáng" : "Chuyển sang giao diện tối");
  localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
});

// Mobile Menu Navigation
menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  const isOpen = navMenu.classList.contains("open");
  menuBtn.textContent = isOpen ? "✕" : "☰";
  menuBtn.setAttribute("aria-label", isOpen ? "Đóng menu điều hướng" : "Mở menu điều hướng");
});

// Close mobile menu when clicking any nav link
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

// Close mobile menu if clicked outside
document.addEventListener("click", (e) => {
  if (navMenu.classList.contains("open") && !navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    navMenu.classList.remove("open");
    menuBtn.textContent = "☰";
  }
});

// Scroll Reveal Animation via IntersectionObserver
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: "0px 0px -40px 0px"
});

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// Active Nav link based on current scroll position
function updateActiveNavLink() {
  const scrollY = window.pageYOffset + 120;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", updateActiveNavLink, { passive: true });

// Run initial setups
initTheme();
updateActiveNavLink();
