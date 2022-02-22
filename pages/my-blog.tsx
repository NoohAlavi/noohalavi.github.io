import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useTitle from "../hooks/useTitle.js";

export default function Blog() {
    useTitle("Nooh Alavi - Blog");
    return (
        <div>
            <Navbar/>
            <div className="container">
                <h1 className="page-title">My Blog</h1>
                <p className="content centered">
                    Nothing to see here :(
                </p>
            </div>
            <Footer/>
        </div>
    );
}