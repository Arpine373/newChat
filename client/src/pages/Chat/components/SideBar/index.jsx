import React from 'react';
import styles from './style.module.css';
const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <h4 className={styles.header}>Users</h4>
            <ul className={styles.menu}>
                <li>User1</li>
                <li>User2</li>
                <li>User3</li>
                <li>User4</li>
            </ul>
        </div>
    );
};

export default Sidebar;