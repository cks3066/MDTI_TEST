import React from "react";
import { useHistory } from "react-router-dom";

import testData from "../testData.json";
import ProgressBar from "../elements/Progress";

const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const Test = (props) => {
  const history = useHistory();
  const [step, setStep] = React.useState(0);

  const onClick = (num) => {
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
    });
  };

  return (
    <>
      <ProgressBar width={300} percent={step / 11} />
      <h1 id="testQuestionNum">Q{step + 1}.</h1>
      <h1 id="testQuestion">{testData.qnaList[step].q}</h1>
      <div
        class="testAnswer"
        onClick={() => {
          onClick(0);
        }}
      >
        <div class="testAnswerP">{testData.qnaList[step].a[0].answer}</div>
      </div>
      <div
        class="testAnswer"
        onClick={() => {
          onClick(1);
        }}
      >
        <div class="testAnswerP">{testData.qnaList[step].a[1].answer}</div>
      </div>
      <div
        class="testAnswer"
        onClick={() => {
          onClick(2);
        }}
      >
        <div class="testAnswerP">{testData.qnaList[step].a[2].answer}</div>
      </div>
    </>
  );
};
export default Test;
