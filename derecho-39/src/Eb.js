// Eb.js
import React, { useState } from 'react';
import './Eb.css';

const Eb = () => {
  const spoaData = [
    {
      title: "University Policies for Progress: Comprehensive Review and Revitalization",
      description: "The University Policies for Progress aims to review and enhance essential university policies, ensuring they effectively address the evolving needs of the student community."
    },
    {
      title: "ON-SIGHT: Grounded Student Services Assistance",
      description: "ON-SIGHT: Grounded Student Services offers on-site support in computer labs during enlistment season, with ITS staff ready to assist and a comprehensive team available for any student concerns."
    },
    {
      title: "Campaign for the Enhancement of the University’s Online Interfaces, Platforms, and System",
      description: "The Campaign for the Enhancement of the University’s Online Interfaces, Platforms, and Systems aims to modernize digital resources for the Lasallian community. By gathering user feedback through surveys, focus groups, and open forums, the campaign will identify and address the needs of students, faculty, and staff. Targeted improvements will be made to platforms like MLS, Animosys, and Animo Connect, ensuring they are user-friendly and effective. The initiative will also provide training and support resources, fostering a streamlined online experience that enhances academic and professional succes for all users."
    },
    {
      title: "Veritas La Salle: An Information Dissemination Initiative",
      description: " Veritas La Salle seeks to optimize the communication of university information and relevant affairs, ensuring that the DLSU community stays well-informed and engaged."
    },
    {
      title: " Campus Safety Enhancement",
      description: " Campus Safety Enhancement aims to create a safer university environment by collaborating with the Task Force Safe School, advocating for more CCTV cameras in theft-prone areas, and offering self-defense workshops for student safety. The Transportation Support Group would also allow secure ride-sharing for safer commuting fostering a proactive and protected campus community."
    },
    {
      title: "Lead Forward Lasallian",
      description: "Lead Forward Lasallian is an interactive project with leadership events such as an apprenticeship program and skills building for both internal and external opportunities."
    },
    {
      title: "Alerto, Lasalyano: A Crisis Response Initiative",
      description: "Alerto, Lasalyano! is a crisis response initiative to boost safety and preparedness in the Lasallian community, featuring an Emergency Protocol and re-establishing the Lasallian Center for Emergencies as an evacuation hub."
    },
    {
      title: "Improvement of Facilities and Management",
      description: "The Improvement of Facilities and Management aims to secure additional campus resources to enhance learning spaces, including public telephones connected to offices for reporting issues and charging stations in key areas."
    },
    {
      title: "Establishment of Certificate Programs for Undergraduate Students",
      description: "The Establishment of Certificate Programs for Undergraduate Students aims to connect the Lasallian community to certified online courses that develop both hard and soft skills. Online certification programs related to productivity resources will be offered to enhance our Lasallian learning. "
    },
    {
      title: " Extended Assistance Program",
      description: " With the goal of assisting students, the Extended Assistance program provides additional financial assistance to students to lessen their financial responsibilities. The program determines each student's unique needs through individual evaluations and offers support through the Lasallian Equity Scholarship & Services (LESS) and AniMoney Workshops (AW)."
    },
    {
      title: "DLSU Finance Compass: Transparency & Insights Hub",
      description: "DLSU Finance Compass: Transparency and Insights Hub is an all-in-one platform that aims to help students navigate financial updates both inside and outside DLSU. "
    },
    {
      title: "Archers Saver",
      description: "The Archers Saver is abenefits program for the Lasallian community, offering exciting discounts, promos, and deals at local restaurants, stores, and through partnerships with internal concessionaires and external companies. Students can avail of these offers by presenting their ID and Archers Saver Card."
    },
    {
      title: "Comprehensive Review of Tuition Fee Policies",
      description: "The Comprehensive Review of Tuition Fee Policies is dedicated to advocating for policies that alleviate the financial burden of tuition on students. This ensures that all students have access to quality education without the overwhelming stress of financial debt."
    },
    {
      title: "DLSU Hall of Fame",
      description: "DLSU Hall of Fame aims to feature Lasallians, their notable achievements in various fields (research, sports, leadership, etc.). This will be done through utilizing the bulletin boards in each building and the USG online platforms, boosting the Lasallian identity throughout the years. "
    },
    {
      title: "Lasallian Legal Empowerment and Protection",
      description: " The Lasallian Legal Empowerment and Protection aims to empower students and the community by establishing a University Legal Resource Hub, as well as offer, sit-in classes, and for those interested in learning more about legal processes, rights, and advocacy. Additionally, a Lawmakers Forum will facilitate discussions on current legal issues to enhance awareness and advocacy for legal rights."
    },
    {
      title: " Project Eco-Brick: Building a Sustainable Future",
      description: "In line with the University’s Sustainable Development initiative, Lasallian Environmental Sustainability and Governance (L-Envisage), Project Eco-Brick is a two-point, multi-sectoral program designed to promote environmental responsibility and sustainability."
    },
    {
      title: "Bridges Beyond Borders: Advocacy Action and Awareness Initiative",
      description: " The Bridging Beyond Borders initiative promotes awareness of diverse cultures and histories. Key activities include SDG Action and Awareness Week for empowering marginalized communities in collaboration with NGOs, Cultural Exchange Programs with diverse universities, and educational tours to local cultural sites."
    },
    {
      title: "Echoes of Insight: Media Literacy and Awareness Program",
      description: "The Echoes of Insight: Media Literacy and Awareness Program is an interactive program designed to inform individuals with the skills to navigate evaluating sources, identifying misinformation, and understanding media bias by partnering with leading fact-checking organizations and media outlets."
    },
    {
      title: "PROPEL: Professional and Personal Lasallians",
      description: " PROPEL: Professional and Personal Lasallians is a holistic platform designed to empower Lasallians by providing essential resources for career development and life skills. PROPEL is structured in two aspects: Career Development and Adulting. "
    },
    {
      title: "Boto Mo, Para Sa Pagbabago: A Voter Education Campaign",
      description: " Boto Mo, Para Sa Pagbabago is a comprehensive voter education campaign aimed at empowering the Lasallian community through active participation in the electoral process."
    },
    {
      title: "Health Connect",
      description: " Health Connect empowers Lasallians to take charge of their health by fostering open discussions and breaking stigma through health screenings and wellness programs, promoting a holistic approach to well-being."
    },
    {
      title: "EmpowerHER: Women’s Health, Rights, and Safety Initiative",
      description: "EmpowerHER is an initiative advancing women's health, rights, and safety through four key programs: Let's Talk Sanitary Products! on menstrual health, a seminar on gender equality legislation, mentorship for women entrepreneurs, and a Personal Safety Initiative."
    },
    {
      title: "We Matter: A Gender Equality Initiative",
      description: " We Matter: Gender Equality Initiative promotes safe spaces through a policy forum, raises awareness of SOGIESC, and offers a seminar on gender fair language to support inclusive communication."
    },
    {
      title: "#OneDLSU: Reestablishment of Alliances Within and Beyond ",
      description: "#OneDLSU is an initiative to strengthen connections within the De La Salle University community by uniting organizations, inviiting advocacy groups and building DLSU chapters, and external partners. It fosters student engagement and advocacy for a unified Lasallian community making a positive impact."
    },
    
  ];

  const [currentGroup, setCurrentGroup] = useState(0);
  const spoasPerPage = 3;
  const totalGroups = Math.ceil(spoaData.length / spoasPerPage);

  const nextGroup = () => {
    setCurrentGroup((prevGroup) => (prevGroup + 1) % totalGroups);
  };

  const prevGroup = () => {
    setCurrentGroup((prevGroup) => (prevGroup - 1 + totalGroups) % totalGroups);
  };

  const currentSpoas = spoaData.slice(
    currentGroup * spoasPerPage,
    currentGroup * spoasPerPage + spoasPerPage
  );

  return (
    <div className="eb">
      {/* Top Banner Section */}
      <div className="banner">
        {/* Directly refer to the public folder image */}
        <img src="/eb-banner.png" alt="Banner" className="banner-image" />
      </div>

      {/* Content Section */}
      <div className="content-text">
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

        {/* Highlighted Title for SPOAs */}
      <div className="spoa-title">
        <span>EXECUTIVE BOARD SPECIFIC PLANS OF ACTION</span>
      </div>

      <div className="spoas">
        {currentSpoas.map((spoa, index) => (
          <div key={index} className="spoa">
            <h3 className="spoa-heading">{spoa.title}</h3>
            <p>{spoa.description}</p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button onClick={prevGroup} disabled={currentGroup === 0}>Previous</button>
        <button onClick={nextGroup} disabled={currentGroup === totalGroups - 1}>Next</button>
      </div>

        
      </div>
    </div>
  );
};

export default Eb;
