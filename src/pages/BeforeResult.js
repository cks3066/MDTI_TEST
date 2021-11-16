import React from "react";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const BeforeResult = (props) => {
  const history = useHistory();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });
  //   React.useEffect(() => {
  //     if (props.pos.posX !== undefined && props.pos.posY !== undefined) {
  //       const dustURL = `http://localhost:8080/app/microdust?tmX=${props.pos.posX}&tmY=${props.pos.posY}`;

  //       axios
  //         .get(dustURL)
  //         .then((res) => {
  //           setDustData(res.data.result);
  //           setIsLoading(false);
  //         })
  //         .catch((error) => {
  //           console.error(error);
  //         });
  //     }
  //   }, [props]);

  const onClick = () => {
    history.push("/result");
  };

  return (
    <>
      <div className="h3Container">
        <h3>결과를</h3>
        <h3>분석하고</h3>
        <h3>있어요!</h3>
      </div>
      {isLoading ? (
        <Loading3QuartersOutlined
          spin
          style={{ fontSize: "40px", color: "#6aa99e" }}
        />
      ) : (
        <button id="showResultBtn" onClick={onClick}>
          확인하기
        </button>
      )}
    </>
  );
};

export default BeforeResult;
