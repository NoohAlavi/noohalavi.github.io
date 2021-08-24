import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="content home-header">
        <h1 className="page-title">Nooh Alavi</h1>
        <h3 className="page-subtitle">High schooler who loves programming and game development!</h3>
      </div>
      <Footer/>
    </div>
  );
}
