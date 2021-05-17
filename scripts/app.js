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
    setThemeBtn(theme)
    // console.log(`Set theme, theme is now ${theme}`);

    // Change website colours

    if (theme == "light") {
        document.documentElement.style.setProperty("--bg-1", "#e0e7f5")
        document.documentElement.style.setProperty("--bg-2", "#f3f3f3")
        document.documentElement.style.setProperty("--accent-1", "#3C1874")
        document.documentElement.style.setProperty("--text-1", "#283747")
    } else if (theme == "dark") {
        document.documentElement.style.setProperty("--bg-1", "#2e3440")
        document.documentElement.style.setProperty("--bg-2", "#3b4252")
        document.documentElement.style.setProperty("--accent-1", "#4f4e94")
        document.documentElement.style.setProperty("--text-1", "#e0e7f5")
    } else {
        console.error(`Unknown Theme '${theme}'`);
    }
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
        setTheme(storedTheme)
    }
}