import React from "react";
import { Button } from "antd";
import axios from "axios";
//
const Test3: React.FC = () => {
  //

  const onRestGetModelAttributeSelect = () => {
    axios
      .get("restgetmodelattributeselect?idId=2&nameName=유관순")
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

  const onRestPostModelAttributeSelect = () => {
    //const axios = require('axios'); // legacy way
    // Make a request for a user with a given ID
    axios
      .post("restpostmodelattributeselect", {
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
        <Button type="primary" onClick={onRestGetModelAttributeSelect}>
          Rest Get @ModelAttribute Select
        </Button>
      </div>
      <br />
      <div>
        <Button type="primary" onClick={onRestPostModelAttributeSelect}>
          Rest post @ModelAttribute Select
        </Button>
      </div>
      <br />
      <div>
        <form
          action="http://localhost:8080/restformmodelattributeselect"
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
          <button type="submit">Rest form @ModelAttribute Select</button>
        </form>
      </div>
      <br />
    </div>
  );
};

export default Test3;
