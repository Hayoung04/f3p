import { useNavigate } from "react-router-dom";

const RomanticBtn = () => {
  const movePage = useNavigate();
  const toRomantic = () => movePage("/category/romantic");

  return (
    <button onClick={toRomantic} className="romantic">
      <span className="title">
        <span className="icon">❤️</span>커플
      </span>
      <br />
      <span className="explanation">사랑을 묻고 답하다</span>
      <img src="/img/heart-dynamic-clay.png" alt="Heart" />
    </button>
  );
};

export default RomanticBtn;
