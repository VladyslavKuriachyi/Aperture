const burger = document.getElementById('burger');
const nav = document.querySelector('.header_nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
});