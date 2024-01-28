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
      <h1>지금 내게 필요한 대화주제 추천 서비스, F3P!</h1>
      <h2>
        나의 상황에 맞는 <br />
        카테고리를 골라보세요
      </h2>
      <div id="category">
        <button onClick={toRomantic} className="romantic">
          <span className="title">
            <span className="icon">❤️</span>커플
          </span>
          <br />
          <span className="explanation">사랑을 묻고 답하다</span>
          <img src="/img/heart-dynamic-clay.png" alt="Heart" />
        </button>
        <button onClick={toRelationship} className="relationship">
          <span className="title">
            <span className="icon">😎</span>친구
          </span>
          <br />
          <span className="explanation">밤새 끊이지 않는 대화</span>
          <img src="img/thumb-up-dynamic-color.png" alt="Friend" />
        </button>
        <button onClick={toIcebreaking} className="icebreaking">
          <span className="title">
            <span className="icon">🧊</span>아이스브레이킹
          </span>
          <br />
          <span className="explanation">얼어붙은 분위기를 깨다</span>
          <img src="img/chat-dynamic-gradient.png" alt="Friend" />
        </button>
      </div>
    </div>
  );
}

export default BaConTopic;
