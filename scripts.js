function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
    else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
}

let hamburger, navMenu, navLink;

const navBarTemplate = document.createElement('template');

navBarTemplate.innerHTML = `
  <nav class="navbar">
    <a href="/index.html"><img src="/img/avatar.png" alt="avatar" class="avatar" /></a>
    <ul class="nav-menu">
      <li class="nav-item">
        <a href="/index.html" class="nav-link">/home</a>
      </li>
      <li class="nav-item">
        <a href="/pages/posts.html" class="nav-link">/posts</a>
      </li>
      <li class="nav-item">
        <a href="/pages/projects.html" class="nav-link">/projects</a>
      </li>
      <li class="nav-item">
        <a href="/pages/random.html" class="nav-link">/random</a>
      </li>
      <li class="nav-item">
        <a href="/pages/rwl.html" class="nav-link">/rwl</a>
      </li>
      <li class="nav-item">
        <div class="theme-switch-wrapper">
          <label class="theme-switch" for="checkbox">
          <input type="checkbox" id="checkbox" />
          <div class="slider round"></div>
          </label>
        </div>
      </li>
    </ul>
    <div class="hamburger">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
  </nav>
`;

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

const headers = ["Week", "Stocks", "Total Invested", "Dividends"];

const generateDivHarvestingTable = () => {

  const createElement = (element) => {
    return document.createElement(element);
  }

  const divHarvestingDiv = document.getElementById("dividend-harvesting");
  const table = createElement("table");
  const headerRow = createElement("tr");
  const tBody = createElement("tbody");

  if(table !== null && divHarvestingDiv !== null){
    headers.forEach((h) => {
      let header = createElement("th");
      header.innerHTML = h;
      headerRow.appendChild(header);
    })

    table.appendChild(headerRow);

    data.forEach((d) => {
      const weekRow = createElement("tr");
      const weekCell = createElement("td");
      const stockCell = createElement("td");
      const investedCell = createElement("td");
      const divCell = createElement("td");

      const weekA = createElement("a");

      weekCell.innerHTML = d.week;
      stockCell.innerHTML = d.stocks;
      investedCell.innerHTML = "$" + d.week * 100;
      divCell.innerHTML = "";

      weekRow.appendChild(weekCell);
      weekRow.appendChild(stockCell);
      weekRow.appendChild(investedCell);
      weekRow.appendChild(divCell);

      tBody.appendChild(weekRow);
    })

    table.appendChild(tBody);

    divHarvestingDiv.appendChild(table);
  }
}

window.addEventListener('load', function () {
  const header = document.querySelector(".header")

  header.appendChild(navBarTemplate.content)

  const toggleSwitch = document.querySelector('.theme-switch >  input');

  if(toggleSwitch) {
    toggleSwitch.addEventListener('change', switchTheme);
  }

  const currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'light') {
        toggleSwitch.checked = true;
    }
  }

    hamburger = document.querySelector(".hamburger");
    navMenu = document.querySelector(".nav-menu");
    navLink = document.querySelectorAll(".nav-link");

    if(hamburger) {
      hamburger.addEventListener("click", mobileMenu);
    }

    navLink.forEach(n => n.addEventListener("click", closeMenu));

    generateDivHarvestingTable();

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