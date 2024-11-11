import React from 'react';
import './la.css';
import Footer from './Footer'; // Import Footer component

const legislators = [
  { name: "Pharell TACSUAN", role: "EXCEL2027 Batch Legislator", course: "ECM-LGL", school: "DLSU Integrated School" },
  { name: "Ivan MANGUBAT", role: "CATCH2T27 Batch Legislator", course: "BS CS-ST", school: " Colegio San Agustin - Biñan" },
  { name: "Jules VALENCIANO", role: "CATCH2T28 Batch Legislator", course: "BS CS-ST", school: "Angeles City Science High School" },
  { name: "Ystiphen DELA CRUZ", role: "79th ENG Batch Legislator", course: "BS BME", school: "DLSU Integrated School" },
  { name: "Zach QUIAMBAO", role: "FAST2023 Batch Legislator", course: "AB POM", school: "Angeles City Science High School" },
  { name: "Ken CAYANAN", role: "FAST2024 Batch Legislator", course: "AB POM", school: "National University" },
  { name: "Iñaki SALDAÑA", role: "BLAZE2025 Batch Legislator", course: "BS LGL", school: "Don Bosco Academy Pampanga" },
  { name: "Naomi CONTI", role: "BLAZE2027 Batch Legislator", course: "BS LGL", school: "Immaculate Conception Academy" },
];

export default function LA() {
  return (
    <div className="la-page">
      <div className="main-container">
        <div className="left-section">
          <img src="/sidebar-image.png" alt="Sidebar" />
        </div>
        <div className="la-container">
          <h1 className="title">YOUR BATCH LEGISLATORS</h1>
          <div className="legislators-grid">
            {legislators.map((legislator, index) => {
              const nameParts = legislator.name.split(" ");
              const firstName = nameParts[0];
              const lastName = nameParts.slice(1).join(" ");
              return (
                <div className="legislator-card" key={index}>
                  <div className="legislator-photo">
                    <img
                      src={`/${legislator.name.replace(" ", "_").toLowerCase()}bl.png`}
                      alt={legislator.name}
                    />
                  </div>
                  <div className="legislator-info-box">
                    <h2>
                      {firstName} <span>{lastName}</span>
                    </h2>
                    <p className="role">{legislator.role}</p>
                    <p className="course">{legislator.course}</p>
                    <p className="school">{legislator.school}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer className="la-footer" />
    </div>
  );
}

