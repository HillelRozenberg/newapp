import React from "react";
function Info() {
  let myUser = undefined;
  if (localStorage.getItem("user")) {
    myUser = JSON.parse(localStorage.getItem("user"));
    console.log(myUser.id);
  }

  return (
    <div>
      <h1>my email: {myUser?.email}</h1>
      <h1>my phone: {myUser?.phone}</h1>
    </div>
  );
}

export default Info;
