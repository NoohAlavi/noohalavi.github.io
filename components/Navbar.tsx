import Link from "next/link";
import styles from "../styles/components/Navbar.module.scss";
import useTitle from "../hooks/useTitle.js";
import useFavicon from "../hooks/useFavicon";

export default function Navbar() {
    useTitle("Nooh Alavi");
    useFavicon("favicon.png", "image/png");
    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <img src="favicon.png" className={styles.logo}></img>
            </Link>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/#myProjects">Projects</Link></li>
                <li><Link href="/#mySocials">Socials</Link></li>
                <li><Link href="/my-blog">Blog</Link></li>
            </ul>
        </nav>
    );
}
