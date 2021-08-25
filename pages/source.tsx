import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function source() {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="content page-subtitle">
                    You can find the source code of the <b><i>current branch</i></b> at <Link href="https://github.com/NoohAlavi/noohalavi.github.io/">https://github.com/NoohAlavi/noohalavi.github.io/</Link>
                </div>
                <div className="content page-subtitle">
                    You can find the source code of the <b>development branch</b> at <Link href="https://github.com/NoohAlavi/noohalavi.github.io/tree/dev">https://github.com/NoohAlavi/noohalavi.github.io/tree/dev</Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}