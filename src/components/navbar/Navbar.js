import React, { Component } from 'react'
import './Navbar.css';
import Logo from '../../assets/images/logo.jpg';
import Home from '../../assets/images/Shape.png';
import Entity from '../../assets/images/entity.png';
import Notice from '../../assets/images/Shape@2x.png';
import UserPics from '../../assets/images/user-account.png';
import ViewDown from '../../assets/images/Path.png';

export default class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
            <div className="Navbar__Link Navbar__Link-brand navlink-brand">
                <div>
                <img src={Logo} alt="logo"  className="logo-brand"/> 
                </div>
                <div className="logo-text">FE Engineer Test 1</div>
                </div>
                <div className="Navbar__Link Navbar__Link-toggle">
                <i className="fas fa-bars"></i>
                </div>
            <nav className="Navbar__Items navbar-center" >
                <div className="Navbar__Link no-active-link">
                <img src={Home} alt="logo"/> Home
                </div>
                <div className="Navbar__Link no-active-link">
                <img src={Entity} alt="logo"/> Entity
                </div>
                <div className="Navbar__Link Active-link"><i className="fas fa-cubes fa-lg"></i> Divisions
               
                </div>
            </nav>
            <nav className="Navbar__Items Navbar__Items--right">
                <div className="Navbar__Link search-div">
                <input type="search" />
                <i className="fas fa-search fa-lg search-icon"></i>
                </div>
                <div className="Navbar__Link">
                <img src={Notice} alt="logo" className="notice-icon"/>
                </div>
                <div className="Navbar__Link user-div">
                    <div>
                        <img src={UserPics} alt="logo" className="user-pics"/>
                    </div>
                    <div><img src={ViewDown} alt="logo" className="ciew-down"/></div>
                </div>
            </nav>
            </div>
        )
    }
}
