import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import dataAirbnb from "./data"

export default function App() {
    let mapData = dataAirbnb.map(items => {
        return <Card 
            img={items.coverImg}
            rating={items.stats.rating}
            reviewCount={items.stats.reviewCount}
            country={items.location}
            title={items.title}
            price={items.price}
        />
    })
    return (
        <div>
            <Navbar />
            <Hero />
            {mapData}
        </div>
    );
}
