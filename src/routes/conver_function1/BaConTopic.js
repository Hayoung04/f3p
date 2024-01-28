//converRmd = conversation recommend
//BaConTopic = Basic Conversation Topic

import { useNavigate } from "react-router-dom";
import "./style.css";

function BaConTopic() {
  const movePage = useNavigate();

  const toRomantic = () => {
    return movePage("/basic/romantic");
  };
  const toRelationship = () => {
    return movePage("/basic/relationship");
  };
  const toIcebreaking = () => {
    return movePage("/basic/icebreaking");
  };
  return (
    <div id="basic">
      <h1>F3P</h1>
      <h2>
        나의 상황에 맞는 <br />
        카테고리를 골라보세요
      </h2>
      <div id="category">
        <button onClick={toRomantic}>연애</button>
        <button onClick={toRelationship}>인간관계</button>
        <button onClick={toIcebreaking}>아이스브레이킹</button>
      </div>
    </div>
  );
}

export default BaConTopic;
