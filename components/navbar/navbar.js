const hamburgerButton = document.querySelector(".menu-hamburger-button");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");
const logoName = document.querySelector(".logo-name-link");

// =========== Functions ==============

// I am also updating aria-expanded to reflect the current mobile menu state for accessibility (screen readers)

function closeMobileMenu() {
  mobileMenu.classList.remove("show");
  hamburgerButton.setAttribute("aria-expanded", false);
}

function toggleMobileMenu() {
  const isOpen = mobileMenu.classList.toggle("show"); // Toggles mobile menu visibility and returns whether it is open (true) or closed (false)
  hamburgerButton.setAttribute("aria-expanded", isOpen);
}
// ============== Event listeners================= //

// Closes mobile menu when a navigation link is clicked
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

// Close the mobile menu when the logo-name is clicked so the home section becomes visible
logoName.addEventListener("click", closeMobileMenu);

// Toggles mobile menu visibility when hamburger button is clicked
hamburgerButton.addEventListener("click", toggleMobileMenu);