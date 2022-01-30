let elDirectorsButton = new Array
let elFront  = new Array
let elBack = new Array

elDirectorsButton = document.querySelectorAll('.directors-btn');
elFront = document.querySelectorAll('.front');
elBack = document.querySelectorAll('.back');

elDirectorsButton.forEach((element, index) => {
  element.addEventListener('click', function () {
    element.classList.toggle('directors-btn-hover');
    elFront[index].classList.toggle('front-rotate');
    elBack[index].classList.toggle('back-rotate');
  });
});