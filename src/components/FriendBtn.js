import { useNavigate } from "react-router-dom";

const FriendBtn = () => {
  const movePage = useNavigate();
  const toFriend = () => movePage("/category/friend");

  return (
    <button onClick={toFriend} className="friend">
      {/* <span className="title">
            <span className="icon">😎</span>친구
          </span>
          <br />
          <span className="explanation">밤새 끊이지 않는 대화</span>
          <img src="img/thumb-up-dynamic-color.png" alt="Friend" /> */}
      친구
    </button>
  );
};

export default FriendBtn;
