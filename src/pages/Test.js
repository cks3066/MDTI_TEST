import React from "react";
import { useHistory } from "react-router-dom";
import testData from "../testData.json";
import ProgressBar from "../elements/Progress";

import Q1 from "../images/questionNum/Q1.png";
import Q2 from "../images/questionNum/Q2.png";
import Q3 from "../images/questionNum/Q3.png";
import Q4 from "../images/questionNum/Q4.png";
import Q5 from "../images/questionNum/Q5.png";
import Q6 from "../images/questionNum/Q6.png";
import Q7 from "../images/questionNum/Q7.png";
import Q8 from "../images/questionNum/Q8.png";
import Q9 from "../images/questionNum/Q9.png";
import Q10 from "../images/questionNum/Q10.png";
import Q11 from "../images/questionNum/Q11.png";
import Q12 from "../images/questionNum/Q12.png";

import q1 from "../images/question/qw1.png";
import q2 from "../images/question/qw2.png";
import q3 from "../images/question/qw3.png";
import q4 from "../images/question/qw4.png";
import q5 from "../images/question/qw5.png";
import q6 from "../images/question/qw6.png";
import q7 from "../images/question/qw7.png";
import q8 from "../images/question/qw8.png";
import q9 from "../images/question/qw9.png";
import q10 from "../images/question/qw10.png";
import q11 from "../images/question/qw11.png";
import q12 from "../images/question/qw12.png";

import Menu from "../elements/Menu";

const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const Test = (props) => {
  const history = useHistory();
  const [step, setStep] = React.useState(0);
  const [time, setTime] = React.useState(true);
  const questionNum = [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12];
  const question = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12];
  const wid = [185, 240, 275, 267, 229, 260, 298, 307, 276, 210, 210, 254];
  const hei = [50, 25, 50, 75, 50, 75, 50, 75, 75, 50, 50, 75];

  React.useEffect(() => {
    setTimeout(() => {
      setTime(true);
    }, 700);
  }, [time]);

  const onClick = (num) => {
    setTime(false);
    if (step < 11) setStep(step + 1);
    else if (step === 11) {
      history.push({
        pathname: "/result",
        state: { select: select },
      });
    }

    const { type } = testData.qnaList[step].a[num];
    type.map((item) => {
      select[item]++;
      return item;
    });
  };

  return (
    <>
      {/* <Menu /> */}
      {time && (
        <>
          {step < 9 ? (
            <img
              className="testQusetionNum"
              src={questionNum[step]}
              alt="img"
              width="85px"
              height="45px"
            ></img>
          ) : (
            <img
              className="testQusetionNum"
              src={questionNum[step]}
              alt="img"
              width="105px"
              height="45px"
            ></img>
          )}
          <div className="testQuestionContainer">
            <img
              className="testQusetion"
              src={question[step]}
              alt="img"
              width={wid[step]}
              height={hei[step]}
            ></img>
          </div>
          <button
            className="testAnswer"
            onClick={() => {
              onClick(0);
            }}
          >
            네
          </button>
          <button
            className="testAnswer"
            onClick={() => {
              onClick(1);
            }}
          >
            아니요
          </button>
          <ProgressBar width={300} percent={step / 11} />
        </>
      )}
    </>
  );
};
export default Test;
