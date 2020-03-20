function pasDeVoyage() {
    const message = "Je n'ai pas encore voyagé à cette période... Désolé!!"
    alert(message);
}

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

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'ac');
    }
   
}

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementsByClassName("searchbar");
    filter = input.value.toUpperCase();
    ul = document.getElementById("ccList");
    li = ul.getElementsByTagName("li");
        if (txtValue.toUpperCase().indexOf(filter) > 0) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }