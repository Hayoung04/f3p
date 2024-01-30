import { useNavigate } from "react-router-dom";

const SeriousConverBtn = () => {
  const movePage = useNavigate();
  const toSeriousConver = () => movePage("/category/relationship");

  return (
    <button onClick={toSeriousConver} className="seriousConver">
      <span className="title">
        <span className="icon">💬</span>진지한대화
      </span>
      <br />
      <span className="explanation">우리 진지해져 볼까..?</span>
      <img src="img/tea-cup-dynamic-premium.png" alt="Friend" />
    </button>
  );
};

export default SeriousConverBtn;
