import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
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
          
        </p>
      </div>
      <div className="container">
        <h3 className="page-subtitle">My Projects</h3>     
        <div className="card">
          <div className="card-container">
            <h4><b>Blobs and Bullets</b></h4> 
            <p>Made in one week for the retro game jam</p> 
          </div>
        </div>
        <div className="card">
          <div className="card-container">
            <h4><b>Blobs and Bullets</b></h4> 
            <p>Made in one week for the retro game jam</p> 
          </div>
        </div>   
      </div>
      <Footer/>
    </div>
  );
}