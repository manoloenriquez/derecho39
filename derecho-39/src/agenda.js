import React, { useState } from 'react';
import './agenda.css';
import Footer from './Footer';

const committees = [
    { title: "Students Rights and Welfare (STRAW)", content: "This committee is in charge of proposing and reviewing policies of the USG and the University regarding students rights and welfare. This includes tackling pertinent issues such as mental health, anti-discrimination, and safe spaces." },
    { title: "Rules and Policies (RnP)", content: "This committee is dedicated to creating and reviewing the internal policies of the USG to ensure its effectiveness and efficiency. In coordination with other branches, these policies promote integrity in the USG and maximize its function of representing the student body." },
    { title: "National Affairs (NatAff)", content: "This committee looks into relevant and pressing national issues. They oversee the creation and release of manifestos and open letters which reflect the stance of the USG on these issues. Such manifestos and open letters are disseminated through the social media pages of the USG." },
];

const thrusts = [
    { title: "Thrust 1: Student Response", description:"Improving our student response to diverse concerns means having an intentional approach through maximized student resources and services.", agendas: [
        { title: "A Review on the Approved Absences", content: "This review aims to review and expand qualifications for approved absences, offering greater leniency for students affected by natural disasters, religious observances, and other circumstances to ensure students receive fair support in managing their academic responsibilities." },
        { title: "Enhancing AI Academic Policies", content: "This initiative aids the university’s responsible AI integration by collaborating with faculty to set clear and fair guidelines. It lets students appeal penalties from false AI flags and  promotes effective learning in areas like note refinement, and grammar checking." },
        { title: "Termly Evaluation of USG Electeds", content: "This initiative aims to improve the USG evaluation process with term-end public reports and a standardized metric system, ensuring transparency and systematic oversight of officers while providing students with a clear way to track progress." },
    ]},
    { title: "Thrust 2: University Life", description: "A university life that achieves sustainable changes is achieved through accessible academic support, improved facilities and security, and increased digital literacy..", agendas: [
        { title: "University Opportunities Hub", content: "This policy aims to centralize access to scholarships, workshops, events, and exchange programs within Canvas, streamlining resources for students. UniOps seeks to enhance academic, career, and personal growth, ensuring a more enriching university experience." },
        { title: "Multi-Faith Inclusivity Policy", content: "This initiative enhances campus inclusivity by adding prayer mats to existing spaces and increasing the number of prayer spaces, ensuring accessible facilities for students of all faiths and fostering freedom of belief and mutual respect ." },
        { title: "Campus Hygiene Accessibility Enhancement", content: "Access to hygiene essentials on campus should be seamless. This initiative seeks to install additional vending machines with sanitary products, tissues, and more near restrooms, ensuring students have what they need, promoting a more inclusive and accessible campus." },
    ]},
    { title: "Thrust 3: Community Development", description: "Strengthening our community means fostering collaboration with and beyond the university through multi-secotral initiatives that celebrate cultural diversity, promote community and career engagement, and support national progress.",agendas: [
        { title: "Mandating the USG to Endorse Candidates", content: "Emphasizing the importance of USG's endorsement of candidates in participation for national and local elections, highlighting student's political (opinion?) " },
        { title: "Network for Indigenous and Provincial Students", content: "Many students come from provinces and Indigenous communities. This student network provides a welcoming space for them to connect, access resources, and find peer mentors. It fosters cultural celebration and belonging, enhancing inclusivity on campus." },
        { title: "Reviewing Campus Guidelines for Student Mobilization", content: "Student mobilizations ensure a well-heard student body but often face administrative restrictions. This agenda proposes a review of DLSU’s guidelines on student mobilization to reduce red tape, this empowers free speech and civic participation." },
    ]},
];

export default function Agenda() {
  const [currentPage, setCurrentPage] = useState(0);
  const agendasPerPage = 3;
  const totalThrusts = thrusts.length;

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalThrusts);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalThrusts) % totalThrusts);
  };

  const displayedThrust = thrusts[currentPage];

  return (
    <div className="agenda-page">
      <div className="main-container">
        {/* <div className="left-section">
          <img src="/sidebar-image.png" alt="Sidebar" />
        </div> */}
        <div className="agenda-container">
          <h1 className="title">What is the Legislative Assembly?</h1>
          <div className="committees-grid">
            {committees.map((committee, index) => (
              <div className="committee-card" key={index}>
                <h2>{committee.title}</h2>
                <p>{committee.content}</p>
              </div>
            ))}
          </div>
          {/* <h1 className="title">Our LA Agenda</h1>
          <p className="intro-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p> */}
          
          {/* Thrust Section */}
          <h2 className="title">{displayedThrust.title}</h2>
          <p className="intro-text">{displayedThrust.description}</p>
          <div className="agenda-grid">
            {displayedThrust.agendas.map((agenda, index) => (
              <div className="agenda-card" key={index}>
                <h2>{agenda.title}</h2>
                <p>{agenda.content}</p>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="pagination">
            <button onClick={handlePrevious}>←</button>
            <button onClick={handleNext}>→</button>
          </div>
        </div>
      </div>
      <Footer className="agenda-footer" />
    </div>
  );
}
