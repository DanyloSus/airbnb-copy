import React from "react";
import collage from "../images/collage.png"

export default function Start () {
    return (
        <div id="start">
            <img 
                src={collage}
                alt="collage"
                className="collage"
            />
            <div>
                <h1>Online Experience</h1>
                <p>
                    Join unique interactiveactivities led 
                    by one-of-a-kind hosts-all without leaving home.
                </p>
            </div>
        </div>
    );
}
