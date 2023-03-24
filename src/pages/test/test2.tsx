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
          Rest Get Select
        </Button>
      </div>
      <br />
      <div>
        <Button type="primary" onClick={onRestPostInsert}>
          Rest post Insert
        </Button>
      </div>
      <br />
      <div>
        <Button type="primary" onClick={onRestPutUpdate}>
          Rest Put Update
        </Button>
      </div>
      <br />
      <div>
        <Button type="primary" onClick={onRestDeleteDelete}>
          Rest Delete Delete
        </Button>
      </div>
    </div>
  );
};

export default test2;
