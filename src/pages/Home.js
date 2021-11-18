import React from "react";
import { useHistory } from "react-router-dom";
import title from "../images/title.png";
import mainDino from "../images/main_dino.png";
import MDTI from "../elements/MDTI";

const Home = (props) => {
  const history = useHistory();
  const [isMDTI, setIsMDTI] = React.useState(false);
  const onClick = () => {
    history.push("/test");
  };

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
      <p
        id="homeCountApply"
        onClick={() => {
          setIsMDTI(true);
        }}
      >
        <b>MDTI 테스트</b>란 무엇일까?
      </p>
      {isMDTI && <MDTI setIsMDTI={setIsMDTI} />}
    </>
  );
};

export default Home;
