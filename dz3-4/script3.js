document.addEventListener('DOMContentLoaded', function() {
    let burgerMenu = document.querySelector('.burger-menu');
    let burger = document.querySelector('.burger');
    let menu = document.querySelector('.menu');
  
    burgerMenu.addEventListener('click', function() {
      burger.classList.toggle('active');
      menu.classList.toggle('active');
    });
  });