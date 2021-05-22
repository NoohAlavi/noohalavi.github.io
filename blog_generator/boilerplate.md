<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Nooh Alavi - Hello World</title>
        <link rel="stylesheet" type="text/css" href="../styles/main.css">
        <link rel="stylesheet" type="text/css" href="../styles/blogs.css">
        <link rel="stylesheet" type="text/css" href="../styles/banner.css">
        <link rel="shortcut icon" href="../images/favicon.ico">
        <script src="../scripts/app.js"></script>

        <meta property="og:site_name" content="Nooh Alavi">
        <meta property="og:url" content="https://noohalavi.github.io/posts/hello-world.html">
        <meta property="og:title" content="Nooh Alavi Blog - Hello World">
        <meta property="og:description" content="Hello World! Today's Saturday, the first of May, and I've just finished implementing blogs to the website, so I decided it would be an appropriate time to make my first post as well.">
        <meta property="og:type" content="website">
        <meta name="og:image" itemprop="image" content="https://noohalavi.github.io/images/favicon.ico">

    </head>
    <body>
        <header>
            <p class="banner warning">This site is a heavy work in progress. <button id="close-warning" onclick="closeWarning()">X</button></p>
        
            <button type="button" onclick="toggleTheme()" id="toggleThemeBtn"></button>

            <nav>
                <h3 class="page-header"><a href="../index.html">nooh alavi - developer</a></h3>
                <ul>
                    <li><a href="../index.html" class="current">Home</a></li>
                    <li><a href="../blog.html">Blog</a></li>
                </ul>
            </nav>
        </header>
        <h1 class="title">{TITLE}</h1>
        <h2 class="date">{DATE}</h2>
    <article>
       <section class="post">       
       {POST HERE}
       </section>
    </article>
        <aside>
            <section class="card">
                <h2>Latest Blogs</h2>
                <ul id="sidebar-blog-posts">
                    
                </ul>
            </section>
            <section class='card'>
                <h2>New Project</h2>
            </section>
            <section class='card'>
                <h2>Latest Videos</h2>
                <ul>
                    <li><a href="https://www.youtube.com/watch?v=NEXasM8qrGw&t=5250s">TIC-80 Full Course - Space Invaders in JavaScript</a></li>
                    <li><a href="https://www.youtube.com/watch?v=N0Eo-zph36Y">Failing at making a game in1 week for MY OWN GAMEJAM (ft. SkyanSam, Prod.Nishy, Waller3000, Autumn)</a></li>
                    <li><a href="https://www.youtube.com/watch?v=tbfyFhoR4W0">The Theme For The Spooktober Gamejam is...</a></li>
                </ul>
            </section>
        </aside>
        <footer>
            <ul>
                <li>Contact: <a href="mailto:noohalavidev@gmail.com">noohalavidev@gmail.com</a></li>
                <li>Website Source Code: <a href="source.html">GitHub</a></li>
            </ul>
            <ul class="social-icons">
                <li><a href="https://discord.gg/vxvKSvd" target=_blank><img src="../images/social-icons/discord.png" alt=""></a></li>
                <li><a href="https://www.youtube.com/channel/UC2W0dJwYSOHm4Rn1p17P6qg" target=_blank><img src="../images/social-icons/yt.png" alt=""></a></li>
                <li><a href="https://twitch.tv/opsci" target=_blank><img src="../images/social-icons/twitch.png" alt=""></a></li>
                <li><a href="https://noohalavi.itch.io" target=_blank><img src="../images/social-icons/itch.png" alt=""></a></li>
                <li><a href="https://github.com/NoohAlavi" target=_blank><img src="../images/social-icons/github.png" alt=""></a></li>
            </ul>
        </footer>
    </body>
</html>