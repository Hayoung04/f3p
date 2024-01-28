import React from "react";
import styles from "./Profile.module.css";

function Profile() {
  return (
    <div>
      <div className={styles.header}>
        <h1>Profile page</h1>
      </div>
      <img className={styles.user} src="img/person.png" alt="user"></img>
      <div className={styles.container}>
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
