import Link from "next/link";
import styles from "../styles/components/Navbar.module.scss";
import useTitle from "../hooks/useTitle.js";
import useFavicon from "../hooks/useFavicon";

export default function Navbar() {
    useTitle("Nooh Alavi");
    useFavicon("favicon.png", "image/png");
    return (
        <nav className={styles.navbar}>
            <ul>
               <li><Link href="/">Home</Link></li>
               <li><Link href="/my-blog">My Blog</Link></li>
               <li><Link href="/#myProjects">My Projects</Link></li>
            </ul>
        </nav>
    );
}
