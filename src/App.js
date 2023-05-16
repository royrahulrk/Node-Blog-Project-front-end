import React from "react";
import { Route, Routes } from "react-router-dom";
import Bollywood from "./Components/Bollywood";
import "./App.css"
import Fitness from "./Components/Fitness";
import Food from "./Components/Food";
import Hollywood from "./Components/Hollywood"
import Technology from "./Components/Technology"
import Home from "./Components/Home"
import PageNotFound from "./Components/PageNotFound";
// fullview
import BollywoodFullView from "./Components/Bollywood/Bollywood";
import TechnologyFullView from "./Components/Technology/Technology";
import HollywoodFullView from "./Components/Hollywood/Hollywood";
import FitnessFullView from "./Components/Fitness/Fitness";
import FoodFullView from "./Components/Food/Food";

const App = () => {
  return (
    <>
    

      <Routes>
        
        <Route path="/" element={<Home />}></Route>
        <Route  path="/bollywood" element={<Bollywood />}></Route>
        <Route  path="/bollywood/full" element={<BollywoodFullView/>}></Route>
        <Route  path="/technology" element={<Technology />}></Route>
        <Route  path="/technology/full" element={<TechnologyFullView/>}></Route>
        <Route  path="/hollywood" element={<Hollywood />}></Route>
        <Route  path="/hollywood/full" element={<HollywoodFullView/>}></Route>
        <Route  path="/fitness" element={<Fitness />}></Route>
        <Route  path="/fitness/full" element={<FitnessFullView />}></Route>
        <Route  path="/food" element={<Food />}></Route>
        <Route  path="/food/full" element={<FoodFullView />}></Route>
        <Route  path="*" element={<PageNotFound/>}></Route>
      
      </Routes>
   
    </>
  );
};

export default App;
