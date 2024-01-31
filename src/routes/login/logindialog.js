import ToLogin from "./toLogin";
import ToLogout from "./toLogout";

function logindialog() {
  if (localStorage.getItem("memberID")) return <ToLogout />;
  else return <ToLogin />;
}

export default logindialog;
