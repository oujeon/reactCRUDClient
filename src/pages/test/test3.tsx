import React from "react";
import { Button } from "antd";
import axios from "axios";
//
const Test3: React.FC = () => {
  //

  const onRestGetHttpServletRequestSelect = () => {
    axios
      .get("restgethttpservletRequestselect?idId=2&nameName=유관순")
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
  const onRestPostHttpServletRequestInsert = () => {
    axios
      .post("restposthttpservletrequestinsert", {
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
  return (
    <div>
      <div>
        <Button type="primary" onClick={onRestGetHttpServletRequestSelect}>
          Rest Get HttpServeltRequest Select
        </Button>
      </div>
      <br />
      <div>
        <Button type="primary" onClick={onRestPostHttpServletRequestInsert}>
          Rest post HttpServeltRequest Insert
        </Button>
      </div>
    </div>
  );
};

export default Test3;
