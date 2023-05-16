import React, { useEffect, useState } from "react";
import "./Hollywood.css";
import { Link } from "react-router-dom";
import axios from "axios";
const HollywoodReusable = () => {
    

  const [data,setData] =useState([])
 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://nodeblogproject.onrender.com/hollywood');
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
          Latest Hollywood Stories
        </h2>
        <hr style={{ width: "5%", height: "2px", backgroundColor: "red" }} />
        <div className="bollywoodContainer">
          <div className="hcontainer">
            <div className="holly-left">
              {data
                .filter((value) => value.category === "hollywood")
                .map((data, i) => (
                  <Link
                    className="link"
                    to={`/Hollywood/full`}
                    state={{ data }}
                    key={i}
                  >
                    <div className="child1" >
                      <div className="img-left">
                        <img className="himg" src={data.img} alt="404"></img>
                      </div>
                      <div className="htext">
                        <h4 className="title">{data.title}</h4>
                        <p className="description">{data.description}</p>
                        <p className="date">{data.date}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
            <div className="holly-right">advertisement</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HollywoodReusable;
