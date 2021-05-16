let warning;
let themeToggle;
let currentTheme = "light"

function openDiscord() {
    open("https://discord.gg/vxvKSvd");
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
        btnText = "☽"
    } else if (theme == "dark") {
        btnText = "☀"
    } else {
        console.error(`Unknown theme ${theme}`)
    }
    themeToggle.innerText = `${btnText}`;
}

window.onload = () => {
    warning = document.getElementsByClassName("warning")[0];
    themeToggle = document.getElementById("toggleThemeBtn");

    if (sessionStorage.getItem("closedWarning") == "true") {
        closeWarning();
    }

    let storedTheme = localStorage.getItem("theme");
    if (!storedTheme) {
        // This will only be run if there is no storedTheme variable in the localStorage; Will run when user opens the page for the first time
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // If dark mode is enabled, set theme to dark
            setTheme('dark')
        } else {
            // If dark mode is not enabled, set the theme to light
            setTheme('light')
        }
    } else {
        setThemeBtn(storedTheme)
    }
}