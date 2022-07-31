
menu = document.querySelector(".menu");
toggle = document.querySelector(".toggle-menu");

toggle.addEventListener('click', function() {

  if (menu.className === "menu") {
    menu.className += " colapse";
  } else {
    menu.className = "menu";
  }

});
