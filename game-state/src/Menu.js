import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Menu.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
class Menu extends Component {
    
    render() {
        
        return (
 
            <nav>
                    
                        <Link to="/button" class = "buttonPractice">Button Practice App</Link>
                        <Link to="/App" class = "rollDiceApp">Roll Dice App</Link>
                   

            </nav>

        );

    };
}

export default Menu;