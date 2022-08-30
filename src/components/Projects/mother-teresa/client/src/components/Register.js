import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = (props) => {
    const history = useNavigate();
   const [data, setData] = useState ({
        name:'',
        password:'',
        email: '',
        error: null
    })

   const { name, email, password, error } = data;

   const handleChange = (e) => {
       setData({...data, [e.target.name]: e.target.value})
   };
   const handleSubmit = async (e) => {
        e.preventDefault();
    try {
        setData({ ...data, error: null});
        await axios.post(
            "/vibranium/Register",
            { name, email, password },
            {
                headers: { 
                    "Content-Type": "application/json",
                },
            }
        );
        history('/Login');
    } catch (err) {
        console.log(err)
    }
}
    return (
    <div>
        <form  className='login'>
            <h2 className="login-title">Register</h2>
            <div className="input-field">
                <label htmlFor="name">Username</label>
                <input 
                type="name" 
                name="name" 
                value={name} 
                onChange={handleChange} />
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                name="password" 
                value= {password}
                onChange={handleChange} />
            </div>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input 
                type="email" 
                name="email" 
                value = {email} 
                onChange={handleChange} />
            </div>
            {error ? <p classname="warning">{error}</p> : null}
            <div className="input-field">
                <button  
                className="login-submit" 
                onClick={handleSubmit}>
                    Register
                </button>
            </div>
            <p className ="redirect">
                    Already a user? <Link to="/Login">Login</Link>
            </p>
        </form>
    </div>
    );
  }


export default Register;

