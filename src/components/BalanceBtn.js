import { useNavigate } from "react-router-dom";

const BalanceBtn = () => {
  const movePage = useNavigate();
  const toBalanceGame = () => movePage("/category/balancegame");

  return (
    <button onClick={toBalanceGame} className="balanceGame">
      <span className="title">
        <span className="icon">🆚</span>밸런스게임
      </span>
      <br />
      <span className="explanation">양보할 수 없는 싸움</span>
      <img src="/img/bookmark-fav-dynamic-gradient.png" alt="BalanceGame" />
    </button>
  );
};

export default BalanceBtn;
