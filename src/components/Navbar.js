import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../assets/css/navbar.css'

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white  shadow">
            <div className="container">
                <Link className="navbar-brand" to="/">CHETTIYARS COMMUNITY</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home
              <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/plan">Plan</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Search Profile</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item hire">
                            <Link className="nav-link register-btn" to="/register">Register</Link>
                        </li>
                        <li className="nav-item hire">
                            <Link className="nav-link login-btn " to="/login">Login</Link>
                        </li>
                    </ul>
                </div>


            </div>

        </nav>

    )
};
export default Navbar;
