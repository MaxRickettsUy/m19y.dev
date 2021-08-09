let hamburger, navMenu, navLink

const mobileMenu = () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const closeMenu = () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

const desiredRepo = "MaxRicketts-Uy";
const dateTagClass = ".date";

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


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function()
{
  if (this.readyState == 4 && this.status == 200)
  {
    let repos = JSON.parse(this.responseText);

    repos.forEach((repo)=>{
      if (repo.name == desiredRepo)
      {
        var lastUpdated = new Date(repo.updated_at);
        var day = lastUpdated.getUTCDate() - 1;

        var month = lastUpdated.getUTCMonth() + 1;

        var year = lastUpdated.getUTCFullYear();
        document.querySelector(dateTagClass).innerText = `Last updated: ${month}/${day}/${year}`;
      }
    });
  }
};
xhttp.open("GET", "https://api.github.com/users/MaxRickettsUy/repos", true);
xhttp.send();