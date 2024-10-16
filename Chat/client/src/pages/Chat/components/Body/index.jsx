import React from 'react';
import styles from './style.module.css';
import {useNavigate} from "react-router-dom";

const Body = ({messages}) => {
    const navigate = useNavigate()
    const handleLeave = () => {
        localStorage.removeItem('user')
        navigate('/')
    }
    return (
        <>
            <header className={styles.header}>
                <button onClick={handleLeave} className={styles.button}>Leave Chat</button>
            </header>
            <div className={styles.container}>
                {messages.map(item =>
                    item.name === localStorage.getItem('user') ? (
                    <div className={styles.chats} key={item.id}>
                        <p>You</p>
                        <div className={styles['message-sender']}>
                            <p>{item.text}</p>
                        </div>
                    </div>
                    ) : (
                    <div className={styles.chats}>
                        <p>{item.name}</p>
                        <div className={styles['message-recipient']}>
                            <p>{item.text}</p>
                        </div>
                    </div>)
                )}


            </div>
        </>
    );
};

export default Body;
