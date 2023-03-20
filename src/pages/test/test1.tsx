import React from "react";
import { Button } from "antd";
import axios from "axios";
//
const test1: React.FC = () => {
  //

  const onGetTest = (e: React.MouseEvent<HTMLElement>) => {
    //const axios = require('axios'); // legacy way
    // Make a request for a user with a given ID
    axios
      .get("gettest")
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
    //const axios = require('axios'); // legacy way
    // Make a request for a user with a given ID
    axios
      .post("posttest", {
        test: "Hello World",
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
