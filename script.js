const icon = document.getElementById("icon");
const navbar = document.getElementById('navbar');

icon.addEventListener('click', function(){
    if (navbar.style.opacity === "1"){
        navbar.style.visibility = "hidden";
        navbar.style.opacity = "0";
        navbar.style.marginBottom = "0";
        icon.style.opacity = "1";
    } else {
        navbar.style.visibility = "visible";
        navbar.style.opacity = "1";
        navbar.style.marginBottom = "10%";
        icon.style.opacity = "0.5";
    }
});

