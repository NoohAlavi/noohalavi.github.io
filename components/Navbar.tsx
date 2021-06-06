import Link from "next/link";
import styles from "../styles/components/Navbar.module.scss";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <h2 className={styles.pageheader}><Link href="/">nooh alavi - developer</Link></h2>
            <ul>
               <li><Link href="/">Home</Link></li>
               <li><Link href="/about-me">About Me</Link></li>
               <li><Link href="/my-blog">My Blog</Link></li>
            </ul> 
        </nav>
    );

}
