import React from 'react';
import "./homeDrinks.css";
import Drink from '../Drink/Drink';
import assets from '../../assets/assets';

const HomeDrinks = () => {
  return (
    <div className='homeDrinks'>
        <div className="homeDrinksContainer">
            <Drink name={"Lavande"} size={"25"} image={assets.DrinkOne} description={"A delicate and floral aperitif with notes of lavender and chamomile."} />
            {/* <Drink name={"Lavande"} size={"25"} image={assets.DrinkOne} description={"A delicate and floral aperitif with notes of lavender and chamomile."} /> */}
            {/* <Drink name={"Lavande"} size={"25"} image={assets.DrinkOne} description={"A delicate and floral aperitif with notes of lavender and chamomile."} /> */}
        </div>
    </div>
  )
}

export default HomeDrinks