import React from "react";
import star from "../images/star.png"

export default function List () {
    return (
        <div className="list">
            <div className="item">
                <div className="image f">
                    <p align="center">SOLD OUT</p>
                </div>
                <div className="text">
                    <p className="rating">
                        <img 
                            src={star}
                            alt="star"
                        />
                         5.0 <span>(6) • USA</span>
                    </p>
                    <p className="name">Life lessons with Katie Zaferes</p>
                    <p className="price"><span>From $136</span> / person</p>
                </div>
            </div>
            <div className="item">
                <div className="image s">
                    <p align="center">ONLINE</p>
                </div>
                <div className="text">
                    <p className="rating">
                        <img 
                            src={star}
                            alt="star"
                        />
                         5.0 <span>(30) • USA</span>
                    </p>
                    <p className="name">Learn wedding photography</p>
                    <p className="price"><span>From $125</span> / person</p>
                </div>
            </div>
            <div className="item">
                <div className="image t">
                    <p>SOLD OUT</p>
                </div>
                <div className="text">
                    <p className="rating">
                        <img 
                            src={star}
                            alt="star"
                        />
                         5.0 <span>(6) • USA</span>
                    </p>
                    <p className="name">Life lessons with Katie Zaferes</p>
                    <p className="price"><span>From $136</span> / person</p>
                </div>
            </div>
        </div>
    );
}