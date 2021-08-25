import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Blog() {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <h1 className="page-title">My Blog</h1>
            </div>
            <Footer/>
        </div>
    );
}
