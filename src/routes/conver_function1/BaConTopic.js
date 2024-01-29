//converRmd = conversation recommend
//BaConTopic = Basic Conversation Topic

import { useNavigate } from "react-router-dom";
import "./style.css";

function BaConTopic() {
  const movePage = useNavigate();

  const toRomantic = () => movePage("/basic/romantic");
  const toRelationship = () => movePage("/basic/relationship");
  const toIcebreaking = () => movePage("/basic/icebreaking");

  return (
    <div id="basic">
      <h1>지금 내게 필요한 대화주제 추천 서비스, F3P!</h1>
      <h2>
        나의 상황에 맞는 <br />
        카테고리를 골라보세요
      </h2>
      <div id="category">
        <div className="grid1">
          <button onClick={toRomantic} className="romantic">
            {/* <span className="title">
            <span className="icon">❤️</span>커플
          </span>
          <br />
          <span className="explanation">사랑을 묻고 답하다</span>
          <img src="/img/heart-dynamic-clay.png" alt="Heart" /> */}
            커플
          </button>

          <div className="grid2">
            <div className="grid3">
              <div className="grid4">
                <button onClick={toRelationship} className="relationship">
                  {/* <span className="title">
            <span className="icon">😎</span>친구
          </span>
          <br />
          <span className="explanation">밤새 끊이지 않는 대화</span>
          <img src="img/thumb-up-dynamic-color.png" alt="Friend" /> */}
                  친구
                </button>

                <button onClick={toIcebreaking} className="icebreaking">
                  {/* <span className="title">
            <span className="icon">🧊</span>아이스브레이킹
          </span>
          <br />
          <span className="explanation">얼어붙은 분위기를 깨다</span>
          <img src="img/chat-dynamic-gradient.png" alt="Friend" /> */}
                  아이스브레이킹
                </button>
              </div>

              <button>과몰입 부르는 If</button>
            </div>
          </div>
        </div>

        <button>점점 깊어지는 진지한 대화</button>

        <button>양보할 수 없는 밸런스 게임</button>
      </div>
    </div>
  );
}

export default BaConTopic;
