import React from 'react';
import Navbar from './navbar';
import './hero.css';

const Hero = () => {
    return (
        <section className="hero hero-styling">
            <Navbar/>
            <div className="hero-body">
                <div className="container">
                <h1 className="title has-text-light heading">
                    Inklings
                </h1>
                    <br/>
                </div>
            </div>
        </section>        
    )
}

export default Hero;
