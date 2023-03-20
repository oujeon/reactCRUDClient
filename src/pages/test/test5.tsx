import React from "react";
import { Button } from "antd";
import axios from "axios";
//
const Test3: React.FC = () => {
  //

  const onRestGetRequestParamSelect = () => {
    axios
      .get("restgetrequestparamselect?idId=2&nameName=유관순")
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
          Rest Get @RequestParam Select
        </Button>
      </div>
      <br />
    </div>
  );
};

export default Test3;
