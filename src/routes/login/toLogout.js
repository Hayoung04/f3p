import React from "react";

function toLogout() {
  const ToLogout = () => {
    localStorage.getItem("memberID")
      ? localStorage.removeItem("memberID")
      : alert("you cannot logout");
  };
  return (
    <div>
      <button onClick={ToLogout}>Logout</button>
    </div>
  );
}

export default toLogout;
