import React from "react";
import { Button } from "antd";
import axios from "axios";
//
const test2: React.FC = () => {
  //

  const onRestGetSelect = () => {
    axios
      .get("restGetSelect?idId=1")
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
  const onRestPostInsert = () => {
    axios
      .post("restPostInsert", {
        idId: "3",
        nameName: "강감찬",
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
  const onRestPutUpdate = () => {
    axios
      .put("restPutUpdate", {
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
  const onRestDeleteDelete = () => {
    axios
      .delete("restDeleteDelete?idId=3")
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
        <Button type="primary" onClick={onRestGetSelect}>
          Rest Get Select 성공
        </Button>
      </div>
      <br />
      <div>
        <Button type="primary" onClick={onRestPostInsert}>
          Rest post Insert 성공
        </Button>
      </div>
      <br />
      <div>
        <Button type="primary" onClick={onRestPutUpdate}>
          Rest Put Update 성공
        </Button>
      </div>
      <br />
      <div>
        <Button type="primary" onClick={onRestDeleteDelete}>
          Rest Delete Delete 성공
        </Button>
      </div>
    </div>
  );
};

export default test2;
