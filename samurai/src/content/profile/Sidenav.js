import React from 'react'
import styles from './Sidenav.module.css';

const Sidenav = () => {
    return <div className={styles.sidenav}>
            <div>
                Profile
            </div>
            <div>
                Message
            </div>
            <div>
                News
            </div>
    </div>
};

export default Sidenav;