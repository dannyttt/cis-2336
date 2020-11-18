var navSlide = function() {
  var burgerMenu = document.querySelector('.burger-menu');
  var nav = document.querySelector('.nav-links');
  var navLis = nav.querySelectorAll('.li');
  burgerMenu.onclick = function(){
    // toggle can add and remove properties
    nav.classList.toggle('nav-active')
  }
}
navSlide();
