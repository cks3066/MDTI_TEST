import React from "react";
import Toast from "../elements/Toast";
import testData from "../testData.json";
import { kakaoShare, twitterShare, facebookShare } from "../elements/share";
import facebook from "../images/facebook.png";
import kakao from "../images/kakao.png";
import twitter from "../images/twitter.png";
import link from "../images/link.png";
import { useHistory } from "react-router-dom";

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
      <h1 id="resultTitle">진로단계 결과</h1>
      <div id="resultSimple">{testData.infoList[result].name}</div>
      <img
        src="https://source.unsplash.com/random"
        alt="img"
        width="310px"
        height="230px"
      ></img>
      <div id="resultMain_Title">{testData.infoList[result].name}</div>
      <div id="resultMain">{testData.infoList[result].desc}</div>

      <div id="resultProgramTitle">나와 맞는 프로그램은?</div>
      <div class="resultPrograms">
        <p id="programName">프로그램 이름</p>
        <p id="programDetail">프로그램 설명 어쩌구 저쩌구</p>
      </div>
      <div class="resultPrograms">
        <p id="programName">프로그램 이름</p>
        <p id="programDetail">프로그램 설명 어쩌구 저쩌구</p>
      </div>
      <div class="resultPrograms">
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

      <div id="resultShare">결과 공유하기</div>
      <div id="shareContainer">
        <img
          class="shareIcon"
          src={kakao}
          alt="kakaotalk"
          width="65px"
          height="65px"
          onClick={kakaoShare}
        />

        <img
          class="shareIcon"
          src={facebook}
          alt="facebook"
          width="65px"
          height="65px"
          onClick={facebookShare}
        ></img>

        <img
          class="shareIcon"
          src={twitter}
          alt="twitter"
          width="65px"
          height="65px"
          onClick={twitterShare}
        ></img>
        <input type="hidden" id="urlInput" class="url-input" />

        <img
          class="shareIcon"
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

      <div id="resultBtnContainer">
        <button id="resultRetry">다시하기</button>
        <button id="resultAll">전체 유형 보기</button>
      </div>
      {/* <button id="resultRetryBtn">다시하기</button>
      <button id="resultShowAll">전체 유형 보기</button> */}
    </>
  );
};

export default Result;
