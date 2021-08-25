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
        <h3 className="page-subtitle">High schooler who loves programming and game development!</h3>
      </div>
      <div className="container">
        <h3 className="page-subtitle">Who Am I?</h3>
        <p className="content">
          My name's Nooh Alavi, I'm fifteen and I love programming! I taught myself how to code when I was ten, through books, YouTube videos, and of course, tons of Googling (thanks StackOverflow!).<br/><br/>
          Now, as a hobby, I create video games, applications, and websites (like this one!) using <a href="/#software">a variety of languages and tools</a>. Check out some of my projects down below, and feel free to <a href="https://github.com/NoohAlavi" target="_blank">contribute</a> to them!
        </p>
      </div>
      <div className="container">
        <h3 className="page-subtitle" id="myProjects">My Projects</h3>     
      </div>
      <div className="container">
        <h3 className="page-subtitle" id="software">Software I Work With</h3>
      </div>
      <div className="container">
        <h3 className="page-subtitle" id="mySocials">My Socials</h3>
      </div>
      <Footer/>
    </div>
  );
}