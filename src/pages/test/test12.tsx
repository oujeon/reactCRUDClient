import React from "react";
import { Button } from "antd";
import axios from "axios";
//
const test12: React.FC = () => {
  //

  const onRestGetVoSelect = () => {
    axios
      .get("restgetvoselect?idId=1")
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
        <Button type="primary" onClick={onRestGetVoSelect}>
          Rest Get Vo Select
        </Button>
      </div>
    </div>
  );
};

export default test12;
