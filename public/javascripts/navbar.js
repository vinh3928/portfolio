var menu = document.getElementById("menu");
var nav = document.getElementById("nav");
var hide = document.getElementById("hide");

menu.addEventListener("click", function(e) {
  nav.style.width = "300px";
  window.setTimeout(function() {
    nav.style.height = "100%";
  }, 2000);
});

hide.addEventListener("click", function(e) {
  nav.style.height = "50px";
  window.setTimeout(function() {
    nav.style.width = "100%";
  }, 2000);

});
