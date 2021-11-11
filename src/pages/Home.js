import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Home = (props) => {
  const history = useHistory();
  const onClick = () => {
    history.push("/test");
  };

  axios
    .get("http://13.125.132.62:5000/test", {
      headers: {
        withCredentials: true,
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.dir(error);
    });

  return (
    <>
      <div>간단한 테스트 설명</div>
      <div id="homeTitle">MDTI 테스트</div>
      <img
        id="homeImg"
        src="https://source.unsplash.com/random"
        alt="img"
        width="310px"
        height="230px"
      ></img>
      <button id="homeStartBtn" onClick={onClick}>
        시작하기
      </button>
      <p id="homeCountApply">00명의 청년들이 참여했어요</p>
    </>
  );
};

export default Home;
