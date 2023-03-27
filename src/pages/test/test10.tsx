import React from "react";

import { Button } from "antd";
import axios from "axios";
//
const Test9: React.FC = () => {
  //
  const onRestGetRequestMappingSelect = () => {};
  const onRestPostRequestMappingSelect = () => {};
  //
  return (
    <div>
      <div>
        <Button type="primary" onClick={onRestGetRequestMappingSelect}>
          Rest Get RequestMapping Select 코드 없음
        </Button>
      </div>
      <br />
      <div>
        <Button type="primary" onClick={onRestPostRequestMappingSelect}>
          Rest Post RequestMapping Select 코드 없음
        </Button>
      </div>
      <br />
    </div>
  );
};

export default Test9;
