function mostraAbout () {
    about = document.getElementById("about");
    arrow = document.getElementById("arrow");
    if (about.getAttribute("class") == "aboutBefore")
    {
        about.setAttribute("class", "aboutAfter");
        arrow.setAttribute("class", "arrowAfter");
    }
    else
    {
        about.setAttribute("class", "aboutBefore");
        arrow.setAttribute("class", "arrowBefore");
    }
}