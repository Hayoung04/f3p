import { useNavigate } from "react-router-dom";
import styles from "./ConverHome.module.css";

const FriendBtn = () => {
  const movePage = useNavigate();
  const toFriend = () => movePage("/category/friend");

  return (
    <button onClick={toFriend} className={styles.friend}>
      <span className="title">
        <span className="icon">😎</span>친구
      </span>
      <br />
      <span className="explanation">밤새 이어지는 대화</span>
      <img
        src="img/thumb-up-dynamic-color.png"
        alt="Friend"
        className={styles.allBtnImg}
      />
    </button>
  );
};

export default FriendBtn;
