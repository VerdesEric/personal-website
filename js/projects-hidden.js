document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".project-block").forEach(block => {
    const button  = block.querySelector(".project-item");
    const content = block.querySelector(".project-content");
    const plus    = block.querySelector(".plus");

    button.addEventListener("click", () => {
      content.classList.toggle("hidden");
      plus.classList.toggle("open");
    });
  });
});
