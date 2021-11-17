import React from "react";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import axios from "axios";

const BeforeResult = (props) => {
  const history = useHistory();
  const { select } = props.location.state;
  const [isLoading, setIsLoading] = React.useState(true);
  const [showData, setShowData] = React.useState();

  React.useEffect(() => {
    axios
      .post(
        "http://api.catchup.shop/result",
        { result_array: select.join("_") },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setShowData(res.data.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.dir(error);
      });
  }, []);

  const onClick = () => {
    history.push({
      pathname: "/result",
      state: { showData: showData },
    });
  };

  return (
    <>
      <div className="h3Container">
        <h3 className="resultH3">결과를</h3>
        <h3 className="resultH3">분석하고</h3>
        <h3 className="resultH3">있어요!</h3>
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
