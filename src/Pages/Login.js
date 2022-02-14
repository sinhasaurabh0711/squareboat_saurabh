import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormsg, setErrormsg] = useState("");
  const handlePost = () => {
    setErrormsg("");
    let URL = "https://jobs-api.squareboat.info/api/v1/auth/login";
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: email, password: password })
    }).then((result) => {
      result.json().then((res) => {
        if (res.success) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("name", res.data.name);
          navigate("/dashboard");
        } else {
          setErrormsg(res.message || res.errors[0].email);
          setPassword("");
        }
      });
    });
  };
  return (
    <div style={{ backgroundColor: "#EDF6FF", display: "flex" }}>
      <div className="Top2">
        <span style={{ color: "white" }}>My</span>
        <span style={{ color: "#43AFFF" }}>Jobs</span>
      </div>
      <div className="Form_container">
        <div className="Form">
          <div
            style={{
              fontSize: "22px",
              fontFamily: "Helvetica Neue",
              marginBottom: "20px"
            }}
          >
            Login
          </div>
          <div
            style={{
              fontSize: "14px",
              fontFamily: "Helvetica Neue",
              marginBottom: "5px"
            }}
          >
            Email Address
          </div>
          <div style={{ display: "flex" }}>
            <input
              type="email"
              className="Data"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderColor: errormsg ? "#FF333380" : "grey" }}
            ></input>
          </div>
          <div
            style={{
              display: "flex",
              direction: "row",
              fontSize: "14px",
              fontFamily: "Helvetica Neue",
              marginBottom: "5px",
              justifyContent: "space-between"
            }}
          >
            <div>Password</div>
            <div style={{ color: "#43AFFF" }}>Forget your Password?</div>
          </div>
          <div style={{ display: "flex" }}>
            <input
              type="password"
              className="Data"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderColor: errormsg ? "#FF333380" : "grey" }}
            ></input>
          </div>
          {errormsg ? (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                color: "red"
              }}
            >
              {errormsg}
            </div>
          ) : null}
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              marginBottom: "25px"
            }}
          >
            <button className="Login_button" onClick={handlePost}>
              Login
            </button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <span>New to MyJobs?</span>
            <span style={{ color: "#43AFFF" }}>Create an account</span>
          </div>
        </div>
      </div>
    </div>
  );
}
