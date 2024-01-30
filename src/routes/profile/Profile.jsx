import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Profile.module.css";

function Profile() {
  const navigate = useNavigate();

  const handleContainerClick = () => {
    // 클릭 시 Add 페이지로 이동
    navigate("/addprofile");
  };

  return (
    <div>
      <div className={styles.header}>
        <h1>Profile page</h1>
      </div>
      <img className={styles.user} src="image/image02.png" alt="user"></img>
      <h2 className={styles.text}>각 주제에 맞는 사진과 설명을 입력해주세요</h2>
      <div className={styles.container} onClick={handleContainerClick}>
        {[...Array(3)].map((_, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {[...Array(3)].map((_, colIndex) => (
              <div key={colIndex} className={styles.rect}>
                {getContent(rowIndex, colIndex)}
              </div>
            ))}
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
