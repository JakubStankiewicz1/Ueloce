import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import FindUsPage from './pages/FindUsPage/FindUsPage';
import About from './pages/About/About';

const App = () => {
  return (
    <div className='app'>
      <div className="appContainer">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/find-us" element={<FindUsPage />} />
          <Route path="/about" element={<About />} />
          {/* <Route path='/about' element={<About />} /> */}
          {/* <Route path='/contact' element={<Contact />} /> */}
        </Routes>
        
      </div>
    </div>
  )
}

export default App