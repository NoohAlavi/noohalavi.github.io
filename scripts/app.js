let warning;
let themeToggle;
let currentTheme = "light"

function openDiscord() {
    open("https://discord.gg/vxvKSvd")
}

function closeWarning() {
    warning.style.display = "none";
    sessionStorage.setItem("closedWarning", true);
}

function setTheme(theme=false) {
    if (theme) {
        currentTheme = theme;
    } else {
        // If no arg is specificed, toggle the theme
        currentTheme = (currentTheme == "light") ? "dark" : "light";
    }
    localStorage.setItem("theme", currentTheme)
    console.log(`Toggled theme, theme is now ${currentTheme}`);
    
    btnText = ''
    if (currentTheme == "light") {
        btnText = "Dark"
    } else {
        btnText = "Light"
    }
    themeToggle.innerText = `${btnText} Mode`;
}

window.onload = () => {
    warning = document.getElementsByClassName("warning")[0];
    themeToggle = document.getElementById("toggleThemeBtn");

    if (sessionStorage.getItem("closedWarning") == "true") {
        closeWarning();
    }

    if (!localStorage.getItem("theme")) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // If dark mode is enabled, run this code
            setTheme('dark')
            console.log("Current Theme: Dark")
        } else {
            setTheme('light')
        }
    }
}