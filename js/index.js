var navigation_toggle = document.getElementById("navi-toggle");
const navigation_mobile = document.getElementsByClassName("navigation__mobile")[0]
navigation_toggle.addEventListener('change', function() {
  if (this.checked) {
    navigation_mobile.setAttribute("style", "opacity:1; visibility:visible;");
  } else {
    navigation_mobile.setAttribute("style", "opacity:0; visibility:hidden;");
  }
});
