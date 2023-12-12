const swiper = new Swiper(".swiper", {
   // Optional parameters
   direction: "horizontal",
   loop: true,

   // If we need pagination
   pagination: {
      el: ".swiper-pagination",
   },

   // Navigation arrows
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },

   // And if we need scrollbar
   scrollbar: {
      el: ".swiper-scrollbar",
   },
});

let burgerElement = document.querySelector(".burger");

burgerElement.addEventListener("click", function () {
   this.classList.toggle("active");
   document.querySelector(".header__shell").classList.toggle("active");
   document.body.classList.toggle("lock");
});

function addClassOnResize() {
   let elements = document.querySelectorAll(".organisation__block");

   let fifthElement = elements[4];
   let sixthElement = elements[5];

   let windowWidth = window.innerWidth;
   if (windowWidth <= 400) {
      fifthElement.classList.add("title");
      sixthElement.classList.add("title");
   } else {
      fifthElement.classList.remove("title");
      sixthElement.classList.remove("title");
   }
}

document.addEventListener("DOMContentLoaded", addClassOnResize);
window.addEventListener("resize", addClassOnResize);
