import { useState } from "react";
import styles from "../converModule/DetailCate.module.css";

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
          {topic} <br />
          <span className={styles.txtCnt}>커플</span>
          <span className={styles.txtCnt}>연애</span>
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

export default Romantic;

const Topic = [
  "우리의 데이트 빈도는 어떤 것 같아?",
  "기념일은 어떻게 챙겼으면 좋겠어?",
  "각자 이성친구를 만나는 걸 어떻게 생각해?",
  "데이트 비용이 부담스럽지는 않아?",
  "결혼에 대해서 어떻게 생각해?",
];
