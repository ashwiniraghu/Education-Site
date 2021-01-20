burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navbarright = document.querySelector('.navbar-right');
navlist = document.querySelector('.nav-list');

burger.addEventListener('click',()=>{
    navbarright.classList.toggle('v-class-responsive');
    navlist.classList.toggle('v-class-responsive');
     navbar.classList.toggle('h-nav-responsive');
})