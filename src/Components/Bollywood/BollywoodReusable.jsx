import React, { useEffect, useState } from "react";
import "./Bollywood.css";
import { Link } from "react-router-dom";
import axios from "axios";


const BollywoodReusable = () => {

  const [data,setData] =useState([])
 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://nodeblogproject.onrender.com/bollywood');
      console.log(response.data.details);
      setData(response.data.details)
      // Process the response data as needed
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div>
        <h2 style={{ textAlign: "center", marginTop: "20px" }}>
          Latest Bollywood Stories
        </h2>
        <hr style={{ width: "5%", height: "2px", backgroundColor: "red" }} />

        <div className="bollywoodContainer">
          <div className="parent">
            {data && data
              .filter((value) => value.category === "bollywood")
              .map((data, i) => (
                <Link className="link" to={`/Bollywood/full`} state={{ data }} key={i}>
                  <div className="child" >
                    <div className="inner" >
                      <center >
                        <div className="img" >
                          <img className="bimg" src={data.img} alt="404"></img>
                        </div>
                      </center>
                      <div className="text">
                        <h4 className="title">{data.title}</h4>
                        <p className="description">{data.para}</p>
                        <p className="date">{data.year}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BollywoodReusable;
