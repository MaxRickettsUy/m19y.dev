let hamburger, navMenu, navLink

const mobileMenu = () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const closeMenu = () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


window.addEventListener('load', function () {
    hamburger = document.querySelector(".hamburger");
    navMenu = document.querySelector(".nav-menu");
    navLink = document.querySelectorAll(".nav-link");

    hamburger.addEventListener("click", mobileMenu);
    navLink.forEach(n => n.addEventListener("click", closeMenu));

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // document.getElementById("rwl").innerHTML = "<p>rwl</p>";

    } else {
        //whatever
    }
})