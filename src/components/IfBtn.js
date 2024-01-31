import { useNavigate } from "react-router-dom";
import styles from "./ConverHome.module.css";

const IfBtn = () => {
  const movePage = useNavigate();
  const toIf = () => movePage("/category/if");

  return (
    <button onClick={toIf} className={styles.if}>
      <span className={styles.title}>
        <span className={styles.icon}>❔</span>If
      </span>
      <br />
      <span className={styles.explanation}>끝없는 상상력, 과몰입</span>
      <img
        src="img/target-dynamic-color.png"
        alt="Friend"
        className={styles.allBtnImg}
      />
    </button>
  );
};

export default IfBtn;
