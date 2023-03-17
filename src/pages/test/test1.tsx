import React from "react";
import { Button, Space } from "antd";
//
const test1: React.FC = () => {
  //

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    alert(e);
  };
  //
  return (
    <div>
      <Button type="primary" onClick={onClick}>
        Get Test
      </Button>
    </div>
  );
};

export default test1;
