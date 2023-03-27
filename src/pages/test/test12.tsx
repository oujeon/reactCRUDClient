import React from "react";
import { Button } from "antd";
import axios from "axios";
//
const test12: React.FC = () => {
  //

  const onRestGetVoSelect = () => {
    axios
      .get("restGetVoSelect?idId=1")
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

  const onRestPostVoInsert = () => {
    axios
      .post("restPostVoInsert", {
        idId: "4",
        nameName: "윤봉길",
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
  const onRestPutVoUpdate = () => {
    axios
      .put("restPutVoUpdate", {
        idId: "3",
        nameName: "강감찬2",
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
  const onRestDeleteVoDelete = () => {
    axios
      .delete("restDeleteVoDelete?idId=3")
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
          Rest Get Vo Select 성공
        </Button>
      </div>
      <br />
      <div>
        <Button type="primary" onClick={onRestPostVoInsert}>
          Rest Post Vo Insert 성공
        </Button>
      </div>
      <br />
      <div>
        <Button type="primary" onClick={onRestPutVoUpdate}>
          Rest Put Vo Update 성공
        </Button>
      </div>
      <br />
      <div>
        <Button type="primary" onClick={onRestDeleteVoDelete}>
          Rest Delete Vo Delete 성공
        </Button>
      </div>
    </div>
  );
};

export default test12;
