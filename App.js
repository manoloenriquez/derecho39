import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'; 
import Home from './Home'; 
import Footer from './Footer';
import Eb from './Eb';
import Base from './Base';
import Colleges from './Colleges';
import LA from './LA';
import Agenda from './agenda';

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
            <Route path="/colleges" element={<Colleges />} />
            <Route path="/la" element={<LA />} />
            <Route path="/agenda" element={<Agenda />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
