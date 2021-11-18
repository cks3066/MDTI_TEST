import React from "react";
import Toast from "../elements/Toast";
import { kakaoShare, twitterShare, facebookShare } from "../elements/share";
import facebook from "../images/facebook.png";
import kakao from "../images/kakao.png";
import twitter from "../images/twitter.png";
import link from "../images/link.png";
import { useHistory } from "react-router-dom";
import Modal from "../elements/Modal";
import title1 from "../images/result/title1.png";
import title2 from "../images/result/title2.png";
import title3 from "../images/result/title3.png";
import title4 from "../images/result/title4.png";

const subTitle = [
  "다양한 경험이 필요한",
  "더 많은 지식과 더 많은 체험이 필요한",
  "구체적이고 명확한 기회가 필요한",
  "면접, 자소서 등의 준비가 필요한",
];
const title = [title1, title2, title3, title4];
const copyToClipboard = (val) => {
  const t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = val;
  t.select();
  document.execCommand("copy");
  document.body.removeChild(t);
};

const copy = (func) => {
  copyToClipboard("catchup.shop/");
  func("complete");
};

const Result = (props) => {
  const history = useHistory();
  const [isShowAll, setIsShowAll] = React.useState(false);
  const [ToastStatus, setToastStatus] = React.useState(false);
  const ToastMsg = "클리보드에 URL이 복사되었습니다.";
  const { showData } = props.location.state;
  console.log(showData);
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

  const handleRetryBtn = () => {
    history.push("/");
  };

  const handleShowAllBtn = () => {
    setIsShowAll(true);
  };

  console.log(showData.programs[2].img);

  return (
    <>
      <div id="resultTitle">{subTitle[showData.type - 1]}</div>
      <img id="resultType" src={title[showData.type - 1]} alt="img"></img>
      <img src={showData.img} alt="img" width="310px" height="230px"></img>
      <div id="resultMain_Title">{showData.step}</div>
      <div id="resultMain">
        <p>{showData.sub1}</p>
        <p>{showData.sub2}</p>
      </div>
      <div id="resultProgramTitle">나와 맞는 프로그램은?</div>
      <div className="resultPrograms">
        <img
          className="resultProgramImg"
          src={showData.programs[0].img}
          alt="img"
        />
        <div className="resultProgramDetail">
          <p id="programName">{showData.programs[0].title}</p>
          <p id="programDetail">{showData.programs[0].desc}</p>
        </div>
      </div>
      <div className="resultPrograms">
        <img
          className="resultProgramImg"
          src={showData.programs[1].img}
          alt="img"
        />
        <div className="resultProgramDetail">
          <p id="programName">{showData.programs[1].title}</p>
          <p id="programDetail">{showData.programs[1].desc}</p>
        </div>
      </div>{" "}
      <div className="resultPrograms">
        <img
          className="resultProgramImg"
          src={showData.programs[2].img}
          alt="img"
        />
        <div className="resultProgramDetail">
          <p id="programName">{showData.programs[2].title}</p>
          <p id="programDetail">{showData.programs[2].desc}</p>
        </div>
      </div>
      <div id="resultBtnContainer">
        <button id="resultRetry" onClick={handleRetryBtn}>
          다시하기
        </button>
        <button id="resultAll" onClick={handleShowAllBtn}>
          전체 유형 보기
        </button>
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
      {isShowAll && <Modal setIsShowAll={setIsShowAll} />}
    </>
  );
};

export default Result;
