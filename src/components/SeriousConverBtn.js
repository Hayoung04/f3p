import { useNavigate } from "react-router-dom";
import styles from "./ConverHome.module.css";

const SeriousConverBtn = () => {
  const movePage = useNavigate();
  const toSeriousConver = () => movePage("/category/relationship");

  return (
    <button onClick={toSeriousConver} className={styles.seriousConver}>
      <span className={styles.title}>
        <span className={styles.icon}>💬</span>진지한대화
      </span>
      <br />
      <span className={styles.explanation}>우리 진지해져 볼까..?</span>
      <img
        src="img/tea-cup-dynamic-premium.png"
        alt="Friend"
        className={styles.allBtnImg}
      />
    </button>
  );
};

export default SeriousConverBtn;
