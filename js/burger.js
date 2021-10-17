const burger = document.querySelector('.humburger-menu');
const menuElem = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu-list__item');

const toggleMenu = () => {
  menuElem.classList.toggle('menu-active');
  burger.classList.toggle('humburger-menu-active');
};

burger.addEventListener('click', () => toggleMenu());

for (let link of menuLinks) {
  link.addEventListener('click', () => {
    menuElem.classList.toggle('menu-active');
    burger.classList.toggle('humburger-menu-active');
  });
}