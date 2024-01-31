import { useState } from "react";

export default function IsLogined() {
  const [address, setAddress] = useState("#");

  const isLogin = () => {
    const memberID = localStorage.getItem("memberID");
    if (memberID !== null) setAddress("/profile");
    console.log(address);
    console.log(memberID);
  };
  return (
    <>
      <a href={`${address}`} className="profile-link" onClick={isLogin}>
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
