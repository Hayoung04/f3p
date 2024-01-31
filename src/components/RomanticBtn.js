import { useNavigate } from "react-router-dom";
import styles from "./ConverHome.module.css";

const RomanticBtn = () => {
  const movePage = useNavigate();
  const toRomantic = () => movePage("/category/romantic");

  return (
    <div className={styles.buttonContainer}>
      <button
        onClick={toRomantic}
        className={`${styles.romanticBtn} ${styles.romantic}`}
      >
        <span className={styles.title}>
          <span className={styles.icon}>❤️</span>커플
        </span>
        <br />
        <span className={styles.romanticexplanation}>사랑을 묻고 답하다</span>
        <img
          src="/img/heart-dynamic-clay.png"
          alt="Heart"
          className={styles.romanticallBtnImg}
        />
      </button>
    </div>
  );
};

export default RomanticBtn;
