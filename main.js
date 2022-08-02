const sidebar = document.querySelector(".sidebar");
const hamburgerBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");

hamburgerBtn.addEventListener("click", () => {
  console.log("click");
  sidebar.classList.toggle("show-links");
});
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-links");
});
