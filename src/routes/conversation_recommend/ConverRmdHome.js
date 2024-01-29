//converRmdHome = conversation recommend

import RomanticBtn from "../../components/RomanticBtn";
import IcebreakingBtn from "../../components/IcebreakingBtn";
import FriendBtn from "../../components/FriendBtn";
import SeriousConverBtn from "../../components/SeriousConverBtn";
import BalanceBtn from "../../components/BalanceBtn";
import IfBtn from "../../components/IfBtn";

import "./style.css";

function ConverRmdHome() {
  return (
    <div id="basic">
      <h1>지금 내게 필요한 대화주제 추천 서비스, F3P!</h1>
      <h2>
        나의 상황에 맞는 <br />
        카테고리를 골라보세요
      </h2>
      <div id="category">
        <div id="section1">
          <BalanceBtn />
          <div id="section1_b">
            <div id="section1_b_1">
              <IfBtn />
              <SeriousConverBtn />
            </div>
            <RomanticBtn />
          </div>
        </div>
        <div id="section2">
          <FriendBtn />
          <IcebreakingBtn />
        </div>
      </div>
    </div>
  );
}

export default ConverRmdHome;
