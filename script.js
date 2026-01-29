document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!hamburger || !mobileMenu) {
    console.error("Hamburger or mobile menu not found");
    return;
  }

  hamburger.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });

  // Close menu when a link is clicked
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
});
