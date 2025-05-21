import React from 'react';
import './app.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <div className='app'>
      <div className="appContainer">

        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/about' element={<About />} /> */}
          {/* <Route path='/contact' element={<Contact />} /> */}
        </Routes>
        
      </div>
    </div>
  )
}

export default App