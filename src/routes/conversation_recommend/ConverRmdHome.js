//converRmdHome = conversation recommend

import RomanticBtn from "../../components/RomanticBtn";
import IcebreakingBtn from "../../components/IcebreakingBtn";
import FriendBtn from "../../components/FriendBtn";
import SeriousConverBtn from "../../components/SeriousConverBtn";
import BalanceBtn from "../../components/BalanceBtn";
import IfBtn from "../../components/IfBtn";

import styles from "../converModule/Conver.module.css";

function ConverRmdHome() {
  return (
    <div className={styles.basic}>
      <h1>F3PHER</h1>
      <h2>
        나의 상황에 맞는 <br />
        카테고리를 골라보세요
      </h2>
      <div className={styles.txtCnt}>
        <span>#연애</span>
        <span>#소개팅</span>
        <span>#친구</span>
        <span>#밤샘 토크</span>
        <br />
        <span>#대화가 필요하다면?</span>
        <span>#삭막한 분위기가 힘들다면?</span>
        <span>#F3PHER과 함께</span>
      </div>
      <div className={styles.category}>
        <div className={styles.section1}>
          <BalanceBtn />
          <div className={styles.section1_b}>
            <div className={styles.section1_b_1}>
              <IfBtn />
              <SeriousConverBtn />
            </div>
            <RomanticBtn />
          </div>
        </div>
        <div className={styles.section2}>
          <FriendBtn />
          <IcebreakingBtn />
        </div>
      </div>
    </div>
  );
}

export default ConverRmdHome;
