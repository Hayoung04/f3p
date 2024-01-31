import { useState } from "react";

export default function IsLogined() {
  const [render, setRender] = useState(false);

  const isLogin = () => {
    if (!localStorage.getItem("memberID")) alert("please login");
    setRender((current) => !current);
  };
  return (
    <>
      <a
        href={localStorage.getItem("memberID") ? "/profile" : "/#"}
        className="profile-link"
        onClick={isLogin}
      >
        <span className="profile-image">
          <img
            src={`${process.env.PUBLIC_URL}/image/image02.png`}
            width="60"
            height="60"
            alt="profile"
          />
        </span>
      </a>
    </>
  );
}
