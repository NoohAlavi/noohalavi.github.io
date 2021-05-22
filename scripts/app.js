let warning;
let themeToggle;
let currentTheme = "light"
let blogPostsList;

const posts = [
    ' <a href="/posts/redesign-is-here.html">New Website Design Is Here!</a><i> - 16/5/21</i>',
    ' <a href="/posts/i_switched_to_linux.html">Why I Switched To Linux</a><i> - 8/5/21</i>',
    ' <a href="/posts/hello-world.html">Hello, World!</a><i> - 1/5/21</i>'
]


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
        document.documentElement.style.setProperty("--shadow-col", "#00000044");
    } else if (theme == "dark") {
        document.documentElement.style.setProperty("--bg-1", "#2e3440")
        document.documentElement.style.setProperty("--bg-2", "#3b4252")
        document.documentElement.style.setProperty("--accent-1", "#4f4e94")
        document.documentElement.style.setProperty("--text-1", "#e0e7f5")
        document.documentElement.style.setProperty("--shadow-col", "#aaaaaa44");
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

function addPosts() {
    if (blogPostsList) {
        for (let i = 0; i < posts.length; i++) {
            post = document.createElement('li');
            post.innerHTML = posts[i];
            blogPostsList.appendChild(post);
        }
    } else {
        console.error("Element with ID 'blog-posts' not loaded.")
    }
}

window.onload = () => {
    warning = document.getElementsByClassName("warning")[0];
    streamBanner = document.getElementsByClassName("stream")[0];
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

    blogPostsList = document.getElementById("sidebar-blog-posts");
    addPosts();
}