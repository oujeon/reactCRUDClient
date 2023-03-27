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

  const onRestGetVoRequestBodySelect = () => {
    axios
      .get("restGetVoRequestBodySelect?idId=2&nameName=유관순")
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
  const onRestGetMapRequestBodySelect = () => {
    axios
      .get("restGetMapRequestBodySelect?idId=2&nameName=유관순")
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

  const onRestPostVoRequestBodyInsert = () => {
    //const axios = require('axios'); // legacy way
    // Make a request for a user with a given ID
    axios
      .post("restPostVoRequestBodyInsert", {
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
  const onRestPostMapRequestBodyInsert = () => {
    //const axios = require('axios'); // legacy way
    // Make a request for a user with a given ID
    axios
      .post("restPostMapRequestBodyInsert", {
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
          Rest Get @RequestBody Select 실패
        </Button>
      </div>
      <br />
      <div>
        <Button type="primary" onClick={onRestGetVoRequestBodySelect}>
          Rest Get Vo @RequestBody Select 실패
        </Button>
      </div>
      <br />
      <div>
        <Button type="primary" onClick={onRestGetMapRequestBodySelect}>
          Rest Get Map @RequestBody Select 실패
        </Button>
      </div>
      <br />
      <div>
        <Button type="primary" onClick={onRestPostVoRequestBodyInsert}>
          Rest Post Vo @RequestBody Insert 성공
        </Button>
      </div>
      <br />
      <div>
        <Button type="primary" onClick={onRestPostMapRequestBodyInsert}>
          Rest Post Map @RequestBody Insert 성공
        </Button>
      </div>
      <br />
      <div>
        <form
          action="http://localhost:8080/restPostVoFormRequestBodyInsert"
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
          <button type="submit">
            Rest Post Vo form @RequestBody Select 실패
          </button>
        </form>
      </div>
      <br />
      <div>
        <form
          action="http://localhost:8080/restPostMapFormRequestBodyInsert"
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
          <button type="submit">
            Rest Post Map form @RequestBody Select 실패
          </button>
        </form>
      </div>
      <br />
    </div>
  );
};

export default Test7;
