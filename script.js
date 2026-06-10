const formatEuro = new Intl.NumberFormat("nl-BE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const header = document.querySelector(".site-header");
const revealItems = document.querySelectorAll(".reveal");
const newHires = document.querySelector("#new-hires");
const trainingHours = document.querySelector("#training-hours");
const hourCost = document.querySelector("#hour-cost");
const monthlyCost = document.querySelector("#monthly-cost");
const monthlyHours = document.querySelector("#monthly-hours");
const form = document.querySelector(".scan-form");
const formStatus = document.querySelector(".form-status");

function updateHeader() {
  const hero = document.querySelector(".hero");
  const pastHero = hero ? window.scrollY > hero.offsetHeight - 90 : window.scrollY > 18;

  header.classList.toggle("scrolled", window.scrollY > 18);
  header.classList.toggle("past-hero", pastHero);
}

function updateCalculator() {
  const hires = Number(newHires.value);
  const hours = Number(trainingHours.value);
  const cost = Number(hourCost.value);
  const totalHours = hires * hours;

  document.querySelector("#new-hires-value").textContent = hires;
  document.querySelector("#training-hours-value").textContent = `${hours} uur`;
  document.querySelector("#hour-cost-value").textContent = formatEuro.format(cost);
  monthlyHours.textContent = totalHours;
  monthlyCost.textContent = formatEuro.format(totalHours * cost);
}

function activateScreen(screenName) {
  document.querySelectorAll(".screen-tab").forEach((tab) => {
    const isActive = tab.dataset.screen === screenName;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  document.querySelectorAll(".platform-screen").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.panel === screenName);
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealItems.forEach((item, index) => {
  item.style.animationDelay = `${Math.min(index % 4, 3) * 80}ms`;
  observer.observe(item);
});

[newHires, trainingHours, hourCost].forEach((input) => {
  input.addEventListener("input", updateCalculator);
});

document.querySelectorAll(".screen-tab").forEach((tab) => {
  tab.addEventListener("click", () => activateScreen(tab.dataset.screen));
});

let activeScreenIndex = 0;
const screenNames = ["learner", "admin", "mentor"];

setInterval(() => {
  const showcase = document.querySelector(".platform-showcase");
  const isHovered = showcase.matches(":hover");

  if (!isHovered) {
    activeScreenIndex = (activeScreenIndex + 1) % screenNames.length;
    activateScreen(screenNames[activeScreenIndex]);
  }
}, 5200);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = "Bedankt. De aanvraag staat klaar om te koppelen aan jullie formulierflow.";
  form.reset();
});

window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("load", () => {
  updateHeader();
  updateCalculator();

  if (window.lucide) {
    window.lucide.createIcons();
  }
});
