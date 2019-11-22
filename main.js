function backImage() {
    var jumbo = document.getElementById("jumbo");
    var mainNav = document.getElementById("mainNav");
    var subHeight = mainNav.offsetHeight;
    jumbo.style.height = "calc(100vh - " + subHeight + "px)";
}
