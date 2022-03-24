import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SearchOutlined } from "@ant-design/icons";
import WineLogo from "/public/images/wine4.png";
function Header(): JSX.Element {
  return (
    <>
      <header>
        <div className="inner">
          <a className="logo">
            <Link href="/" passHref>
              <Image src={WineLogo} width={50} height={50} alt="image" />
            </Link>
            <div className="logoName">Wa Mmunity</div>
          </a>

          <div className="sub-menu">
            <div className="search">
              <input type="text" />
              <SearchOutlined />
              <span className="material-icons"> </span>
            </div>
            <ul className="menu">
              <li>
                <Link href="/" passHref>
                  <a>My Page</a>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <a>Log out</a>
                </Link>
              </li>
            </ul>
          </div>
          <ul className="main-menu">
            <li className="item">
              <div className="item__name">와인 리스트</div>
              <div className="item__contents">
                <div className="contents__menu">
                  <ul className="inner">
                    <li>
                      <h4>화이트 와인</h4>
                      <ul>
                        <li>이탈리아</li>
                        <li>스페인</li>
                        <li>프랑스</li>
                      </ul>
                    </li>
                    <li>
                      <h4>레드 와인</h4>
                      <ul>
                        <li>이탈리아</li>
                        <li>스페인</li>
                        <li>프랑스</li>
                      </ul>
                    </li>
                    <li>
                      <h4>로제 와인</h4>
                      <ul>
                        <li>이탈리아</li>
                        <li>스페인</li>
                        <li>프랑스</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="item">
              <div className="item__name">와인 추천</div>
              <div className="item__contents">
                <div className="contents__menu">
                  <ul className="inner">
                    <li>
                      <h4>나의 취향 분석</h4>
                      <ul>
                        <li>분석 하러가기</li>
                      </ul>
                    </li>
                    <li>
                      <h4>오늘의 추천</h4>
                      <ul>
                        <li>분석 하러가기</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="item">
              <div className="item__name">와뮤니티 게시판</div>
              <div className="item__contents">
                <div className="contents__menu">
                  <ul className="inner">
                    <li>
                      <h4>와인 자유 게시판</h4>
                      <ul>
                        <li>와인 맛 리뷰</li>
                        <li>와인 오프라인 매장 후기</li>
                        <li>와인 추천</li>
                      </ul>
                    </li>
                    <li>
                      <h4>와인 거래 게시판</h4>
                      <ul>
                        <li>팝니다</li>
                        <li>삽니다</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
