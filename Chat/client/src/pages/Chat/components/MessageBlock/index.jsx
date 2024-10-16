import React, {useState} from 'react';
import styles from './style.module.css';
const MessageBlock = ({socket}) => {
    const [message, setMessage] = useState('')
    const userName = localStorage.getItem('user')
    const handleSend = (e) => {
       e.preventDefault()
       if (message.trim() && userName) {
           socket.emit('message', {
               text: message,
               name: userName,
               id: `${socket.id}-${Math.random()}`
           })
       }
       setMessage('')
    }
    return (
        <div className={styles.messageBlock}>
            <form onSubmit={handleSend}>
                <input
                    type="text"
                    className={styles.userMessage}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className={styles.sendButton}>Send</button>
            </form>
        </div>
    );
};

export default MessageBlock;