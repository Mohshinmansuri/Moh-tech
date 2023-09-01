burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
search = document.querySelector('.search')
burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nev')
    navList.classList.toggle('v-nev')
    search.classList.toggle('v-nev')
})