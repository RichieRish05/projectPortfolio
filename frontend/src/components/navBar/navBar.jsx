//Import react hooks for component rendering and route navigation
import React, {useState} from "react"; 
import { Link } from 'react-router-dom';

//Custom styling
import './navBar.css' 

//Main component
const NavBar = () => {
    //React hook to control the state of the navigation bar when it collapses into a hamburger icon
    const [isNavOpen, setIsNavOpen] = useState(false);

    //Function to toggle the state of the navigaton bar
    const toggleNavBar = () => setIsNavOpen(!isNavOpen);


    return (
        /*
        Navigation bar container styled with bootstrap to adjust the navigation bar to 
        become a hamburger menu or fully expanding it depending on screen size
        */
        <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
            {/* Hamburger icon for toggling navigation menu in smaller screens */}
            <button
                className="navbar-toggler text-white"
                type="button"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={toggleNavBar}
            >
            <span className="navbar-toggler-icon"></span>
            </button>

            {/* Collapsible navigation menu that opens and closes based on button clicks*/}
            <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        {/* Link to Home Page */}
                        <Link className="nav-link" to="/" onClick={toggleNavBar}>Home</Link> 
                    </li>
                    <li className="nav-item">
                        {/* Link to About Page */}
                        <Link className="nav-link" to="/about" onClick={toggleNavBar}>About</Link> 
                    </li>
                    <li className="nav-item">
                        {/* Link to Projects Viewing Page */}
                        <Link className="nav-link" to="/projects" onClick={toggleNavBar}>Projects</Link> 
                    </li>
                    <li className="nav-item">
                         {/* Link to Image Generation Page */}
                        <Link className="nav-link" to="/imageGeneration" onClick={toggleNavBar}>Image Generator</Link>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

//Export for use in web pages
export default NavBar;