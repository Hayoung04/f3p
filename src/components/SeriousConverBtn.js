import { useNavigate } from "react-router-dom";

const SeriousConverBtn = () => {
  const movePage = useNavigate();
  const toSeriousConver = () => movePage("/category/relationship");

  return (
    <button onClick={toSeriousConver} className="seriousConver">
      진지한대화
    </button>
  );
};

export default SeriousConverBtn;
