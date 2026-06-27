import React from "react";
import "../../Styles/HeroSection.css";

import leader from "../../Assets/hero-trans.png";
import bg from "../../Assets/crowd.png";
import flag from "../../Assets/flag.png";
import roadImg from "../../Assets/home.jpg";
import news1 from "../../Assets/Logo.jpg";

import {
  FaRegEdit,
  FaFacebookF,
  FaInstagram,
  FaHospital,
  FaYoutube,
  FaTwitter,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClipboardList,
} from "react-icons/fa";

import {
  MdEngineering,
  MdPeople,
  MdSupportAgent,
  MdOutlineCampaign,
} from "react-icons/md";

function HeroSection() {
  const services = [
    {
      icon: <FaRegEdit />,
      title: "Submit Grievance",
      sub: "Lodge your complaint",
      color: "#2563eb",
    },
    {
      icon: <FaHospital />,
      title: "Apply for CMRF",
      sub: "Medical financial help",
      color: "#16a34a",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Book Appointment",
      sub: "Meet your leader",
      color: "#0ea5e9",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Find My Booth",
      sub: "Know your booth",
      color: "#f97316",
    },
    {
      icon: <FaClipboardList />,
      title: "Survey & Feedback",
      sub: "Share your opinion",
      color: "#7c3aed",
    },
  ];

  const developments = [
    {
      image: roadImg,
      title: "CC Road Construction",
      location: "Ramagundam - Ward 28",
      status: "Completed",
    },
    {
      image: roadImg,
      title: "Drainage System",
      location: "Indiranagar Colony",
      status: "Completed",
    },
    {
      image: roadImg,
      title: "Street Light Installation",
      location: "Ward 15",
      status: "In Progress",
    },
    {
      image: roadImg,
      title: "Community Hall Construction",
      location: "Godavarikhani",
      status: "Completed",
    },
  ];

  const news = [
    {
      image: news1,
      title: "Free Health Camp Conducted",
      date: "May 16, 2025",
    },
    {
      image: news1,
      title: "New Road Project Approved",
      date: "May 15, 2025",
    },
    {
      image: news1,
      title: "Janata Darbar on 20 May",
      date: "May 14, 2025",
    },
    {
      image: news1,
      title: "CMRF Help Provided",
      date: "May 13, 2025",
    },
  ];

  const events = [
    {
      day: "20",
      month: "MAY",
      title: "Janata Darbar",
      place: "Ramagundam Office",
      time: "10:00 AM",
    },
    {
      day: "25",
      month: "MAY",
      title: "Youth Meeting",
      place: "Community Hall",
      time: "04:00 PM",
    },
    {
      day: "30",
      month: "MAY",
      title: "Public Meeting",
      place: "Mandal Office",
      time: "11:00 AM",
    },
    {
      day: "15",
      month: "JUNE",
      title: "Public Meeting",
      place: "Mandal Office",
      time: "12:00 PM",
    },
  ];

  return (
    <>
      {/* HERO */}

      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,43,102,.88), rgba(0,43,102,.88)), url(${bg})`,
        }}
      >
        <div className="hero-container">
          {/* LEFT */}

          <div className="hero-left">
            <img src={leader} alt="Leader" className="leader-image" />
          </div>

          {/* CENTER */}

          <div className="hero-center">
            <h1>
              Committed to
              <br />
              <span>Development & People</span>
            </h1>

            <p>
              Working together for a better future and stronger constituency
              through development, welfare and transparent governance.
            </p>

            <div className="vision-box">
              <h4>Our Vision</h4>

              <p>
                Quality education, employment opportunities, healthcare,
                infrastructure and welfare for every family.
              </p>
            </div>

            <button className="hero-btn">Know More</button>
          </div>

          {/* RIGHT */}

          <div className="hero-right">
            <img src={flag} alt="India Flag" className="flag" />

            <div className="profile-card">
              <h3>Inturi Nageswara Rao</h3>

              <span>Kandukur Constituency</span>

              <h2>MLA Candidate</h2>

              <div className="socials">
                <FaFacebookF className="facebook" />
                <FaTwitter className="twitter" />
                <FaInstagram className="instagram" />
                <FaYoutube className="youtube" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}

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

      {/* QUICK SERVICES */}

      <section className="quick-services">
        <div className="section-header">
          <h3>Quick Services</h3>
        </div>

        <div className="service-grid">
          {services.map((item, index) => (
            <div className="service-card" key={index}>
              <div
                className="service-icon"
                style={{
                  backgroundColor: item.color,
                  color: "#fff",
                }}
              >
                {item.icon}
              </div>

              <h5>{item.title}</h5>

              <p>{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DASHBOARD */}

      <section className="dashboard-section">
        {/* DEVELOPMENT */}

        <div className="dashboard-card">
          <div className="card-top">
            <h4>Latest Development Works</h4>
            <a href="/">View All</a>
          </div>

          {developments.map((item, index) => (
            <div className="list-item" key={index}>
              <div className="work-left">
                <img src={item.image} alt={item.title} className="work-img" />

                <div className="work-content-dev">
                  <h6>{item.title}</h6>
                  <small>{item.location}</small>
                </div>
              </div>

              <span className="status">{item.status}</span>
            </div>
          ))}
        </div>

        {/* NEWS */}

        <div className="dashboard-card">
          <div className="card-top">
            <h4>Latest News</h4>
            <a href="/">View All</a>
          </div>

          {news.map((item, index) => (
            <div className="list-item" key={index}>
              <div className="work-left">
                <img src={item.image} alt={item.title} className="work-img" />

                <div className="work-content-news">
                  <h6>{item.title}</h6>
                  <small>{item.date}</small>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EVENTS */}

        <div className="dashboard-card">
          <div className="card-top">
            <h4>Upcoming Events</h4>
            <a href="/">View All</a>
          </div>

          {events.map((item, index) => (
            <div className="event-item" key={index}>
              <div className="event-date">
                <span>{item.month}</span>
                <h5>{item.day}</h5>
              </div>

              <div className="event-info">
                <h6>{item.title}</h6>
                <small>{item.place}</small>
              </div>

              <div className="event-time">{item.time}</div>
            </div>
          ))}

          <button className="view-events-btn">View All Events</button>
        </div>
      </section>

      {/* STAY CONNECTED */}

      <section className="stay-connected">
        <div className="stay-left">
          <h4>Stay Connected</h4>
          <p>Join us in building a stronger and better constituency.</p>
        </div>

        <div className="stay-right">
          <button className="whatsapp-btn">WhatsApp Channel</button>

          <div className="footer-socials">
            <FaFacebookF className="foot-facebook" />
            <FaTwitter className="foot-twitter" />
            <FaInstagram className="foot-instagram" />
            <FaYoutube className="foot-youtube" />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
