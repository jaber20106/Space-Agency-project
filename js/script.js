let video = document.querySelector("#video");
let navBar = document.querySelector('.nav-bar');
let heroContent = document.querySelector('.header-content');
video.onended = ()=>{
    navBar.style.opacity = "1";
    heroContent.style.opacity = "1";
}
