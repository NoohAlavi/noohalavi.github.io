import Link from "next/link";
import styles from "../styles/components/Navbar.module.scss";

export default function Navbar() {
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
