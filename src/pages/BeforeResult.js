import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const BeforeResult = (props) => {
  const history = useHistory();
  const { select } = props.location.state;

  console.log(select);
  React.useEffect(() => {
    axios
      .get("http://api.catchup.shop/result", {
        params: {
          result_array: select.join("_"),
        },
      })
      .then((res) => {
        console.log(res);
        setTimeout(() => {
          history.push({
            pathname: "/result",
            state: { showData: res.data.data },
          });
        }, 3000);
      })
      .catch((error) => {
        console.dir(error);
      });
  }, []);

  return (
    <>
      <div className="h3Container">
        <img
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f58139e9-57dd-4f18-a68b-39254348d6aa/%EB%94%94%EB%85%B8.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211118T051512Z&X-Amz-Expires=86400&X-Amz-Signature=30edd8c247f741971a77d68b5d23fb8ab273af94901a57a1a0091979f81b30d5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%2594%2594%25EB%2585%25B8.gif%22&x-id=GetObject"
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
