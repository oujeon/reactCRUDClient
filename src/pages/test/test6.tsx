import React from "react";
import { Button } from "antd";
import axios from "axios";
//
const Test3: React.FC = () => {
  //

  const onRestGetVoModelAttributeSelect = () => {
    axios
      .get("restGetVoModelAttributeSelect?idId=2&nameName=유관순")
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

  const onRestGetMapModelAttributeSelect = () => {
    axios
      .get("restGetMapModelAttributeSelect?idId=2&nameName=유관순")
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
  const onRestGetMapRequestParamModelAttributeSelect = () => {
    axios
      .get("restGetMapRequestParamModelAttributeSelect?idId=2&nameName=유관순")
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

  const onRestPostVoModelAttributeSelect = () => {
    //const axios = require('axios'); // legacy way
    // Make a request for a user with a given ID
    axios
      .post("restPostVoModelAttributeSelect", {
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

  const onRestPostMapModelAttributeSelect = () => {
    //const axios = require('axios'); // legacy way
    // Make a request for a user with a given ID
    axios
      .post("restPostMapModelAttributeSelect", {
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
        <Button type="primary" onClick={onRestGetVoModelAttributeSelect}>
          Rest Get Vo @ModelAttribute Select 성공
        </Button>
      </div>
      <br />
      <div>
        <Button type="primary" onClick={onRestGetMapModelAttributeSelect}>
          Rest Get Map @ModelAttribute Select 실패
        </Button>
      </div>
      <br />
      <div>
        <Button
          type="primary"
          onClick={onRestGetMapRequestParamModelAttributeSelect}
        >
          Rest Get Map RequestParam @ModelAttribute Select 성공
        </Button>
      </div>
      <br />
      <div>
        <Button type="primary" onClick={onRestPostVoModelAttributeSelect}>
          Rest post Vo @ModelAttribute Select 실패
        </Button>
      </div>
      <br />
      <div>
        <Button type="primary" onClick={onRestPostMapModelAttributeSelect}>
          Rest post Map @ModelAttribute Select 실패
        </Button>
      </div>
      <br />
      <div>
        <form
          action="http://localhost:8080/restFormVoModelAttributeSelect"
          method="POST"
        >
          idId :
          <input type="number" name="idId" value="2" onChange={onIdId}></input>
          nameName :
          <input
            type="text"
            name="nameName"
            value="유관순"
            onChange={onNameName}
          ></input>
          <button type="submit">
            Rest form Vo @ModelAttribute Select 성공
          </button>
        </form>
      </div>
      <br />
      <div>
        <form
          action="http://localhost:8080/restFormMapModelAttributeSelect"
          method="POST"
        >
          idId :
          <input type="number" name="idId" value="2" onChange={onIdId}></input>
          nameName :
          <input
            type="text"
            name="nameName"
            value="유관순"
            onChange={onNameName}
          ></input>
          <button type="submit">
            Rest form Map @ModelAttribute Select 실패
          </button>
        </form>
      </div>
      <br />
      <div>
        <form
          action="http://localhost:8080/restFormMapRequestParamModelAttributeSelect"
          method="POST"
        >
          idId :
          <input type="number" name="idId" value="2" onChange={onIdId}></input>
          nameName :
          <input
            type="text"
            name="nameName"
            value="유관순"
            onChange={onNameName}
          ></input>
          <button type="submit">
            Rest form Map RequestParam @ModelAttribute Select 성공
          </button>
        </form>
      </div>
      <br />
    </div>
  );
};

export default Test3;
