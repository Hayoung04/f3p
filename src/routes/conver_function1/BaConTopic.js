//converRmd = conversation recommend
//BaConTopic = Basic Conversation Topic

import { Link } from "react-router-dom";

function BaConTopic() {
  return (
    <div>
      <h1>F3P</h1>
      <h3>나의 상황에 맞는 카테고리를 골라보세요</h3>
      <div id="category">
        <div>
          <Link to="/basic/romantic">연애</Link>
        </div>
        <div>
          <Link to="/basic/relationship">인간관계</Link>
        </div>
        <div>
          <Link to="/basic/icebreaking">아이스브레이킹</Link>
        </div>
      </div>
    </div>
  );
}

export default BaConTopic;
