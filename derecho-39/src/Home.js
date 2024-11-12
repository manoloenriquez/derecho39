// Home.js
import { Link } from 'react-router-dom';
import './home.css';

const images = [
  { src: '/ccs-slate.png', alt: 'CCS', link: '/ccs' },
  { src: '/cla-slate.png', alt: 'CLA', link: '/cla' },
  { src: '/cos-slate.png', alt: 'COS', link: '/cos' },
  { src: '/cob-slate.png', alt: 'RVR-COB', link: '/cob' },
  { src: '/soe-slate.png', alt: 'SOE', link: '/soe' },
];

const Home = () => {
  return (
    <div className="home">
      <div className="image-container">
        {/* First row with three images */}
        <div className="image-row">
          {images.slice(0, 3).map((image, index) => (
            <div className="image-wrapper" key={index}>
              <Link to={image.link}>
                <img src={image.src} alt={image.alt} className="group-image" />
              </Link>
            </div>
          ))}
        </div>

        {/* Second row with two centered images */}
        <div className="image-row" style={{ justifyContent: 'center' }}>
          {images.slice(3).map((image, index) => (
            <div className="image-wrapper" key={index}>
              <Link to={image.link}>
                <img src={image.src} alt={image.alt} className="group-image" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
