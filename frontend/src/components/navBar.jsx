import React, {useState} from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './navBar.css' //for custom styling

const NavBar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNavBar = () => setIsNavOpen(!isNavOpen);


    return (
        <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
            <button
                className="navbar-toggler"
                type="button"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={toggleNavBar}
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/imageGeneration">Image Generator</Link>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default NavBar;