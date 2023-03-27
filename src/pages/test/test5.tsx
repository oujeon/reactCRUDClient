import React from "react";
import { Button } from "antd";
import axios from "axios";
//
const Test3: React.FC = () => {
  //

  const onRestGetRequestParamSelect = () => {
    axios
      .get("restGetRequestParamSelect?idId=2&nameName=유관순")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };
  //
  const onRestPostRequestParamSelect = () => {
    axios
      .post("restPostRequestParamSelect", {
        idId: "1",
        nameName: "홍길동",
      })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };
  //
  return (
    <div>
      <div>
        <Button type="primary" onClick={onRestGetRequestParamSelect}>
          Rest Get @RequestParam Select 성공
        </Button>
      </div>
      <br />
      <div>
        <Button type="primary" onClick={onRestPostRequestParamSelect}>
          Rest Post @RequestParam Select 실패
        </Button>
      </div>
      <br />
    </div>
  );
};

export default Test3;
