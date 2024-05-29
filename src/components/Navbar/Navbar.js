import { Component } from "react";
import "./NavbarStyles.css"
import { MenuItems } from "../MenuItems";
import { Link } from 'react-router-dom';

class Navbar extends Component{
    // intializing a state of menu icons because we dont want it display all the time if we clicked on bar icon menu should open and if we close teh it should closed thats the logic//
    state = {clicked: false};
    // For click working in Responsive Navbar
    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked})
    }
     
    // This Logic is for Laptop Mode Buttons
    handleSignUp = () => {
        // Implementing navigation logic to navigate to SignUp page
        window.location.href = '/LoginRegister'; // Redirect to SignUp page
    };
    handleLogin = () => {
        // Implementing navigation logic to navigate to Login page
        window.location.href = '/LoginRegister'; // Redirect to Login page
    };
    // Navbar Code
    render(){
        console.log('Navbar component rendered');
        console.log('Clicked state:', this.state.clicked);
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Auto Cv Maker</h1>
                {/* For Responsivness of Navbar */}
                {/* This Logic is for closing and opening of bars */}
                <div className="menu-icons" onClick={this.handleClick}>
                {/*if bar icon clicked show close icon */}
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i> 
                </div>
                {/* ul list From Here */}
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) =>{
                        return(
                    <li key={index}>
                        {/* For react Dom using Link */}
                    <Link className={item.cName} to={item.url}><i className={item.icon}></i>{item.title}</Link>
                    </li>
                )
                })}
                </ul>
               {/* Sign Up and Login buttons */}
            <button id="button1" onClick={this.handleSignUp}>Sign Up</button>
            <button id="button2" onClick={this.handleLogin}>Login</button>
            </nav>
        )
    }
}

export default Navbar;