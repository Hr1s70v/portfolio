"use client";

import { useState } from 'react';
import styles from './nav.module.css';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.nav}>
            <button className={styles.hamburger} onClick={toggleMenu}>
                &#9776; {/* Unicode character for the hamburger icon */}
            </button>
            <ul className={`${styles.ul} ${isOpen ? styles.show : ''}`}>
                <li className={styles.list}><a href='#' className={styles.navtext}>About</a></li>
                <li className={styles.list}><a href='#' className={styles.navtext}>Skills</a></li>
                <li className={styles.list}><a href='#' className={styles.navtext}>Projects</a></li>
            </ul>
        </nav>
    );
}
