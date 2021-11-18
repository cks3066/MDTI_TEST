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

import subtitle1 from "../images/result/subtitle1.png";
import subtitle2 from "../images/result/subtitle2.png";
import subtitle3 from "../images/result/subtitle3.png";
import subtitle4 from "../images/result/subtitle4.png";

import programTitle from "../images/result/program_title.png";
import shareTitle from "../images/result/share_title.png";

const subTitle = [
  "다양한 경험이 필요한",
  "더 많은 지식과 더 많은 체험이 필요한",
  "구체적이고 명확한 기회가 필요한",
  "면접, 자소서 등의 준비가 필요한",
];
const title = [title1, title2, title3, title4];
const subtitle = [subtitle1, subtitle2, subtitle3, subtitle4];
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

const titlesize = [
  [0, 0],
  [180, 43],
  [180, 43],
  [251, 42],
  [144, 44],
];
const subtitlesize = [
  [0, 0],
  [204, 43],
  [200, 43],
  [284, 47],
  [204, 43],
];
const Result = (props) => {
  const history = useHistory();
  const [isShowAll, setIsShowAll] = React.useState(false);
  const [ToastStatus, setToastStatus] = React.useState(false);
  const ToastMsg = "클리보드에 URL이 복사되었습니다.";
  const { showData } = props.location.state;
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

  return (
    <>
      <div id="resultTitle">{subTitle[showData.type - 1]}</div>
      <img
        id="resultType"
        src={title[showData.type - 1]}
        alt="img"
        width={titlesize[showData.type][0]}
        height={titlesize[showData.type][1]}
      />
      <img src={showData.img} alt="img" width="310px" height="230px"></img>
      <img
        src={subtitle[showData.type - 1]}
        alt="img"
        width={subtitlesize[showData.type][0]}
        height={subtitlesize[showData.type][1]}
        style={{ marginTop: "25px", marginBottom: "10px" }}
      />
      <div id="resultMain">
        <p>{showData.sub1}</p>
        <p>{showData.sub2}</p>
      </div>
      <div className="titleCon">
        <img
          src={programTitle}
          alt="img"
          width="276px"
          height="37px"
          style={{}}
        ></img>
      </div>
      <a href={showData.programs[0].url}>
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
      </a>
      <a href={showData.programs[1].url}>
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
        </div>
      </a>
      <a href={showData.programs[2].url}>
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
      </a>
      <div id="resultBtnContainer">
        <button id="resultRetry" onClick={handleRetryBtn}>
          다시하기
        </button>
        <button id="resultAll" onClick={handleShowAllBtn}>
          전체 유형 보기
        </button>
      </div>
      <img
        id="resultShare"
        src={shareTitle}
        alt="img"
        width="165px"
        height="37px"
      ></img>
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
