//Swiper//

const swiper = new Swiper('.swiper', {
 
    direction: 'horizontal',
    loop: true,
    effect: `fade`,
    speed: 500,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  //menu//

  document.addEventListener('DOMContentLoaded', function() {
    let burgerMenu = document.querySelector('.burger-menu');
    let burger = document.querySelector('.burger');
    let menu = document.querySelector('.menu');
  
    burgerMenu.addEventListener('click', function() {
      burger.classList.toggle('active');
      menu.classList.toggle('active');
    });
  });