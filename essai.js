function pasDeVoyage() {
    const message = "Je n'ai pas encore voyagé à cette période... Désolé!!"
    alert(message);
}

function openNav() {
<<<<<<< HEAD
    document.getElementById("mySidenav").style.width = "250px";
=======
    document.getElementById("mySidebar").style.width = "250px";
>>>>>>> c2ab19d5715e4d50dd8747ac7e5cea7c4e395bc6
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
<<<<<<< HEAD
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

=======
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
>>>>>>> c2ab19d5715e4d50dd8747ac7e5cea7c4e395bc6
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