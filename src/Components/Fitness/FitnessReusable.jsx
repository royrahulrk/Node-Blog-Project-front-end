import React, { useContext } from "react";
import "./Fitness.css";
import { Link } from "react-router-dom";
import { ContextData } from "../ContextApi/ContextApi";
const FitnessReusable = () => {
  const [data] = useContext(ContextData);

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
              .filter((value) => value.category === "fitness")
              .map((data, i) => (
                <Link className="link" to={`/Fitness/full`} state={{ data }}>
                  <div className="fchild" key={i}>
                    <div className="finner">
                      <center>
                        <div className="img">
                          <img className="fimg" src={data.img} alt="404"></img>
                        </div>
                      </center>
                      <div className="ftext">
                        <h4 className="ftitle">{data.title}</h4>
                        <p className="fdescription">{data.para}</p>
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

export default FitnessReusable;
