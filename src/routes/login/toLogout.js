import * as React from "react";
import Button from "@mui/material/Button";

function toLogout() {
  const ToLogout = () => {
    localStorage.removeItem("memberID");
  };
  return (
    <div>
      <button onClick={ToLogout}>Logout</button>
      <React.Fragment>
        <Button variant="outlined" onClick={ToLogout}>
          Logout
        </Button>
      </React.Fragment>
    </div>
  );
}

export default toLogout;
