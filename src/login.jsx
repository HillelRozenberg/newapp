import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  const [inputValueUser, setInputValueUser] = useState("");
  const [inputValuePas, setInputValuePas] = useState("");
  const [users, setUsers] = useState("");

  const navigate = useNavigate();
  const user = (e) => {
    const theUser = users.find(
      (user) =>
        user.username === inputValueUser &&
        inputValuePas === user.address.geo.lat.slice(-4)
    );
    console.log(theUser);

    if (theUser) {
      localStorage.setItem("user", JSON.stringify(theUser));
      navigate(`/home`);
    } else {
      alert("not good");
      //   navigate(`/users/${theUser.id}`);
    }
  };

  return (
    <div>
      <form onSubmit={user}>
        <input
          type="text"
          value={inputValueUser}
          onChange={(e) => setInputValueUser(e.target.value)}
        />
        <input
          type="pass"
          value={inputValuePas}
          onChange={(e) => setInputValuePas(e.target.value)}
        />
        <button type="submit">log in</button>
      </form>
    </div>
  );
}

export default Login;
