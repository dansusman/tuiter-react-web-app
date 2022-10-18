import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div>
            <span>|</span>
            <Link to="/">Labs</Link>
            <span>|</span>
            <Link to="/hello">Hello</Link>
            <span>|</span>
            <Link to="/tuiter">Tuiter</Link>
            <span>|</span>
        </div>
    );
}

export default Nav;
