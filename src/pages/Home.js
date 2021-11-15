import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import title from "../images/title.png";
import mainDino from "../images/main_dino.png";

const Home = (props) => {
  const history = useHistory();
  const onClick = () => {
    history.push("/test");
  };

  axios
    .get("http://api.catchup.shop/test", {
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
      <div className="home">
        <b>My Dream</b> Type Indicator
      </div>
      <img
        id="homeTitle"
        src={title}
        alt="img"
        width="226x"
        height="122px"
      ></img>

      <img
        id="homeImg"
        src={mainDino}
        alt="img"
        width="280px"
        height="240px"
      ></img>
      <button id="homeStartBtn" onClick={onClick}>
        시작하기
      </button>
      <p id="homeCountApply">MDTI 테스트란?</p>
    </>
  );
};

export default Home;
