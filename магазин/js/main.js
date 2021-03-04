

function myButton() {
    document.getElementById("myDropdown_button").classList.toggle("active");
}

window.onclick = function(event) {
    if (!event.target.matches('.header_button' )) {
  
      var dropdowns = document.getElementsByClassName("drop_down" );
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openmyDropdown_button = dropdowns[i];
        if (openmyDropdown_button.classList.contains('active')) {
          openmyDropdown_button.classList.remove('active');
        }
      }
    }
  }
  function myShop() {
    document.getElementById("myRopdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.header_imga')) {
  
      var dropdowns = document.getElementsByClassName("header_cart");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openRopdown = dropdowns[i];
        if (openRopdown.classList.contains('show')) {
          openRopdown.classList.remove('show');
        }
      }
    }
}