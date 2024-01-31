import React from "react";

import ToLogin from "./toLogin";
import ToLogout from "./toLogout";

function logindialog() {
  return (
    <>
      localStorage.getItem("memberID") ? <ToLogin /> : <ToLogout />
    </>
  );
}

export default logindialog;
