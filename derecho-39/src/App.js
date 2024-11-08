import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'; 
import Home from './Home'; 
import Footer from './Footer';
import Eb from './Eb';
import Base from './Base';
import Colleges from './Colleges';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Base />} />
            <Route path="/home" element={<Home />} />
            <Route path="/eb" element={<Eb />} />
            <Route path="/collges" element={<Colleges />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
