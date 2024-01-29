import { useNavigate } from "react-router-dom";

const BalanceBtn = () => {
  const movePage = useNavigate();
  const toBalanceGame = () => movePage("/category/balancegame");

  return (
    <button onClick={toBalanceGame} className="balanceGame">
      밸런스게임
    </button>
  );
};

export default BalanceBtn;
