import React from "react";
import { Button } from "antd";
import axios from "axios";
//
const Test7: React.FC = () => {
  //

  const onRestGetRequestBodySelect = () => {
    axios
      .get("restGetRequestBodySelect?idId=2&nameName=유관순")
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

  const onRestPostRequestBodySelect = () => {
    //const axios = require('axios'); // legacy way
    // Make a request for a user with a given ID
    axios
      .post("restPostRequestBodySelect", {
        idId: "2",
        nameName: "유관순",
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
  const onIdId = () => {};
  const onNameName = () => {};
  //
  return (
    <div>
      <div>
        <Button type="primary" onClick={onRestGetRequestBodySelect}>
          Rest Get @RequestBody Select
        </Button>
      </div>
      <br />
      <div>
        <Button type="primary" onClick={onRestPostRequestBodySelect}>
          Rest Post @RequestBody Select
        </Button>
      </div>
      <br />
      <div>
        <form
          action="http://localhost:8080/restFormRequestBodySelect"
          method="POST"
        >
          idId :{" "}
          <input type="number" name="idId" value="2" onChange={onIdId}></input>
          nameName :{" "}
          <input
            type="text"
            name="nameName"
            value="유관순"
            onChange={onNameName}
          ></input>
          <button type="submit">Rest form @RequestBody Select</button>
        </form>
      </div>
      <br />
    </div>
  );
};

export default Test7;
