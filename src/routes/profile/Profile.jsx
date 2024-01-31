import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Profile.module.css";
// import navArrow from "getContent";
// import navArrowBlue from "../addprofile/styles.upload.img";

function Profile() {
  const navigate = useNavigate();
  const memberId = "1234"; // 이후 선규님한테 받아오기!

  const [data, setData] = useState();
  console.log(data);

  // async await 검색!!!!!!
  useEffect(() => {
    fetch("https://ll-api.jungsub.com/talk/mypage/list/" + memberId)
      .then((data) => data.json())
      .then((json) => setData(json.photos));
  }, []);

  const handleContainerClick = (num) => {
    // 클릭 시 Add 페이지로 이동
    navigate("/addprofile/" + num);
  };

  if (!data) return <>loading...</>;

  return (
    <div>
      <div className={styles.header}>
        <h1>Profile page</h1>
      </div>
      <img className={styles.user} src="image/image02.png" alt="user"></img>
      <h2 className={styles.text}>각 주제에 맞는 사진과 설명을 입력해주세요</h2>
      <div className={styles.container}>
        {[...Array(3)].map((_, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {[...Array(3)].map((_, colIndex) => {
              const image = data.find(function (elem) {
                if (elem._id === (rowIndex * 3 + colIndex + 1).toString())
                  return true;
              })?.latest.img_path;
              console.log(image);
              return (
                <div
                  key={colIndex}
                  className={styles.rect}
                  onClick={() => {
                    handleContainerClick(rowIndex * 3 + colIndex + 1);
                  }}
                  style={{
                    "--hover-image": !!image
                      ? `url("https://ll-api.jungsub.com${image}")`
                      : "#000981",
                  }}
                >
                  {getContent(rowIndex, colIndex)}{" "}
                  {/* 물음표가 있으면 전 값이 참일때만 . 뒤에오는 메소드를 실행 */}
                  {}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

const getContent = (row, col) => {
  const contents = [
    "가보고 싶은\n나라",
    "가장 좋아하는\n음식",
    "지금의 나를\n표현하는 사진",
    "기억에 남는\n여행지",
    "제일 못 찍은\n사진",
    "어렸을 적\n사진",
    "가장 좋아하는\n장소",
    "정말 잘 찍었다\n생각하는 사진",
    "나의 롤모델",
  ];

  // 각 .rect에 순차적으로 다른 내용을 할당
  return contents[row * 3 + col];
};

export default Profile;
