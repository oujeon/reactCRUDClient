import React from "react";

import { Button } from "antd";
import axios from "axios";
//
const Test8: React.FC = () => {
  //
  const onRestGetModelSelect = () => {
    axios
      .get("restgetmodelselect")
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
        <Button type="primary" onClick={onRestGetModelSelect}>
          Rest Get Model Select
        </Button>
      </div>
      <br />
    </div>
  );
};

export default Test8;