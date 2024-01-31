import { useState } from "react";
// import { Link } from "react-router-dom";

import styles from "../converModule/DetailCate.module.css";

const Topic = [
  "함께하고 싶은 취미는?",
  "선호하는 데이트 스타일은?",
  "기념일은 어떻게 챙겼으면 좋겠어?",
  "이건 테스트를 위한거임 djkdhfkjsfhksdsdfs",
];

let variable = 0;

function Romantic() {
  const [topic, setTopic] = useState(Topic[variable]);
  const beforeBtn = () => {
    if (variable > 0) variable = variable - 1;
    setTopic(Topic[variable]);
    console.log(variable);
  };
  const nextBtn = () => {
    if (variable < Topic.length - 1) variable = variable + 1;
    setTopic(Topic[variable]);
    console.log(variable);
  };
  // const reset = () => {
  //   variable = 0;
  //   setTopic(Topic[variable]);
  // };
  return (
    <>
      <div>
        <div className={styles.header}>
          <h1>F3PHER</h1>
        </div>

        <button className={styles.beforeBtn} onClick={beforeBtn}>
          {"<"}
        </button>

        <div className={styles.topic}>{topic}</div>

        <button className={styles.nextBtn} onClick={nextBtn}>
          {">"}
        </button>

        <div className={styles.home}>
          <p>
            <a href="/category">⌂</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Romantic;
