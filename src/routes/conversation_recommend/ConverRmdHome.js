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
      <h1>F3PHER</h1>
      <h2>
        나의 상황에 맞는 <br />
        카테고리를 골라보세요
      </h2>
      <div className="txtCnt">
        <span>#연애</span>
        <span>#소개팅</span>
        <span>#친구</span>
        <span>#밤샘 토크</span>
        <br />
        <span>#대화가 필요하다면?</span>
        <span>#삭막한 분위기가 힘들다면?</span>
        <span>#F3PHER과 함께</span>
      </div>
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
