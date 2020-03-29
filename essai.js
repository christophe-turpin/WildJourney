// message popup quand pas de voyage sur la periode
function pasDeVoyage() {
    const message = "Je n'ai pas encore voyagé à cette période... Désolé!!"
    alert(message);
}

// menu burger en petit écran
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("paddingnav").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("paddingnav").style.marginLeft = "0";
}


var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

// $(document).ready(function() {
//   $("[list='ccList']")
// });

// function changePage() {
//     window.location = $("a").attr("href")
// };
// barre de recherche deskstop et mobile
function catch_link() {
    var target = document.getElementById("search").value;
    var T_link = ["L'amazonie en pirogue", "articleAmazonie.html", "Destination Amérique du Sud Amazonie", "destinationAmazonie.html", "Bali en VTC", "articleBali.html", "Destination Asie Bali", "destinationBali.html", "Le Japon en train magnétique", "articleJapon.html", "Destination Asie Japon", "destinationJapon.html", "La Croatie en catamaran", "articleCroatie.html", "Destination Europe Croatie", "destinationCroatie.html", "Inspirations Culture", "inspiCulture.html", "Inspirations Gastronomie", "inspiGastronomie.html", "Inspirations Nature", "inspiNature.html", "Inspirations Navigation", "inspiNavigation.html", "Inspirations Rencontres", "inspiRencontres.html", "Inspirations Sport", "inspiSport.html", "Avril", "avril.html", "Mai", "mai.html", "Juin", "juin.html", "Juillet", "juillet.html", "Août", "aout.html", "Septembre", "septembre.html", "Octobre", "octobre.html"];
    for (let i = 0; i < Object.keys(T_link).length; i = i + 2) {
        if (target == T_link[i]) {
            window.location = T_link[i + 1];
        }
    }
}

function mobile_link() {
    var target = document.getElementById("mobileSearch").value;
    var T_link = ["L'amazonie en pirogue", "articleAmazonie.html", "Destination Amérique du Sud Amazonie", "destinationAmazonie.html", "Bali en VTC", "articleBali.html", "Destination Asie Bali", "destinationBali.html", "Le Japon en train magnétique", "articleJapon.html", "Destination Asie Japon", "destinationJapon.html", "La Croatie en catamaran", "articleCroatie.html", "Destination Europe Croatie", "destinationCroatie.html", "Inspirations Culture", "inspiCulture.html", "Inspirations Gastronomie", "inspiGastronomie.html", "Inspirations Nature", "inspiNature.html", "Inspirations Navigation", "inspiNavigation.html", "Inspirations Rencontres", "inspiRencontres.html", "Inspirations Sport", "inspiSport.html", "Avril", "avril.html", "Mai", "mai.html", "Juin", "juin.html", "Juillet", "juillet.html", "Août", "aout.html", "Septembre", "septembre.html", "Octobre", "octobre.html"];
    for (let i = 0; i < Object.keys(T_link).length; i = i + 2) {
        if (target == T_link[i]) {
            window.location = T_link[i + 1];
        }
    }
}

window.onload =
    function () {
        $('#carouselExampleCaptions').Carousel(
            {
                items: 'img',
                reflections: .5,
                rotationSpeed: 1.8
            }
        );
    }
window.onload =
    function () {
        // Affichage du sous menu en douceur
        jQuery('ul.nav li.dropdown').hover(function () {
            jQuery(this).find('.jqueryFadeIn').stop(true, true).delay(200).fadeIn();
        }, function () {
            jQuery(this).find('.jqueryFadeIn').stop(true, true).delay(200).fadeOut();
        });

    };
