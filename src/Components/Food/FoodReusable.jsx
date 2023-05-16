import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Food.css";
import axios from "axios";
const FoodReusable = () => {

  
  const [data,setData] =useState([])
 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://nodeblogproject.onrender.com/food');
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
          Latest Fitness Stories
        </h2>
        <hr style={{ width: "5%", height: "2px", backgroundColor: "red" }} />
        <div className="bollywoodContainer">
          <div className="parent">
            {data
              .filter((value) => value.category === "food")
              .map((data, i) => (
                <Link
                  className="link"
                  to={`/Food/full`}
                  state={{ data }}
                  key={i}
                >
                  <div className="fchild" >
                    <div className="finner">
                      <center>
                        <div className="img">
                          <img className="fimg" src={data.img} alt="404"></img>
                        </div>
                      </center>
                      <div className="ftext">
                        <h4 className="ftitle">{data.title}</h4>
                        <p className="fdescription">{data.description}</p>
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

export default FoodReusable;
