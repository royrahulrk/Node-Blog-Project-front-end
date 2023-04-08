import React from 'react'
import Navbar from './Navbar'
import TechnologyReusable from './Technology/TechnologyReusable'
import BollywoodReusable from './Bollywood/BollywoodReusable'
import HollywoodReusable from './Hollywood/HollywoodReusable'
import FoodReusable from './Food/FoodReusable'
import FitnessReusable from './Fitness/FitnessReusable'
import Earth from "../img/earth.jpg"
import Kace from "../img/kace.jpg"
const Home = () => {
  
  return (
    <div>
        <Navbar/>
        <div className='flexrow'>
          <div>
          <img className='img1' style={{borderRadius:'10px'}} src={Earth} width='90%' height='400px' alt='404 error'></img>
          </div>
          <div className='flexcol'>
            <div>
            <img className='img2' style={{borderRadius:'10px',marginTop:'8px'}} src={Kace} width='90%' height='190px' alt='404 error'></img>
            </div>
            <div>
            <img className='img3' style={{borderRadius:'10px',marginTop:'8px'}}  src={Kace}  width='90%' height='190px' alt='404 error'></img>
            </div>
          </div>
        
      
        </div>
                 
       <TechnologyReusable/>
       <BollywoodReusable/>
       <HollywoodReusable/>
       <FoodReusable/>
       <FitnessReusable/>
      </div>
  )
}

export default Home