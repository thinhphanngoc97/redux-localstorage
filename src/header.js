import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink exact to="/" className="nav-link item">Friend List</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/add" className="nav-link item">Add Friend</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;