import Link from "next/link";
import styles from "../styles/components/Footer.module.scss";

export default function Footer () {
    return (
        <footer className={styles.pagefooter}>
            <ul>
                <li>
                    <a target="_blank" href="mailto:noohalavidev@gmail.com">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#d3d3d3">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                    </a>
                </li>
                <li>
                    <Link href="/source">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </Link>
                </li>
            </ul>
        </footer>
    );
}
