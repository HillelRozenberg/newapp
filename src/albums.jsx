import React from "react";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
let myUser = undefined;
if (localStorage.getItem("user")) {
  myUser = JSON.parse(localStorage.getItem("user"));
  console.log(myUser.id);
}
const Albums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    if (myUser) {
      fetch(`https://jsonplaceholder.typicode.com/users/${myUser.id}/albums`)
        .then((response) => response.json())
        .then((albums) => setAlbums(albums));
    }
  }, []);

  const abc = [...albums].sort((a, b) => (a.title > b.title ? 1 : -1));
  console.log(abc);

  return (
    <div>
      <h1>albums:</h1>
      {abc.map((item, idx) => (
        <div key={idx}>
          <h1 style={{ border: "solid 1px", backgroundColor: "pink" }}>
            title:{" "}
            <Link to="photos" type="text">
              {item.title}
            </Link>
          </h1>
        </div>
      ))}
      <Outlet />
    </div>
  );
};
export default Albums;
