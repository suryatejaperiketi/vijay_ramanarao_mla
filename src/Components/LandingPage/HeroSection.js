import React from "react";
import "../../Styles/HeroSection.css";
import leader from "../../Assets/hero-trans.png";
import bg from "../../Assets/crowd.png";
import flag from "../../Assets/flag.png";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

import {
  MdEngineering,
  MdPeople,
  MdSupportAgent,
  MdOutlineCampaign,
} from "react-icons/md";

function HeroSection() {
  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,43,102,.85), rgba(0,43,102,.85)), url(${bg})`,
        }}
      >
        <div className="hero-container">

          {/* Left */}
          <div className="hero-left">
            <img
              src={leader}
              alt="Chinthakunta Vijaya Ramana Rao"
              className="leader-image"
            />
          </div>

          {/* Center */}
          <div className="hero-center">
            <h1>
              Committed to
              <br />
              <span>Development & People</span>
            </h1>

            <p>
              Working together for a stronger and better future of
              Peddapalli Constituency.
            </p>

            <div className="vision-box">
              <h4>Our Vision</h4>

              <p>
                Transparent governance, quality education,
                infrastructure development, employment,
                healthcare and welfare for every citizen.
              </p>
            </div>

            <button>Know More</button>
          </div>

          {/* Right */}
          <div className="hero-right">

            <img src={flag} alt="India Flag" className="flag" />

            <div className="profile-card">

              <h3>Chinthakunta Vijaya Ramana Rao</h3>

              <span>MLA, Peddapalli Constituency</span>

              <h2>C.V. Ramana Rao</h2>

              <div className="socials">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaYoutube />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Statistics */}

      <section className="stats">

        <div className="stat-card">
          <MdEngineering className="icon blue" />
          <h2>1250+</h2>
          <p>Development Works</p>
        </div>

        <div className="stat-card">
          <MdPeople className="icon green" />
          <h2>85,000+</h2>
          <p>People Benefited</p>
        </div>

        <div className="stat-card">
          <MdSupportAgent className="icon orange" />
          <h2>4500+</h2>
          <p>Public Grievances Solved</p>
        </div>

        <div className="stat-card">
          <MdOutlineCampaign className="icon purple" />
          <h2>12,000+</h2>
          <p>Citizen Meetings</p>
        </div>

      </section>
    </>
  );
}

export default HeroSection;