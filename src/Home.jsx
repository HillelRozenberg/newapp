import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
function Home() {
  const nav = useNavigate();

  let name = undefined;
  let myUser = undefined;
  if (localStorage.getItem("user")) {
    myUser = JSON.parse(localStorage.getItem("user"));
    console.log(myUser.id);
    name = myUser.name;
  }

  const links = ["albums", "posts", "todos", "info"];
  const styling = {
    border: "solid 5px",
    backgroundColor: "red",
  };
  function logoutHandler() {
    localStorage.clear();
    console.log("out");
  }
  return (
    <> 
      <Link style={styling} onClick={logoutHandler} to="/login">
        Logout
      </Link>
      {links.map((e, i) => (
        <Link style={styling} key={i} to={e}>
          {e}
        </Link>
      ))}
      <h1>{name}</h1>
      <Outlet />
    </>
  );
}

export default Home;
