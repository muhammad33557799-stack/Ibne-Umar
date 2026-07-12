document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.getElementById("hamburgerBtn"); // dash hata diya, neeche wajah dekho
  const mobileMenu = document.getElementById("mobile-menu");
  const navbar = document.querySelector(".navbar"); // .nav-container nahi, wajah neeche

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
