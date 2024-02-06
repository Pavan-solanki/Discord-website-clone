const sidebars=document.querySelector(".sidebar");
const menu=document.querySelector(".menu");
const cancel=document.querySelector(".cancel");
const logo=document.querySelector(".logo");
const btn=document.querySelector(".btn-login");
document.addEventListener("DOMContentLoaded", function() {
  // Your event listener and code here
  menu.addEventListener("click",(e)=>{
    e.preventDefault();
    sidebars.classList.add("active");
    sidebars.classList.remove("inactive");
    // sidebars.style.display="flex";
    // logo.classList.add("noview");
    btn.classList.add("new");
});
cancel.addEventListener("click",(e)=>{
    e.preventDefault();
    sidebars.classList.add("inactive");
    sidebars.classList.remove("active");
    // logo.classList.add("view");
});
});
