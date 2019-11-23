function backImage() {
    var jumbo = document.getElementById("jumbo");
    var mainNav = document.getElementById("mainNav");
    var subHeight = mainNav.offsetHeight;
    jumbo.style.height = "calc(100vh - " + subHeight + "px)";
}

setTimeout(function(){document.getElementById("jumbo").style.backgroundImage = "url(blurred1.jpg)";},900);
setTimeout(function(){document.getElementById("delayed").style.visibility = "visible";},1500);

