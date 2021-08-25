import Link from "next/link";
import styles from "../styles/components/Navbar.module.scss";
import useTitle from "../hooks/useTitle.js";


export default function Navbar() {
    useTitle("Nooh Alavi");
    return (
        <nav className={styles.navbar}>
            <ul>
               <li><Link href="/">Home</Link></li>
               <li><Link href="/my-blog">My Blog</Link></li>
               <li><Link href="/my-projects">My Projects</Link></li>
            </ul>
        </nav>
    );
}
