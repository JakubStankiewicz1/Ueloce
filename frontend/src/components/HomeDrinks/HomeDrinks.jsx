import React from 'react';
import "./homeDrinks.css";
import Drink from '../Drink/Drink';
import assets from '../../assets/assets';

const HomeDrinks = () => {
  return (
    <div className='homeDrinks'>
        <div className="homeDrinksContainer">
            <Drink name={"Lavande"} size={"25"} image={assets.DrinkOne} description={"A delicate and floral aperitif with notes of lavender and chamomile."} />
            <Drink name={"Primavera"} size={"15"} image={assets.DrinkTwo} description={"A refreshing and vibrant aperitif with bright citrus notes."} />
            <Drink name={"Spezia"} size={"10"} image={assets.DrinkThree} description={"A bold, spiced aperitif featuring cardamom, ginger, and cinnamon."} />
        </div>
    </div>
  )
}

export default HomeDrinks