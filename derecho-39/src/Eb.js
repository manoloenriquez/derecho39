// Eb.js
import React from 'react';
import './Eb.css';

const Eb = () => {
  return (
    <div className="eb">
      {/* Top Banner Section */}
      <div className="banner">
        {/* Directly refer to the public folder image */}
        <img src="/eb-banner.png" alt="Banner" className="banner-image" />
      </div>

      {/* Content Section */}
      <div className="content">
        <h2 className="section-title">REALIZED LASALLIAN PURPOSE</h2>
        <p className="description">
          As our USG reaches its 15th year, we celebrate the personal and shared experiences guiding us toward our dreams and goals as Lasallians. 
          In our journey of discovering these, we value our individual pursuits and embrace the strengths found within our different capacities.
        </p>
        <p className="description">
          The University Student Government is dedicated to empowering you in your everyday student life through opportunities focused on purposeful 
          student response, transformative university life, and collaborative community development, helping you academically and socially thrive. 
          By respecting each individual’s unique journey, we foster an environment where you can achieve your fullest potential.
        </p>
        <p className="description">
          A Realized Lasallian Purpose means finding your place in the university and your role in the community. This is a university life that you 
          can call yours.
        </p>

        {/* Highlighted Title for Thrusts */}
        <div className="thrusts-title">
          <span>EXECUTIVE BOARD THRUSTS</span>
        </div>

        <div className="thrusts">
          <div className="thrust">
            <h3 className="thrust-heading">Student Response</h3>
            <p>
              Improving our student response to diverse concerns means having an intentional approach 
              through maximized student resources and services.
            </p>
          </div>
          <div className="thrust">
            <h3 className="thrust-heading">University Life</h3>
            <p>
              A university life that achieves sustainable success by integrating accessible academic 
              support, improved facilities and security, and increased digital literacy.
            </p>
          </div>
          <div className="thrust">
            <h3 className="thrust-heading">Community Development</h3>
            <p>
              Strengthening our community means fostering collaboration within and beyond the university 
              through multi-sectoral initiatives that celebrate cultural diversity, promote community and 
              career engagement, and support national progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eb;
