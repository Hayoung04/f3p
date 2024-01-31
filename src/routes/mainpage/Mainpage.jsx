import React, { useState } from "react";
import "./Mainpage.css";

import LoginDialog from "../login/logindialog";
import IsLogined from "./IsLogined";

const Mainpage = () => {
  return (
    <div className="app">
      <nav className="header">
        <div className="header__logo">
          <a href="#">FTHREEP</a>
        </div>

        <ul className="header__menu">
          {/* 프로필 링크 좌측에 위치한 로그인 창 */}
          <LoginDialog />
          <li>
            {/* 기존에 이미지와 링크를 걸어둔 코드에서 로그인되어 있으면 링크 변화를 줘서 이동하는 사이트 달라지게함, 기존 코드와 달라진점은 if문 추가외에는 없음 */}
            <IsLogined />
          </li>
        </ul>
        <a href="#" className="header__toggleBtn">
          <i className="fa-solid fa-bars"></i>
        </a>
      </nav>
      <nav className="header2">
        <ul className="header2__menu">
          <li>
            <b href="#likelion-banner">about</b>
          </li>
          <li>
            <b href="#likelion-members">what?</b>
          </li>
          <li>
            <b href="#likelionContact-footer">when?</b>
          </li>
          <li>
            <b href="#likelionContact-footer">when?</b>
          </li>
        </ul>

        <a href="#" className="header2__toggleBtn">
          <i className="fa-solid fa-bars"></i>
        </a>
      </nav>
      <div class="container">
        <div className="video-background">
          <video
            src={`${process.env.PUBLIC_URL}/videos/video.mp4`}
            muted
            autoPlay
            loop
          ></video>

          <div className="text">
            " interesting <br></br>
            <br></br> good <br></br>
            <br></br> conversation "
          </div>
        </div>
      </div>

      <nav className="circle-icons">
        <a href="/category" className="circle-icon">
          <img
            src={`${process.env.PUBLIC_URL}/image/image02.png`}
            alt="아이콘 이미지"
            width="100"
            height="100"
          />
        </a>
      </nav>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div>
          <marquee
            style={{
              backgroundColor: "white",
              width: "100%",
              height: "650px",
              fontSize: "80px",
              display: "inline-block",
            }}
            direction="left"
            loop="infinite" // 끊어지지 않고 계속 이어지도록 설정
            scrollAmount="10"
          >
            A good plan, violently executed now, is better than a perfect plan
            next week. - George S. Patton. If you would win a man to your cause,
            first convince him that you are his sincere friend. - Abraham
            Lincoln.{" "}
          </marquee>
        </div>
      </div>

      <nav className="grid1">
        <br></br> <br></br>our service<br></br> <br></br>새로운 시도를 위해
        소요되는 고객의 귀중한 시간을
        <br></br>
        <br></br>
        최대한 아끼기 위해 서로 다른 언어를 쓰는 전문 분야<br></br> <br></br>
        사이에서 최적의 해결책을 제시하고 고객의 목적지까지 <br></br> <br></br>
        가장 빠르고 확실하게 안내할 수 있는 경로를 디자인 합니다
      </nav>
      <nav className="grid2">
        <br></br> <br></br>
        <br></br> <br></br>
        <br></br> <br></br>
        <br></br> <br></br>our service<br></br> <br></br>새로운 시도를 위해
        소요되는 고객의 귀중한 시간을
        <br></br>
        <br></br>
        최대한 아끼기 위해 서로 다른 언어를 쓰는 전문 분야<br></br> <br></br>
        사이에서 최적의 해결책을 제시하고 고객의 목적지까지 <br></br> <br></br>
        가장 빠르고 확실하게 안내할 수 있는 경로를 디자인 합니다
      </nav>
      <nav className="grid3">
        <br></br> <br></br>
        <br></br> <br></br>
        <br></br> <br></br>
        <br></br> <br></br>our service<br></br> <br></br>새로운 시도를 위해
        소요되는 고객의 귀중한 시간을
        <br></br>
        <br></br>
        최대한 아끼기 위해 서로 다른 언어를 쓰는 전문 분야<br></br> <br></br>
        사이에서 최적의 해결책을 제시하고 고객의 목적지까지 <br></br> <br></br>
        가장 빠르고 확실하게 안내할 수 있는 경로를 디자인 합니다 <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </nav>
      <div class="footer">
        <span id="title-footer">FTHREEP</span>

        <div id="likelionAddress-footer">
          <p>
            <span>(주)멋쟁이사자처럼</span>|<span>한동대학교</span>|
            <span>Front-End</span>
          </p>
          <p>경상북도 포항시 북구 흥해읍 한동로 558</p>
        </div>

        <div id="likelionContact-footer">
          <ul>
            <li id="github">
              <a
                href="https://github.com/LikeLionHGU"
                title="멋쟁이사자처럼 Github"
              ></a>
            </li>
            <li id="instargram">
              <a
                href="https://www.instagram.com/likelion_hgu/"
                title="멋쟁이사자처럼 instargram"
              ></a>
            </li>
            <li id="web-official">
              <a
                href="https://hgulikelion.web.app/"
                title="멋쟁이사자처럼 공식 홈페이지"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
