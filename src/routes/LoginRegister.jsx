import React, { useState } from 'react'
import './LoginRegister.css';
import { FaUser , FaLock, FaEnvelope } from "react-icons/fa";
import Navbar from '../components/Navbar/Navbar';

const LoginRegister = () => {

    const [action, setAction] = useState('');

    const registerLink = () => {
        console.log('Register link clicked'); // Adding this line for debugging
        setAction(' active');
    }
    const loginLink = () => {
        console.log('Login link clicked'); // Adding this line for debugging
        setAction('');
    }
    console.log('LoginRegister component rendered');// Adding this line for debugging


return (
    <>
    <Navbar /> 
<div className="WRAPPER">
    <div className={`wrapper${action}`}>
        <div className="form-box login">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required />
                    <FaUser className='icon' /></div>
                <div className="input-box">
                    <input type="Password" placeholder='Password' required />
                    <FaLock className='icon'    /></div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember Me</label>
                    <a href="#">Forgot Password?</a>
                </div>

                <button type="submit">Login</button>
                <div className="register-link">
                    <p>Don't have an account? <a href="#" onClick=
                    {registerLink}>Register</a></p>
                </div>
            </form>
        </div>
         {/* Registraion Form Code */}
        <div className="form-box register">
            <form action="">
                <h1>Registration</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required />
                    <FaUser className='icon' /></div>
                <div className="input-box">
                    <input type="email" placeholder='Email' required />
                    <FaEnvelope className='icon' /></div>
                <div className="input-box">
                    <input type="Password" placeholder='Password' required />
                    <FaLock className='icon'    /></div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />I agree to the Terms & Conditions</label>
                </div>
                <button type="submit">Register</button>
                <div className="register-link">
                    <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
                </div>
            </form>
        </div>
    </div>
</div>
</>
  );
};

export default LoginRegister;

