import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return <div className={styles.header}>
        <header>
            <a className={styles.a} href='#s'>Home</a>
            <a className={styles.a} href='#s'>Search</a>
            <a className={styles.a} href='#s'>Login</a>
        </header>
    </div>
};

export default Header;