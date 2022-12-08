import React from "react";
import logo from "../images/logo.png"

export default function Header () {
    return (
        <header>
            <img
                src={logo}
                className="logo"
                alt="logo"
            />
        </header>
    );
}
