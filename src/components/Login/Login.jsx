import React, { useContext, useEffect, useState } from 'react';
import './Login.scss';
import UserContext from '../context/UserContext';

const Login = () => {
    const [username, setUsername] = useState(null);
    const [error, setError] = useState('');

    const { userLogin } = useContext(UserContext);

    const setName = (e) => {
        e.preventDefault();
        if(!username) {
            setError("No username set");
        } else {
            setError(null);
            userLogin(username);
        }
    };

    return(
        <div className='login'>
            <form onSubmit={setName}>
                <div className='form-error'>{error}</div>
                <label htmlFor='name'>Name</label>
                <input 
                    type="text"
                    maxLength='12'
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <button type='submit'>Enter Chat!</button>
            </form>
        </div>
    );
}

export default Login;