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
const calculatorInsight = document.querySelector("#calculator-insight");
const intakeForm = document.querySelector(".intake-form");
const intakeSteps = Array.from(document.querySelectorAll(".intake-step"));
const intakeNext = document.querySelector(".intake-next");
const intakeError = document.querySelector(".intake-error");
const intakeSuccess = document.querySelector(".intake-success");
const intakeProgress = document.querySelector(".intake-progress");
const intakeProgressFill = document.querySelector(".intake-progress-fill");
const intakeProgressLabel = document.querySelector(".intake-progress-label");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const screenNames = ["learner", "admin", "mentor"];
let userChangedShowcase = false;
let activeScreenIndex = 0;
let intakeStepIndex = 0;

function updateHeader() {
  if (!header) return;

  const hero = document.querySelector(".hero");
  const pastHero = hero ? window.scrollY > hero.offsetHeight - 90 : window.scrollY > 18;

  header.classList.toggle("scrolled", window.scrollY > 18);
  header.classList.toggle("past-hero", pastHero);
}

function updateCalculator() {
  if (!newHires || !trainingHours || !hourCost || !monthlyHours || !monthlyCost || !calculatorInsight) return;

  const hires = Number(newHires.value);
  const hours = Number(trainingHours.value);
  const cost = Number(hourCost.value);
  const totalHours = hires * hours;
  const newHiresValue = document.querySelector("#new-hires-value");
  const trainingHoursValue = document.querySelector("#training-hours-value");
  const hourCostValue = document.querySelector("#hour-cost-value");

  if (newHiresValue) newHiresValue.textContent = hires;
  if (trainingHoursValue) trainingHoursValue.textContent = `${hours} uur`;
  if (hourCostValue) hourCostValue.textContent = formatEuro.format(cost);
  monthlyHours.textContent = totalHours;
  monthlyCost.textContent = formatEuro.format(totalHours * cost);

  const annualCost = totalHours * cost * 12;
  const insight =
    totalHours * cost >= 5000
      ? `Jullie geven meer dan ${formatEuro.format(annualCost)} per jaar uit aan herhaling. Dat kan anders.`
      : `Jullie geven ongeveer ${formatEuro.format(annualCost)} per jaar uit aan herhaling die te systematiseren is.`;
  calculatorInsight.textContent = insight;
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

function closeMobileMenu() {
  if (!menuToggle || !mobileMenu) return;

  mobileMenu.hidden = true;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Menu openen");
}

function toggleMobileMenu() {
  if (!menuToggle || !mobileMenu) return;

  const nextOpen = mobileMenu.hidden;
  mobileMenu.hidden = !nextOpen;
  menuToggle.setAttribute("aria-expanded", String(nextOpen));
  menuToggle.setAttribute("aria-label", nextOpen ? "Menu sluiten" : "Menu openen");
}

function getActiveIntakeStep() {
  return intakeSteps[intakeStepIndex];
}

function updateIntakeProgress() {
  if (!intakeForm || !intakeNext || !intakeProgress || !intakeProgressFill || !intakeProgressLabel) return;

  const total = intakeSteps.length;
  const current = intakeStepIndex + 1;
  const percent = total > 1 ? Math.round(((current - 1) / total) * 100) : 100;
  intakeProgressFill.style.width = `${percent}%`;
  intakeProgressLabel.textContent = `${percent}%`;
  intakeProgress.setAttribute("aria-valuenow", String(percent));
  intakeNext.textContent = current === total ? "Versturen" : "Volgende";

  intakeSteps.forEach((step, index) => {
    const active = index === intakeStepIndex;
    step.classList.toggle("active", active);
    step.setAttribute("aria-hidden", String(!active));
    step.querySelector(".intake-back")?.toggleAttribute("disabled", index === 0);
  });

  if (intakeError) intakeError.textContent = "";
  const focusable = getActiveIntakeStep()?.querySelector(
    "input:not([type='radio']), textarea, input[type='radio']"
  );
  setTimeout(() => focusable?.focus(), 80);
}

function validateIntakeStep() {
  const activeStep = getActiveIntakeStep();
  if (!activeStep || !intakeForm) return "";

  const requiredFields = Array.from(activeStep.querySelectorAll("[required]"));

  for (const field of requiredFields) {
    if (field.type === "radio") {
      const checked = intakeForm.querySelector(`input[name="${field.name}"]:checked`);
      if (!checked) {
        return "Kies een optie om verder te gaan.";
      }
    } else if (!field.value.trim()) {
      return "Vul dit veld in om verder te gaan.";
    } else if (field.type === "email" && !field.checkValidity()) {
      return "Vul een geldig e-mailadres in.";
    }
  }

  return "";
}

function showIntakeSuccess() {
  if (!intakeForm || !intakeSuccess || !intakeNext || !intakeProgress || !intakeProgressFill || !intakeProgressLabel) return;

  const data = new FormData(intakeForm);
  const name = data.get("naam")?.toString().trim();
  const successTitle = intakeSuccess.querySelector("h3");
  const greeting = name ? `Dankjewel ${name}. We hebben je intake ontvangen.` : "Dankjewel. We hebben je intake ontvangen.";

  if (successTitle) successTitle.textContent = greeting;
  intakeSteps.forEach((step) => (step.hidden = true));
  intakeProgressFill.style.width = "100%";
  intakeProgressLabel.textContent = "100%";
  intakeProgress.setAttribute("aria-valuenow", "100");
  intakeSuccess.hidden = false;
  intakeNext.hidden = true;
  if (intakeError) intakeError.textContent = "";
  intakeForm.querySelector(".intake-actions > p:last-child")?.setAttribute("hidden", "");
}

function goToNextIntakeStep() {
  const message = validateIntakeStep();
  if (message) {
    if (intakeError) intakeError.textContent = message;
    return;
  }

  if (intakeStepIndex === intakeSteps.length - 1) {
    showIntakeSuccess();
    return;
  }

  intakeStepIndex += 1;
  updateIntakeProgress();
}

function goToPreviousIntakeStep() {
  if (intakeStepIndex === 0) return;
  intakeStepIndex -= 1;
  updateIntakeProgress();
}

if ("IntersectionObserver" in window) {
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
} else {
  revealItems.forEach((item) => item.classList.add("in-view"));
}

[newHires, trainingHours, hourCost].forEach((input) => {
  input?.addEventListener("input", updateCalculator);
});

document.querySelectorAll(".screen-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    userChangedShowcase = true;
    activeScreenIndex = screenNames.indexOf(tab.dataset.screen);
    activateScreen(tab.dataset.screen);
  });
});

const showcase = document.querySelector(".platform-showcase");
if (showcase) {
  setInterval(() => {
    const isHovered = showcase.matches(":hover");
    const isMobile = window.matchMedia("(max-width: 720px)").matches;

    if (!isHovered && !isMobile && !userChangedShowcase) {
      activeScreenIndex = (activeScreenIndex + 1) % screenNames.length;
      activateScreen(screenNames[activeScreenIndex]);
    }
  }, 9000);
}

intakeNext?.addEventListener("click", goToNextIntakeStep);
intakeForm?.querySelectorAll(".intake-back").forEach((button) => {
  button.addEventListener("click", goToPreviousIntakeStep);
});
intakeForm?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (event.target.tagName === "TEXTAREA" && event.shiftKey) return;
    event.preventDefault();
    goToNextIntakeStep();
  }

  if (event.key === "Escape") {
    event.preventDefault();
    goToPreviousIntakeStep();
  }
});

menuToggle?.addEventListener("click", toggleMobileMenu);
mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 981px)").matches) closeMobileMenu();
});
window.addEventListener("load", () => {
  updateHeader();
  updateCalculator();
  updateIntakeProgress();

  if (window.lucide) {
    window.lucide.createIcons();
  }
});
