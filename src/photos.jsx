import React from "react";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

let myUser = undefined;
if (localStorage.getItem("user")) {
  myUser = JSON.parse(localStorage.getItem("user"));
  console.log(myUser.id);
}
const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${myUser.id}/photos`)
      .then((response) => response.json())
      .then((photos) => setPhotos(photos));
  }, []);

  return (
    <div>
      <h1>photos:</h1>
      {photos.map((item, idx) => (
        <div key={idx} style={{ border: "solid 1px", display: "inline-block" }}>
          <img src={item.thumbnailUrl} />
        </div>
      ))}
    </div>
  );
};

export default Photos;
