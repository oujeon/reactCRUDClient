import React from "react";
import { Tabs } from "antd";
//
import Test1 from "./test/test1";
import Test2 from "./test/test2";
import Test3 from "./test/test3";
//
const TabPane = Tabs.TabPane;
//
const WorkSpace: React.FC = () => {
  //
  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <div style={{ margin: "20px" }}>
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane tab="Get/Post" key="1">
          <Test1 />
        </TabPane>
        <TabPane tab="Rest API" key="2">
          <Test2 />
        </TabPane>
        <TabPane tab="test3" key="3">
          <Test3 />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default WorkSpace;
