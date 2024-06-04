import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/home';
import Service from './components/Service';
// import Works from './components/Works';
// import Stories from './components/Stories';
// import Culture from './components/Culture';
// import Career from './components/Career';
// import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        {/* <Route path="/works" element={<Works />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
