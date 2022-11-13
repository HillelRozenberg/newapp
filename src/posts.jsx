import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
let myUser = undefined;
if (localStorage.getItem("user")) {
  myUser = JSON.parse(localStorage.getItem("user"));
  console.log(myUser.id);
}
const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (myUser) {
      fetch(`https://jsonplaceholder.typicode.com/users/${myUser.id}/posts`)
        .then((response) => response.json())
        .then((posts) => setPosts(posts));
    }
  }, []);
  return (
    <div>
      <h1>posts:</h1>
      {posts.map((item, idx) => (
        <div>
          <h1 key={idx}>
            title:{" "}
            <Link to={item} key={idx} type="text">
              {item.title}
            </Link>{" "}
            <br />
            body:{" "}
            <Link to={item} key={idx} type="text">
              {item.body}
            </Link>
          </h1>
        </div>
      ))}
    </div>
  );
};
export default Posts;
