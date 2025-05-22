import React, { useEffect, useState } from 'react';
import './homeChessboard.css';

const HomeChessboard = () => {
  const [squares, setSquares] = useState(0);
  const [squareSize, setSquareSize] = useState(15);

  useEffect(() => {
    const calculateSquares = () => {
      const windowWidth = window.innerWidth;
      let size = 15;
      
      if (windowWidth <= 480) {
        size = 8;
      } else if (windowWidth <= 768) {
        size = 10;
      }
      
      setSquareSize(size);
      const squaresNeeded = Math.ceil(windowWidth / size);
      setSquares(squaresNeeded);
    };

    calculateSquares();

    window.addEventListener('resize', calculateSquares);
    
    return () => window.removeEventListener('resize', calculateSquares);
  }, []);

  const renderSquares = (rowOffset) => {
    return Array(squares).fill(null).map((_, index) => {
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