// Mobile Navigation
function toggleMobileNav(){
    let element = document.getElementById("mobile-nav");

    if(element.classList.contains("mobile-nav-open"))
    {
        element.classList.remove("mobile-nav-open");
    } else {
        element.classList.add("mobile-nav-open");
    }
}

// Scrolling
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100%";
    }
    prevScrollpos = currentScrollPos;
}