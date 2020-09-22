import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useHistory
} from "react-router-dom";
import { UserContext } from '../../App';
import logo from '../../Logo.png';
import './Header.css';

const Header = () => {
    const history = useHistory();
    const handleLogin = () => {
        history.push("/login");
    };
    const handleSignOut = () => {
        history.push("/");
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Router>
            <div>
                <nav>
                    <ul style={{listStyleType:'none', display: 'flex'}}>
                        <li>
                            <Link to="/"><img src={logo} alt=""/></Link>
                        </li>
                        <li>
                            <Link to="/" className="navLink"><input style={{fontSize:'15px', padding:'15px', border:'none', borderRadius:'5px'}} type="text" placeholder="Search your destination"></input></Link>
                        </li>
                        <li>
                            <Link to="/news" className="navLink">News</Link>
                        </li>
                        <li>
                            <Link to="/destination" className="navLink">Destination</Link>
                        </li>
                        <li>
                            <Link to="/blog" className="navLink">Blog</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="navLink">Contact</Link>
                        </li>
                        <li>
                            {loggedInUser.isSignedIn ? (
                                <button style={{marginTop:'20px'}} className="btn btn-warning" onClick={handleSignOut}>Sign Out</button>
                            ) : (
                                <button style={{marginTop:'20px'}} className="btn btn-warning" onClick={handleLogin}>Login</button>
                            )}
                        </li>
                        <li>
                            {
                                loggedInUser.isSignedIn && (
                                    <div style={{marginLeft:'20px'}}>
                                        {loggedInUser.name ? loggedInUser.name.split(" ").slice(0,1) : "User"}
                                    </div>
                                )
                            }
                        </li>
                    </ul>
                </nav>
            </div>
        </Router>
    );
};

export default Header;