function openContent(evt, contentPage) {
    var i, menuContent, menulinks;
    menuContent = document.getElementsByClassName("menuContent");
    for (i = 0; i < menuContent.length; i++) {
        menuContent[i].style.display = "none";
    }
    menulinks = document.getElementsByClassName("menulinks");
    for (i = 0; i < menulinks.length; i++) {
        menulinks[i].className = menulinks[i].className.replace(" active", "");
    }
    document.getElementById(contentPage).style.display = "block";
    evt.currentTarget.className += " active";
}
/*
El Hover NAV lo saque de: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_hover_tabs
*/