let menu_btn = document.querySelector(".menu");
let responsive_nav = document.querySelector(".res-nav");
let cross_btn = document.querySelector(".cross");

menu_btn.addEventListener("click", ()=>{
    responsive_nav.style.right = "0px";
});

cross_btn.addEventListener("click", ()=>{
    responsive_nav.style.right = "-309px";
});