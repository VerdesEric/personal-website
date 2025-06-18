//scroll to top button
const scrollBtn = document.getElementById("scrolltotop");

scrollBtn.onclick = function () {
    window.scrollTo({ top:0, behavior: "smooth" })
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scaled");
      } else {
        entry.target.classList.remove("scaled");
      }
    });
  }, { threshold: 0.2 });

document.querySelectorAll('.scroll-scale').forEach(el => observer.observe(el));
