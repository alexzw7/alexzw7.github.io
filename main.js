setTimeout(function(){document.getElementById("jumbo").style.backgroundImage = "url(spaceblurred.jpg)";},1000);
setTimeout(function(){document.getElementById("delayed").style.visibility = "visible";},1600);

function offsetAnchor() {
    if (location.hash.length !== 0) {
      window.scrollTo(window.scrollX, window.scrollY - 75);
    }
  }
  
  // Captures click events of all <a> elements with href starting with #
  $(document).on('click', 'a[href^="#"]', function(event) {
    // Click events are captured before hashchanges. Timeout
    // causes offsetAnchor to be called after the page jump.
    window.setTimeout(function() {
      offsetAnchor();
    }, 0);
  });
  
  // Set the offset when entering page with hash present in the url
  window.setTimeout(offsetAnchor, 0);

function changeMode() {
    var main = document.getElementById("MAINCONTAINER");
    var sub = document.getElementById("SUBCONTAINER");
    var mode = document.getElementById("MODE");
    var navColor = document.getElementById("mainNav");
    var sep1 = document.getElementById("SEP1");
    var sep2 = document.getElementById("SEP2");
    var sep3 = document.getElementById("SEP3");
    var sep4 = document.getElementById("SEP4");

    if (main.className == "container-fluid bg-white") {
        main.className = "container-fluid bg-dark";
        sub.className = "col-lg-6 col-md-6 col-sm-12 col-xs-12 my-0 bg-dark text-white";
        mode.style.color = "white";
        navColor.className = "navbar navbar-expand-md navbar-dark bg-dark sticky-top";
        sep1.className = "bg-white";
        sep2.className = "bg-white";
        sep3.className = "bg-white";
        sep4.className = "bg-white";
    }
    else {
        main.className = "container-fluid bg-white";
        sub.className = "col-lg-6 col-md-6 col-sm-12 col-xs-12my-0 bg-white text-black";
        mode.style.color = "black";
        navColor.className = "navbar navbar-expand-md navbar-light bg-white sticky-top";
        sep1.className = "bg-dark";
        sep2.className = "bg-dark";
        sep3.className = "bg-dark";
        sep4.className = "bg-dark";
    }
}
