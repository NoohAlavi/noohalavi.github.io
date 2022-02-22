import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useTitle from "../hooks/useTitle.js";

export default function Home() {
  useTitle("Nooh Alavi - Home");
  return (
    <div>
      <Navbar/>
      <div className="container">
        <h1 className="page-title">Nooh Alavi</h1>
        <h3 className="page-subtitle">High schooler who loves technology!</h3>
      </div>
      <div className="container">
        <h3 className="page-subtitle" id="aboutMe">Who Am I?</h3>
        <p className="content">
          Hey there! My name's Nooh Alavi, I'm fifteen and I love programming! I taught myself how to code when I was ten, through books, YouTube videos, and of course, tons of Googling (thanks StackOverflow!).<br/><br/>
          Now, as a hobby, I create video games, applications, and websites (like this one!) using <a href="/#software">a variety of languages and tools</a>. Check out some of my projects down below, and feel free to <a href="https://github.com/NoohAlavi" target="_blank">contribute to them</a>!
        </p>
      </div>
      <div className="container">
        <h3 className="page-subtitle" id="software">Software I Work With</h3>
       <p className="content centered">
         WORK IN PROGRESS
       </p>
        {/* Things to add: Python, HTML, JS, CSS, REACTJS, GODOT */}
        <ul>
          
        </ul>
      </div>
      <div className="container">
        <h3 className="page-subtitle" id="myProjects">My Projects</h3>     
      </div>
      <p className="content centered">
        Work in progress, but in the meantime, feel free to check out my <a href="https://github.com/NoohAlavi/">GitHub</a> and my <a href="https://noohalavi.itch.io/">Itch</a> pages!
      </p>
      <div className="container">
        <h3 className="page-subtitle" id="contact">Contact Me</h3>
        <div>
          <p className="content centered">
            E-Mail: <a href="mailto:noohalavidev@gmail.com" target="_blank">noohalavidev@gmail.com</a><br/>
            Discord Server: <a href="https://discord.gg/vxvKSvd">discord.gg/vxvKSvd</a>
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}