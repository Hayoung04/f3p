import { useState } from "react";
import styles from "../converModule/DetailCate.module.css";

let variable = 0;

function Balance() {
  const [topic1, setTopic1] = useState(Topic[variable]["0"]);
  const [topic2, setTopic2] = useState(Topic[variable]["1"]);

  const beforeBtn = () => {
    if (variable > 0) variable = variable - 1;
    setTopic1(Topic[variable]["0"]);
    setTopic2(Topic[variable]["1"]);
    console.log(variable);
  };
  const nextBtn = () => {
    if (variable < Topic.length - 1) variable = variable + 1;
    setTopic1(Topic[variable]["0"]);
    setTopic2(Topic[variable]["1"]);
    console.log(variable);
  };
  return (
    <>
      <div>
        <div className={styles.header}>
          <h1>F3PHER</h1>
        </div>

        <button className={styles.beforeBtn} onClick={beforeBtn}>
          {"<"}
        </button>

        <div className={styles.topic}>
          {topic1} <br />
          VS <br /> {topic2} <br /> <span className={styles.txtCnt}>VS</span>
        </div>

        <button className={styles.nextBtn} onClick={nextBtn}>
          {">"}
        </button>

        <div className={styles.home}>
          <p>
            <a href="/">⌂</a>
          </p>
        </div>
      </div>
    </>
  );
}

const Topic = [
  ["배터리 5% 데이터 가능", "배터리 100% 데이터, 와이파이 불가"],
  ["둘리랑 3달 살기", "조커랑 1주일 살기"],
  ["회사 면접 때 옆 사람이 넘사벽 면접 천재", "회사 면접 때 옆 사람이 전 애인"],
  ["사막에서 길 잃기", "북극에서 길 잃기"],
  ["자도 자도 피곤", "먹어도 먹어도 배고픔"],
];

export default Balance;
