import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useTitle from "../hooks/useTitle.js";

export default function source() {
    useTitle("Nooh Alavi - Source")
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="content page-subtitle">
                    You can find the source code of the <b><i>current branch</i></b> at <a target="_blank" href="https://github.com/NoohAlavi/noohalavi.github.io/">https://github.com/NoohAlavi/noohalavi.github.io/</a>
                </div>
                <br/><br/><br/>
                <div className="content page-subtitle">
                    You can find the source code of the <b><i>development branch</i></b> at <a target="_blank" href="https://github.com/NoohAlavi/noohalavi.github.io/tree/dev">https://github.com/NoohAlavi/noohalavi.github.io/tree/dev</a>
                </div>
            </div>
            <Footer/>
        </div>
    )
}