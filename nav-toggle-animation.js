(function addNavEffect(effectName) {
  var open = false;
  var toggleNav = document.getElementById("nav-toggle");
  toggleNav.addEventListener("click", function () {
    if (!open) {
      toggleNav.classList.add(effectName);
      open = true;
    } else {
      toggleNav.classList.remove(effectName);
      open = false;
    }
  })
})()