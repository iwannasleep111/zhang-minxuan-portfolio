// ---------- Projects data ----------
// Add new projects by adding another object to this array.
// Each project needs: title, date, role, description.
const projects = [
  {
    title: "The Impact of Digital Economy on International Taxation",
    date: "2025",
    role: "Course Project · Team Member",
    description:
      "Researched taxation challenges in the digital economy, analyzed the OECD Pillar One and Pillar Two proposals, and presented findings and policy recommendations in class."
  }
  // Example of how to add your next project:
  // {
  //   title: "Your Project Title",
  //   date: "2026",
  //   role: "Your Role",
  //   description: "A short description of what you did and the outcome."
  // },
];

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <span class="project-date">${project.date}</span>
      <h3>${project.title}</h3>
      <p class="timeline-role">${project.role}</p>
      <p>${project.description}</p>
    `;
    grid.appendChild(card);
  });

  // Placeholder card inviting future additions
  const placeholder = document.createElement("div");
  placeholder.className = "project-card placeholder";
  placeholder.innerHTML = `
    <span class="plus">+</span>
    <p>More projects coming soon</p>
  `;
  grid.appendChild(placeholder);
}

// ---------- Mobile nav toggle ----------
function setupNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ---------- Scroll reveal ----------
function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((item) => observer.observe(item));
}

// ---------- Footer year ----------
function setYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setupNav();
  setupReveal();
  setYear();
});
