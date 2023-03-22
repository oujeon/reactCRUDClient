import React from "react";
import { Button } from "antd";
import axios from "axios";
//
const Test3: React.FC = () => {
  //

  const onRestGetPathVariableSelect = () => {
    axios
      .get("restGetPathVariableSelect/2/유관순")
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
        <Button type="primary" onClick={onRestGetPathVariableSelect}>
          Rest Get @PathVariable Select
        </Button>
      </div>
      <br />
    </div>
  );
};

export default Test3;
