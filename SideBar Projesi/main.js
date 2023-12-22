const sidebar = document.querySelector(".sidebar");
const bar = document.querySelector(".fa-bars");
const header = document.querySelector(".fa-xmark");


bar.addEventListener("click", e => {
  sidebar.classList.toggle("showSidebar");
});

header.addEventListener("click", () => {
  sidebar.classList.remove("showSidebar");
})






