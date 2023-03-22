import React from "react";
import { Tabs } from "antd";
//
import Test1 from "./test/test1";
import Test2 from "./test/test2";
import Test3 from "./test/test3";
import Test4 from "./test/test4";
import Test5 from "./test/test5";
import Test6 from "./test/test6";
import Test7 from "./test/test7";
import Test8 from "./test/test8";
import Test9 from "./test/test9";
import Test10 from "./test/test10";
import Test11 from "./test/test11";
import Test12 from "./test/test12";
//
const TabPane = Tabs.TabPane;
//
const WorkSpace: React.FC = () => {
  //
  const onChange = (key: string) => {};

  return (
    <div style={{ margin: "20px" }}>
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane tab="Get/Post" key="1">
          <Test1 />
        </TabPane>
        <TabPane tab="Rest API" key="2">
          <Test2 />
        </TabPane>
        <TabPane tab="HttpServletRequest" key="3">
          <Test3 />
        </TabPane>
        <TabPane tab="@PathVariable" key="4">
          <Test4 />
        </TabPane>
        <TabPane tab="@RequestParam" key="5">
          <Test5 />
        </TabPane>
        <TabPane tab="@ModelAttribute" key="6">
          <Test6 />
        </TabPane>
        <TabPane tab="@RequestBody" key="7">
          <Test7 />
        </TabPane>
        <TabPane tab="Model" key="8">
          <Test8 />
        </TabPane>
        <TabPane tab="ModelAndView" key="9">
          <Test9 />
        </TabPane>
        <TabPane tab="RequestMapping" key="10">
          <Test10 />
        </TabPane>
        <TabPane tab="Upload/Download" key="11">
          <Test11 />
        </TabPane>
        <TabPane tab="Vo" key="12">
          <Test12 />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default WorkSpace;
