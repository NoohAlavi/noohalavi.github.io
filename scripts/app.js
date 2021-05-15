let warning;

function openDiscord() {
    open("https://discord.gg/vxvKSvd")
}

function closeWarning() {
    warning.style.display = "none";
    sessionStorage.setItem("closedWarning", true);
}

window.onload = () => {
    warning = document.getElementsByClassName("warning")[0];
    if (sessionStorage.getItem("closedWarning") == "true") {
        closeWarning();
    }
}