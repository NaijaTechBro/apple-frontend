import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import loginImg from "../../assets/login.svg";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="container hero">
        <div className="hero-text">
          <h2>Awesome App <br/> For Saving <span>Time.</span></h2>
          <p>
          We bring you a mobile app for banking problems that oftenly wasting much of your times.
          </p>
          <div className="hero-buttons --flex-start">
            <button className="hero-button">
              <Link to={"/register"}>Start Saving</Link>
            </button>
            {/* <button className="--btn --btn-primary">
              <Link to={"/login"}>Login</Link>
            </button> */}
          </div>
        </div>

        <div className="hero-image">
          <img src={loginImg} alt="Inventory" />
        </div>
      </section>
    </>
  );
};

export default Home;
