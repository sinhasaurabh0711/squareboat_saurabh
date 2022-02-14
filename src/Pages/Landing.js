import React from "react";
import "./Landing.css";
import { useNavigate } from "react-router-dom";
import solaytic from "./Images/solaytic.png";
import ztos from "./Images/ztos.png";
import goldline from "./Images/goldline.png";
import ideaa from "./Images/ideaa.png";
import kanba from "./Images/kanba.png";
import lighting from "./Images/lighting.png";
import liva from "./Images/liva.png";
import velocity from "./Images/velocity-9.png";
import screenshot from "./Images/Screenshot.png";

export default function Landing() {
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div>
      <div className="Top">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <div
            style={{
              fontSize: "22px",
              fontFamily: "Helvetica Neue",
              fontWeight: "bold"
            }}
          >
            <span style={{ color: "white" }}>My</span>
            <span style={{ color: "#43AFFF" }}>Jobs</span>
          </div>
          <button className="Login" onClick={handleLogin}>
            Login/Signup
          </button>
        </div>
        <div
          style={{
            fontSize: "60px",
            color: "white",
            fontFamily: "Helvetica Neue",
            marginTop: "3%",
            paddingLeft: "9%"
          }}
        >
          Welcome to
        </div>
        <div
          style={{
            fontSize: "60px",
            color: "white",
            fontFamily: "Helvetica Neue",
            marginTop: "5px",
            paddingLeft: "9%"
          }}
        >
          <span style={{ color: "white" }}>My</span>
          <span style={{ color: "#43AFFF" }}>Jobs</span>
        </div>
        <div style={{ paddingLeft: "9%", paddingTop: "20px" }}>
          <button className="Started">Get Started</button>
        </div>
      </div>

      <img src={screenshot} alt="" className="DisplayPic"></img>
      {/* <div style={{ marginLeft: "190px", marginTop: "80px" }}>
          <div
            style={{
              fontSize: "60px",
              fontFamily: "Helvetica Neue",
              color: "white"
            }}
          >
            Welcome to
          </div>
         
      </div> */}

      <div className="Bottom">
        <div
          style={{
            fontSize: "22px",
            fontFamily: "Helvetica Neue",
            color: "#303F60",
            fontWeight: "550"
          }}
        >
          Why Us
        </div>
        <div className="Details">
          <div className="Features">
            <div
              style={{
                color: "#43AFFF",
                fontSize: "22px",
                fontFamily: "Helvetica Neue"
              }}
            >
              Get More
            </div>
            <div
              style={{
                color: "#43AFFF",
                fontSize: "22px",
                fontFamily: "Helvetica Neue"
              }}
            >
              Visibility
            </div>
            <div
              style={{
                color: "#303F60",
                fontSize: "14px",
                fontFamily: "Helvetica Neue",
                marginTop: "20px"
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </div>
          </div>
          <div className="Features">
            <div
              style={{
                color: "#43AFFF",
                fontSize: "22px",
                fontFamily: "Helvetica Neue"
              }}
            >
              Organize Your
            </div>
            <div
              style={{
                color: "#43AFFF",
                fontSize: "22px",
                fontFamily: "Helvetica Neue"
              }}
            >
              Canditates
            </div>
            <div
              style={{
                color: "#303F60",
                fontSize: "14px",
                fontFamily: "Helvetica Neue",
                marginTop: "20px",
                textAlign: "left"
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div className="Features">
            <div
              style={{
                color: "#43AFFF",
                fontSize: "22px",
                fontFamily: "Helvetica Neue"
              }}
            >
              Verify Their
            </div>
            <div
              style={{
                color: "#43AFFF",
                fontSize: "22px",
                fontFamily: "Helvetica Neue"
              }}
            >
              Abilities
            </div>
            <div
              style={{
                color: "#303F60",
                fontSize: "14px",
                fontFamily: "Helvetica Neue",
                marginTop: "20px"
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: "30px",
            fontSize: "22px",
            fontFamily: "Helvetica Neue",
            color: "#303F60"
          }}
        >
          Companies Who Trust Us
        </div>
        <div style={{ marginTop: "30px", paddingBottom: "60px" }}>
          <div className="Image_container" style={{ paddingRight: "50px" }}>
            <img src={solaytic} alt=""></img>
            <img src={kanba} alt=""></img>
            <img src={lighting} alt=""></img>
            <img src={ztos} alt=""></img>
            <img src={kanba} alt=""></img>
          </div>
          <div
            className="Image_container"
            style={{ paddingRight: "100px", paddingLeft: "50px" }}
          >
            <img src={goldline} alt=""></img>
            <img src={ideaa} alt=""></img>
            <img src={liva} alt=""></img>
            <img src={velocity} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}
