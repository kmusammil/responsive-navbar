const logo = document.querySelector('.logo');
const navBar = document.querySelector('.nav-links');

logo.addEventListener('click', ()=> {
    navBar.classList.toggle('active');
})