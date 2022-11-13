import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
function Logout() {
  // const nav=useNavigate()
 
  return (
    <div>
      {" "}
      <Navigate to="/login" replace={true} />
      {/* {nav('/login') */}
    </div>
  );
}

export default Logout;
