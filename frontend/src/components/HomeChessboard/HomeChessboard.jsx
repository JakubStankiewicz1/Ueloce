import React, { useEffect, useState } from 'react';
import './homeChessboard.css';

const HomeChessboard = () => {
  const [squares, setSquares] = useState(0);

  useEffect(() => {
    // Calculate how many squares we need based on window width
    const calculateSquares = () => {
      const windowWidth = window.innerWidth;
      const squaresNeeded = Math.ceil(windowWidth / 15);
      setSquares(squaresNeeded);
    };

    // Calculate initially
    calculateSquares();

    // Recalculate when window is resized
    window.addEventListener('resize', calculateSquares);
    
    // Cleanup
    return () => window.removeEventListener('resize', calculateSquares);
  }, []);

  // Create array for each row
  const renderSquares = (rowOffset) => {
    return Array(squares).fill(null).map((_, index) => {
      // Determine if square should be black or white
      // For odd rows, we offset by 1 to create the alternating pattern
      const isBlack = (index + rowOffset) % 2 === 0;
      const squareClass = isBlack ? 'chessSquare-black' : 'chessSquare-white';
      
      return (
        <div 
          key={index} 
          className={`chessSquare ${squareClass}`}
        />
      );
    });
  };

  return (
    <div className='homeChessboard'>
      <div className="homeChessboardContainer">
        {/* First row */}
        <div className="chessboardRow">
          {renderSquares(0)}
        </div>
        
        {/* Second row */}
        <div className="chessboardRow">
          {renderSquares(1)}
        </div>
      </div>
    </div>
  );
};

export default HomeChessboard;