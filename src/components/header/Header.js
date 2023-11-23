import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css"

export const Header = () => {
    return (
        <div>
            <header className="header">
                <ul className="menu" style={{}}>
                    <li>
                        <NavLink
                            to="/home"
                            tag={Link}
                            activeStyle={{ fontWeight: "bold" }}
                            style={{}}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/home"
                            tag={Link}
                            activeStyle={{ fontWeight: "bold" }}
                            style={{}}
                        >
                            about
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/home"
                            tag={Link}
                            activeStyle={{ fontWeight: "bold" }}
                            style={{}}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </header>
        </div>
    );
};
