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

function setTheme(theme) {
    currentTheme = theme
    localStorage.setItem("theme", theme)
    console.log(`Set theme, theme is now ${theme}`);
    setThemeBtn(theme)
}

function toggleTheme() {
    if (currentTheme == "light") {
        setTheme("dark")
    } else {
        setTheme("light")
    }
}

function setThemeBtn(theme) {
    btnText = ''
    if (theme == "light") {
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

    let storedTheme = localStorage.getItem("theme");
    if (!storedTheme) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // If dark mode is enabled, run this code
            setTheme('dark')
            console.log("Current Theme: Dark")
        } else {
            setTheme('light')
        }
    } else {
        setThemeBtn(storedTheme)
    }
}