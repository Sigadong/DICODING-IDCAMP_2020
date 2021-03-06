document.addEventListener("DOMContentLoaded", function() {

  const sidenav = document.querySelectorAll(".sidenav");
  M.Sidenav.init(sidenav);

  loadNav();
   
  function loadNav() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status != 200) return;

        document.querySelectorAll(".topnav, .sidenav").forEach(function(elm) {
          elm.innerHTML = xhttp.responseText;
        });
   
        document.querySelectorAll(".sidenav a, .topnav a").forEach(function(elm) {
          elm.addEventListener("click", function(event) {

            const sidenav = document.querySelector(".sidenav");
            M.Sidenav.getInstance(sidenav).close();
   
            page = event.target.getAttribute("href").substr(1);
            loadPage(page);
          });
        });
      }
    };
    xhttp.open("GET", "nav.html", true);
    xhttp.send();
  }

    // Load page Standings
  let page = window.location.hash.substr(1);
  if (page === "") page = "home";
  loadPage(page);
   
  function loadPage(page) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4) {
        let content = document.querySelector("#body-content");

        if (page === "standings") {
          // Menampilkan halaman Request API server
          getStandings();
        } else if (page === "favorites") {
          // Menampilkan halaman Favorite dr IndexedDb
          getSavedFavorites();
        } else if (page === "matches") {
          // Menampilkan halaman Favorite dr IndexedDb
          getMatches();
        } 

        if (this.status === 200) {
          content.innerHTML = xhttp.responseText;
        } else if (this.status === 404) {
          content.innerHTML = `<h5 class="amber-text"><i class="material-icons left">announcement</i></a>Page not found</h5>`;
        } else {
          content.innerHTML = `<h5 class="red-text"><i class="material-icons left">notification_important</i></a>Can't accessed page</h5>`;
        }
      }
     
      if (page === "home") {
        const slider = document.querySelectorAll('.slider');
        M.Slider.init(slider, {indicators: false,height: 450,interval: 4000});

        const carousel = document.querySelectorAll('.carousel');
        M.Carousel.init(carousel,{duration: 300,dist: -125});

        const parallax = document.querySelectorAll('.parallax');
        M.Parallax.init(parallax);
      }
    };
    xhttp.open("GET", "pages/" + page + ".html", true);
    xhttp.send();
  }

});