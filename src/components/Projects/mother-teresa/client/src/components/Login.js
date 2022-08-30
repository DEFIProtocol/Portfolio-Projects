import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {
    const history = useNavigate()
   const [ data, setData ]= useState ({
        email:'',
        password:'',
        error: null,
    })

    const {email, password, error} = data;

    const handleChange = (e) => {
        setData({ 
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setData({ ...data, error: null});
            const res = await axios.post(
                '/vibranium/Login',
                { email, password},
                { 
                    headers: { 'Content-Type': 'application/json'},
                })
                localStorage.setItem('token', res.data.token)
                history("/");
        } catch {
        };
    }
       
    return (
    <div>
        <form className='login'>
            <h2 className="login-title">Login</h2>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input 
                type="email" 
                name="email" 
                value = {email} 
                onChange={handleChange} />
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                name="password" 
                value= {password} 
                onChange= {handleChange} />
            </div>
            {error ? <p className ="warning">{error}</p>: null}
            <div className="input-field">
                <button  
                type = "submit" 
                className="login-submit" 
                onClick= {handleSubmit}>
                    Login
                </button>
                <div>
                <p className ="redirect">
                    Don't have an account? <Link to="/Register">Register</Link>
                </p>
                </div>
            </div>
        </form>
    </div>
    );
  }

export default Login;

