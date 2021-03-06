import React from "react";
import Router from "next/router";
import Link from "next/link";
import styled from "styled-components";

function Rankfeed(props: any) {
  // console.log(props)
  return (
    <ul className="friend-list-wrapper">
      <div>
        <span className="태양" style={{ marginRight: "10px" }}>
          {props.num}위
        </span>
        <span className="불타오르는" style={{ marginRight: "10px" }}>
          {props.dto.ratingNum} 개의 리뷰
        </span>
        {/* 　[ {props.dto.ratingNum} 개의 리뷰 ] */}
      </div>
      <li
        className="friend"
        onClick={() => {
          Router.push(`/wine/${props.dto.wineId}`);
        }}
      >
        {props.dto.img && (
          <Profile
            className="profile-image"
            style={{ backgroundImage: `url(${props.dto.img})` }}
          >
            {" "}
          </Profile>
        )}
        <div className="nickname txt-bold">
          <div>
            <Style className="자"> 원산지 : {props.dto.country} </Style>
            {/* 　[ {props.dto.ratingNum} 개의 리뷰 ] */}
          </div>

          {props.dto.name}
        </div>
      </li>
    </ul>
  );
}

export default Rankfeed;

const Profile = styled.div`
  margin-bottom: 2px;
`;

const Style = styled.span`
  font-size: 10px;
  margin-right: 10px;
`;
