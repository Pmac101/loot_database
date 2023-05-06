import React from "react";
import {NavLink, Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark} from '@fortawesome/free-solid-svg-icons'
import "../../App.css"


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
            <div className="container">
                <Link to="/" className='fs-3 navbar-brand'>Loot Database</Link>
                <button
                    className="navbar-toggler"
                    type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    {/* TODO: add to CSS file*/}
                    <style jsx>
                        {`
                            button[aria-expanded="false"] > .close {
                            display: none;
                            }
                            
                            button[aria-expanded="true"] > .open {
                            display: none;
                            }
                        `}
                    </style>
                    <FontAwesomeIcon className="open" icon={faBars} />
                    <FontAwesomeIcon className="close" icon={faXmark} />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav fs-5">
                        <NavLink activeClassName="active" to="/" className="nav-link">Characters</NavLink>
                        <NavLink to="/episodes" className="nav-link">Episodes</NavLink>
                        <NavLink to="/location" className="nav-link">Location</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;