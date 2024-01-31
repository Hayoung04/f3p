import { useState } from "react";

export default function IsLogined() {
  // eslint-disable-next-line no-unused-vars
  const [render, setRender] = useState(false);

  const isLogin = () => {
    if (!localStorage.getItem("memberID")) alert("Please login");
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
