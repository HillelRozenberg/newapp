import React from "react";
import { useEffect, useState } from "react";
import { json, Navigate, useNavigate } from "react-router-dom";

let myUser = undefined;
if (localStorage.getItem("user")) {
  myUser = JSON.parse(localStorage.getItem("user"));
  console.log(myUser.id);
}

function Todos() {
  const [use, setUse] = useState([]);

  useEffect(() => {
    if (myUser) {
      fetch(`https://jsonplaceholder.typicode.com/users/${myUser.id}/todos`)
        .then((response) => response.json())
        .then((use) => setUse(use));
    }
  }, []);

  const hendleChange = (e) => {
    const key = e.target.value;
    console.log("key", key);
    switch (key) {
      case "abc":
        setUse([...use].sort((a, b) => (a.title > b.title ? 1 : -1)));
        console.log(use);
        break;
      case "completed":
        let use1 = JSON.parse(
          JSON.stringify(
            use.sort((a, b) => (a.completed > b.completed ? 1 : -1))
          )
        );
        setUse(use1);
        console.log(use1);

        break;
      default:
        setUse([...use].sort((a, b) => (a.id > b.id ? 1 : -1)));
        break;
    }
  };

  return (
    <>
      <select name="choice" defaultValue="value" onChange={hendleChange}>
        <option value="abc">A - B</option>
        <option value="completed">completed</option>
        <option value="random">random</option>
      </select>

      <div>
        {use.map((e, i) => (
          <div key={i}>
            <input type="checkbox" checked={e.completed} />
            {e.title}
          </div>
        ))}
      </div>
    </>
  );
}

export default Todos;
