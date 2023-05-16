import React, { useEffect, useState } from "react";
import "./Technology.css";
import { Link } from "react-router-dom";
import axios from "axios";
const TechnologyReusable = () => {
  const [data,setData] =useState([])
 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://nodeblogproject.onrender.com/technology');
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
          Latest Technology Stories
        </h2>
        <hr style={{ width: "5%", height: "2px", backgroundColor: "red" }} />
        <div className="bollywoodContainer">
          <div className="parent">
            {data
              .filter((value) => value.category === "technology")
              .map((data, i) => (
                <Link className="link" to={`/Technology/full`} state={{ data }} key={i}>
                  <div className="tchild" >
                    <div className="inner">
                      <center>
                        <div className="img">
                          <img className="timg" src={data.img} alt="404"></img>
                        </div>
                      </center>
                      <div className="text">
                        <h4 className="title">{data.title}</h4>
                        <p className="description">{data.description}</p>
                        <p className="date">Developer: {data.developer}</p>
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

export default TechnologyReusable;
