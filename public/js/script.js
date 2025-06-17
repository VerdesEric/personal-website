//scroll to top button
const scrollBtn = document.getElementById("scrolltotop");

scrollBtn.onclick = function () {
    window.scrollTo({ top:0, behavior: "smooth" })
};

// //scale section
// const revealObserver = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("visible");
//     }
//   });
// }, {
//   threshold: 0.3
// });

// document.querySelectorAll(".reveal-on-scroll").forEach(el => {
//   revealObserver.observe(el);
// });
