import React from "react";
import Toast from "../elements/Toast";
import testData from "../testData.json";
import { kakaoShare, twitterShare, facebookShare } from "../elements/share";
import facebook from "../images/facebook.png";
import kakao from "../images/kakao.png";
import twitter from "../images/twitter.png";
import link from "../images/link.png";
import { useHistory } from "react-router-dom";

import dino1 from "../images/result/dino1.png";
import title1 from "../images/result/type1.png";

const findResult = (select) => {
  const maxValue = Math.max.apply(null, select);
  var result = 0;

  select.forEach((item, idx) => {
    if (item === maxValue) {
      result = idx;
    }
  });

  return result;
};

const copyToClipboard = (val) => {
  const t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = val;
  t.select();
  document.execCommand("copy");
  document.body.removeChild(t);
};

const copy = (func) => {
  copyToClipboard("https://cks3066.github.io/YoutheRoom/");
  func("complete");
};

const Result = (props) => {
  var select = null;
  const history = useHistory();
  if (props.location.state === undefined) {
    history.push("/");
  } else {
    select = props.location.state.select;
  }
  const result = findResult(select);
  const [ToastStatus, setToastStatus] = React.useState(false);
  const ToastMsg = "클리보드에 URL이 복사되었습니다.";

  const handleToast = () => {
    if (!ToastStatus) {
      setToastStatus(true);
    }
  };

  React.useEffect(() => {
    if (ToastStatus) {
      setTimeout(() => {
        setToastStatus(false);
      }, 1000);
    }
  }, [ToastStatus]);

  return (
    <>
      <div id="resultTitle">더 많은 지식과 더 많은 체험이 필요한</div>
      <img
        id="resultType"
        src={title1}
        alt="img"
        width="180px"
        height="44px"
      ></img>
      <img src={dino1} alt="img" width="310px" height="230px"></img>
      <div id="resultMain_Title">{testData.infoList[result].name}</div>
      <div id="resultMain">{testData.infoList[result].desc}</div>

      <div id="resultProgramTitle">나와 맞는 프로그램은?</div>
      <div className="resultPrograms">
        <p id="programName">프로그램 이름</p>
        <p id="programDetail">프로그램 설명 어쩌구 저쩌구</p>
      </div>
      <div className="resultPrograms">
        <p id="programName">프로그램 이름</p>
        <p id="programDetail">프로그램 설명 어쩌구 저쩌구</p>
      </div>
      <div className="resultPrograms">
        <p id="programName">프로그램 이름</p>
        <p id="programDetail">프로그램 설명 어쩌구 저쩌구</p>
      </div>
      <div id="moreProgram">
        <p>나와 맞는 프로그램 더 보기</p>
      </div>
      <img
        src="https://source.unsplash.com/random"
        alt="img"
        width="310px"
        height="230px"
      ></img>

      <div id="resultBtnContainer">
        <button id="resultRetry">다시하기</button>
        <button id="resultAll">전체 유형 보기</button>
      </div>
      <div id="resultShare">결과 공유하기</div>
      <div id="shareContainer">
        <img
          className="shareIcon"
          src={kakao}
          alt="kakaotalk"
          width="65px"
          height="65px"
          onClick={kakaoShare}
        />

        <img
          className="shareIcon"
          src={facebook}
          alt="facebook"
          width="65px"
          height="65px"
          onClick={facebookShare}
        ></img>

        <img
          className="shareIcon"
          src={twitter}
          alt="twitter"
          width="65px"
          height="65px"
          onClick={twitterShare}
        ></img>
        <input type="hidden" id="urlInput" className="url-input" />

        <img
          className="shareIcon"
          src={link}
          alt="link"
          width="65px"
          height="65px"
          onClick={() => {
            copy(handleToast);
          }}
        ></img>
        {ToastStatus && (
          <>
            <Toast msg={ToastMsg} />
          </>
        )}
      </div>

      {/* <button id="resultRetryBtn">다시하기</button>
      <button id="resultShowAll">전체 유형 보기</button> */}
    </>
  );
};

export default Result;
