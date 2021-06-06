import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutMe() {
    return (
        <div>
            <Navbar/>
            <h1 className="page-title">About Me</h1>
            <div className="content">
                <h2 className="header">Who Am I?</h2>

                <p>Hey there! My name's Nooh Alavi, and I'm just a teen who loves coding and game development. I made this site as a place to post my projects, videos, tutorials, devlogs and thoughts.</p>
                <p>I started coding in fourth grade, when I picked up a book on HTML and CSS in my school book fair. My dream since I was a kid was making my own video games, and that dream could finally come true - but not yet. I soon discovered HTML wasn't.. well... <i>ideal</i> for making video games. However, that book inspired me to learn other coding languages. And hey, I guess I used HTML to make this page, so I guess that book did indeed help me.</p>
                <p>Soon, I learned Python and JavaScript, and made a few simple games. I remember making clones of games such as Snake, Space Invaders, etc, and a few other unoriginal ideas, such as an infinite runner (with terrible collision detection), and a game where you had to avoid falling objects from the sky (at that point, I had learned the AABB algorithm, and could actually implement proper collision detection).</p>
                <p>And then, I found out about game engines, which was (<i>quite literally</i>) game changing for me. I tried out a couple, including Unity, Phaser.js, Love2D, and even explored some fantasy consoles, such as TIC-80, but in the end I stuck with <a href="https://godotengine.org">Godot</a>, a decision that I don't regret.</p>
                <p>Now, I make most of my games using Godot with the C# scripting language, though I always love learning and trying out new languages and tools! I post devlogs, tutorials and my discoveries on <a href="https://www.youtube.com/channel/UC2W0dJwYSOHm4Rn1p17P6qg">my youtube channel</a>.</p>
                <p>But coding and gamedev aren't my only hobbies! I love playing many different video games with friends, including Minecraft, Among Us and Chess, and I stream them on <a href="https://www.twitch.tv/opsci">my twitch channel</a>. I also occasionally do stream coding and/or gamedev on Twitch, usually during game jams.</p>

                <h2 className="header">Support Me</h2>
                
                <p>The best way to support me is to subscribe to my Twitch channel, <a href="https://twitch.tv/subs/opsci">Opsci</a>. Also, If you have Amazon Prime, you can connect it to your Twitch account and then subscribe to me for <b>absolutely free</b>.</p>
                </div>
            <Footer/>
        </div>
    );
}
