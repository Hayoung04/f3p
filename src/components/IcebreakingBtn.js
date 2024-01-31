import { useNavigate } from "react-router-dom";
import styles from "./ConverHome.module.css";

const IcebreakingBtn = () => {
  const movePage = useNavigate();
  const toIcebreaking = () => movePage("/category/relationship");

  return (
    <button onClick={toIcebreaking} className={styles.icebreaking}>
      <span className="title">
        <span className="icon">🧊</span>아이스브레이킹
      </span>
      <br />
      <span className="explanation">얼어붙은 분위기를 깨다</span>
      <img
        src="img/chat-dynamic-gradient.png"
        alt="Friend"
        className={styles.allBtnImg}
      />
    </button>
  );
};

export default IcebreakingBtn;
