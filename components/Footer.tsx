import Link from "next/link";
import styles from "../styles/components/Footer.module.scss";

export default function Footer () {
    return (
        <footer className={styles.pagefooter}>
            <ul>
                <li>Contact: <Link href="mailto:noohalavidev@gmail.com">noohalavidev@gmail.com</Link></li>
                <li>Website Source Code: <Link href="/source">GitHub</Link></li>
            </ul>
        </footer>
    );
}
