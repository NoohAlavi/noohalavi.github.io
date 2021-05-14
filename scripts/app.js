let warning;

function openDiscord() {
    open("https://discord.gg/vxvKSvd")
}

function closeWarning() {
    warning.style.display = "none";
    localStorage.setItem("closedWarning", true);
}

window.onload = () => {
    warning = document.getElementsByClassName("warning")[0];
    if (localStorage.getItem("closedWarning") == "true") {
        closeWarning();
    }
}