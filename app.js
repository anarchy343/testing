openBtn = document.querySelector(".hamburger");
menu = document.querySelector("header ul");

openBtn.addEventListener("click", () => {
    menu.classList.toggle("open")
});

// openBtn.addEventListener("click", () => {
//     menu.classList.toggle("open");
// });

// window.addEventListener('scroll', function() {
//     // var nav = document.getElementById('navbar');
//     if (window.scrollY > 70) {
//         menu.classList.add('fixed-nav');
//     } else {
//         menu.classList.remove('fixed-nav');
//     }
// });
