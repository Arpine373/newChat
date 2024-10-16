import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState('')

    const handleChange = (e) => {
       setUserName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(userName.length) {
            localStorage.setItem('user', userName)
            navigate('/chat')
        }
    }

    return (
        <form onSubmit={handleSubmit} >
            <h1>Please Enter Name</h1>
            <label htmlFor=""></label>
            <input type="text" placeholder="name" value={userName} onChange={(e) => handleChange(e)}/>
            <button>Sing in</button>
        </form>
    );
};

export default Home;