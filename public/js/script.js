const scrollBtn = document.getElementById("scrolltotop");

scrollBtn.onclick = function () {
    window.scrollTo({ top:0, behavior: "smooth" })
};
