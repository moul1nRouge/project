var toggleMenu = document.getElementById('toggle-menu');
var mainMenu = document.getElementById('main-menu');

toggleMenu.addEventListener('click', function() {
  if (mainMenu.style.opacity === '0') {
    mainMenu.style.opacity = '1';
  } else {
    mainMenu.style.opacity = '0';
  }
});