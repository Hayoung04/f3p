import { useNavigate } from "react-router-dom";

const IfBtn = () => {
  const movePage = useNavigate();
  const toIf = () => movePage("/category/if");

  return (
    <button onClick={toIf} className="if">
      과몰입 부르는 if
    </button>
  );
};

export default IfBtn;
