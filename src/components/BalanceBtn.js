import { useNavigate } from "react-router-dom";
import styles from "./ConverHome.module.css";

const BalanceBtn = () => {
  const movePage = useNavigate();
  const toBalanceGame = () => movePage("/category/balancegame");

  return (
    <button onClick={toBalanceGame} className={styles.balanceGame}>
      <span className={styles.title}>
        <span className={styles.icon}>🆚</span>밸런스게임
      </span>
      <br />
      <span className={styles.explanation}>양보할 수 없는 싸움</span>
      <img
        src="/img/bookmark-fav-dynamic-gradient.png"
        alt="BalanceGame"
        className={styles.allBtnImg}
      />
    </button>
  );
};

export default BalanceBtn;
