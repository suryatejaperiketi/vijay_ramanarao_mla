import React, { useState } from "react";
import "../../Styles/About.css";

import mlaImg from "../../Assets/home.jpg";

function About() {
  const [activeTab, setActiveTab] = useState("Biography");

  const tabs = [
    "Biography",
    "Political Journey",
    "Achievements",
    "Awards",
    "Family",
    "Vision 2030",
  ];

  return (
    <section className="about-mla">
      {/* Header */}
      <div className="about-header">
        <h2>About MLA</h2>
      </div>

      {/* Content */}
      <div className="about-card">
        {/* Left Menu */}
        <div className="about-sidebar">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "tab-btn active" : "tab-btn"}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Center Content */}
        <div className="about-content">
          <h3>Biography</h3>

          <p>
            Chinthakunta Vijaya Ramana Rao is a senior politician and public
            servant from Telangana. He has been actively involved in
            agriculture, social service, and public welfare initiatives for
            several decades. His political journey reflects dedication to rural
            development, farmers' welfare, and constituency progress.
          </p>

          <div className="info-boxes">
            <div className="info-item">
              <div className="icon">🎓</div>
              <div>
                <h5>Education</h5>
                <p>Completed Intermediate (1984)</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">🌾</div>
              <div>
                <h5>Profession</h5>
                <p>Social Worker & Politician</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="about-image">
          <img src={mlaImg} alt="MLA" />
        </div>
      </div>

      {/* Timeline */}
      <div className="timeline-section">
        <h3>Political Journey</h3>

        <div className="timeline">



  <div className="timeline-item">
    <div className="circle"></div>
    <h4>2009</h4>
    <p>First Elected MLA</p>
    <span>(TDP)</span>
  </div>

  <div className="timeline-item">
    <div className="circle"></div>
    <h4>2014</h4>
    <p>Contested as Congress Candidate</p>
    <span>Lost Election</span>
  </div>

  <div className="timeline-item">
    <div className="circle"></div>
    <h4>2018</h4>
    <p>Contested Again</p>
    <span>Lost Election</span>
  </div>

  <div className="timeline-item">
    <div className="circle"></div>
    <h4>2023</h4>
    <p>Won Peddapalle Seat</p>
    <span>55,108 Vote Majority</span>
  </div>

  <div className="timeline-item">
    <div className="circle"></div>
    <h4>2026</h4>
    <p>Appointed</p>
    <span>Government Whip</span>
  </div>

</div>
        </div>
  
    </section>
  );
}

export default About;
