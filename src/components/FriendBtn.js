import { useNavigate } from "react-router-dom";
import styles from "./ConverHome.module.css";

const FriendBtn = () => {
  const movePage = useNavigate();
  const toFriend = () => movePage("/friend");

  return (
    <button onClick={toFriend} className={styles.friend}>
      <span className={styles.title}>
        <span className={styles.icon}>😎</span>친구
      </span>
      <br />
      <span className={styles.Friendexplanation}>밤새 이어지는 대화</span>
      <img
        src="img/thumb-up-dynamic-color.png"
        alt="Friend"
        className={styles.FriendallBtnImg}
      />
    </button>
  );
};

export default FriendBtn;
