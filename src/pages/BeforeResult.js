import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Header from "../elements/Header";
const BeforeResult = (props) => {
  const history = useHistory();
  const { select } = props.location.state;

  React.useEffect(() => {
    axios
      .get("http://api.catchup.shop/result", {
        params: {
          result_array: select.join("_"),
        },
      })
      .then((res) => {
        sessionStorage.setItem("data", JSON.stringify(res.data.data));
        setTimeout(() => {
          history.push("/result");
        }, 4000);
      })
      .catch((error) => {
        console.dir(error);
      });
  }, []);

  return (
    <>
      <Header isBack={false} />
      <div className="h3Container">
        <img
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f58139e9-57dd-4f18-a68b-39254348d6aa/%EB%94%94%EB%85%B8.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211119T064238Z&X-Amz-Expires=86400&X-Amz-Signature=b0a43aba94aaa0edf892abeac255ca67a016c12d5cfc8522b9999b89ca4b9242&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%2594%2594%25EB%2585%25B8.gif%22&x-id=GetObject"
          width="290px"
          height="250px"
          alt="img"
        />
        <h3 className="resultH3">결과를 분석하고 있어요</h3>
      </div>
    </>
  );
};

export default BeforeResult;
