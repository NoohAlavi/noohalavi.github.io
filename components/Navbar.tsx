import Link from "next/link";
import styles from "../styles/components/Navbar.module.scss";
import useFavicon from "../hooks/useFavicon";

export default function Navbar() {
    useFavicon("favicon.png", "image/png");
    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <img src="favicon.png" className={styles.logo}></img>
            </Link>
            <ul>
                <li><Link href="/#aboutMe">About Me</Link></li>
                <li><Link href="/#myProjects">Projects</Link></li>
                <li><Link href="/#contact">Contact Me</Link></li>
                <li><Link href="/my-blog">Blog</Link></li>
            </ul>
        </nav>
    );
}
