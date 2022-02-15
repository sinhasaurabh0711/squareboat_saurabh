import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Dashboard() {
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("name");
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [show, setShow] = useState(false);
  const [currentId, setCurrentId] = useState("");
  const Url =
    "https://jobs-api.squareboat.info/api/v1/recruiters/jobs?page=" + page;
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    fetch(Url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        if (res.code == 200 && res.data.data) {
          setJobs(res.data.data);
          setCount(res.data.metadata.count);
          setLimit(res.data.metadata.limit);
          setPageCount(Math.ceil(count / limit));
        }
      });
  }, [page, Url, navigate, token, count, limit, pageCount]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleId = (id) => {
    setShow(true);
    setCurrentId(id);
    console.log(currentId);
  };

  // useEffect(() => {
  //   const url =
  //     "https://jobs-api.squareboat.info/api/v1/recruiters/jobs/" +
  //     currentId +
  //     "/candidates";
  //   if(show){
  //     fetch(url, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: token
  //       }
  //     })
  //       .then((response) => response.json())
  //       .then((res) => {
  //         console.log(res);
  //       });
  //   }
  // }, [show,currentId,token]);

  // const opencandidateList = (id) => {
  //   console.log("canditates");
  //   const url =
  //     "https://jobs-api.squareboat.info/api/v1/recruiters/jobs/" +
  //     id +
  //     "/candidates";
  //   fetch(url, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: token
  //     }
  //   })
  //     .then((response) => response.json())
  //     .then((res) => {
  //       console.log(res);
  //     });
  // };
  //   useEffect(() => {
  //     async function fetchData() {
  //         const res = await fetch("https://jobs-api.squareboat.info/api/v1/recruiters/jobs/" +
  //         currentId +
  //         "/candidates");

  //     }
  //     // fetchData();
  //     if (show){
  //         fetchData();
  //     }
  // }, [ show]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div
      style={{
        backgroundColor: "#EDF6FF",
        display: "flex"
      }}
    >
      <div className="Top1">
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
        <button className="Logout" onClick={handleLogout}>
          {userName[0]}
        </button>
      </div>
      {/* {jobs.length && jobs.map(item=>{
        return(
          <div>{item.description}</div>
        )
      })} */}
      {jobs.length && (
        <div className="Card_container">
          {jobs.map((item) => {
            return (
              <div className="Card">
                <div>
                  <div
                    style={{
                      color: "#303F60",
                      fontSize: "19px",
                      fontFamily: "Helvetica Neue",
                      marginBottom: "10px"
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      color: "#303F60",
                      fontSize: "14px",
                      fontFamily: "Helvetica Neue",
                      opacity: "80%"
                    }}
                  >
                    {item.description}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "baseline"
                  }}
                >
                  <div
                    style={{
                      color: "#303F60",
                      fontSize: "14px",
                      fontFamily: "Helvetica Neue",
                      opacity: "80%"
                    }}
                  >
                    {item.location}
                  </div>
                  <button className="Button">Apply</button>
                </div>
              </div>
            );
          })}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
              marginBottom: "10px"
            }}
          >
            <Stack spacing={2}>
              <Pagination
                count={pageCount}
                page={page}
                onChange={handleChange}
                variant="outlined"
                shape="rounded"
              />
            </Stack>
          </div>
        </div>
      )}
    </div>
  );
}
