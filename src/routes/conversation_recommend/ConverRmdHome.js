//converRmdHome = conversation recommend

import RomanticBtn from "../../components/RomanticBtn";
import IcebreakingBtn from "../../components/IcebreakingBtn";
import FriendBtn from "../../components/FriendBtn";
import SeriousConverBtn from "../../components/SeriousConverBtn";

function ConverRmdHome() {
  return (
    <div id="basic">
      <h1>지금 내게 필요한 대화주제 추천 서비스, F3P!</h1>
      <h2>
        나의 상황에 맞는 <br />
        카테고리를 골라보세요
      </h2>
      <div id="category">
        <RomanticBtn />
        <IcebreakingBtn />
        <FriendBtn />
        <SeriousConverBtn />
        <button>양보할 수 없는 밸런스 게임</button>
      </div>
    </div>
  );
}

export default ConverRmdHome;
