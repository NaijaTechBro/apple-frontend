import React from 'react'
import { Link } from 'react-router-dom';
import phoneImg from "../../assets/phone-img.png";
import "./Section.scss"

const Section = () => {
    return (
        <section className="container hero">
            <div className="hero-image">
        <img src={phoneImg} alt="Inventory" />
        </div>
        <div className="hero-text">
        <h2>Here are our Amazing <span>Features.</span></h2>

        <div className="hero-buttons --flex-start">
            <div className="container-right">
                <h2><span>1.</span>User Friendly</h2>
                <p>ResoPay come up with modern and sleek design and not complicated.</p>
            </div>
    </div>
        </div>
    </section>
    )
}

export default Section