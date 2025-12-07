document.querySelectorAll(".project-item").forEach(btn => {
  btn.addEventListener("click", () => {
    const plus = btn.querySelector(".plus");
    plus.classList.toggle("open");
  });
});
