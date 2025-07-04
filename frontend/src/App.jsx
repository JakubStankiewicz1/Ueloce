import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import FindUsPage from './pages/FindUsPage/FindUsPage';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const App = () => {
  return (
    <div className='app'>
      <div className="appContainer">
        <ScrollToTop />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/find-us" element={<FindUsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
      </div>
    </div>
  )
}

export default App