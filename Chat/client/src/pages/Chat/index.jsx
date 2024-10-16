import React, {useEffect, useState} from 'react';
import Sidebar from "./components/SideBar";
import MessageBlock from "./components/MessageBlock";
import styles from './style.module.css';
import Body from "./components/Body";
const Chat = ({socket}) => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        socket.on('response', (data) => {
             setMessages([...messages, data])
        })
    },[messages])

    return (
        <div className={styles.chatBox}>
           <Sidebar/>
            <main className={styles.main}>
                <Body messages={messages}/>
                <MessageBlock socket={socket}/>
            </main>
        </div>
    );
};

export default Chat;