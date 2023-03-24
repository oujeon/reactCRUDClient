import React from "react";
import { Button } from "antd";
import axios from "axios";
//
const test1: React.FC = () => {
  //

  const onGetTest = () => {
    axios
      .get("getTest?idId=1&nameName=홍길동")
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
  const onPostTest = () => {
    axios
      .post("postTest", {
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
        <Button type="primary" onClick={onGetTest}>
          Get Test
        </Button>
      </div>
      <br />
      <div>
        <Button type="primary" onClick={onPostTest}>
          Post Test
        </Button>
      </div>
    </div>
  );
};

export default test1;
