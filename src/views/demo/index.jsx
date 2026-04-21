import React, { memo, useState } from "react";
import { DemoWrapper } from "./style";
import Indicator from "@/base-ui/indicator";

const Demo = memo(() => {
  const list = ["abc", "nbc", "nba", "test", "123", "456789"];
  const [selectIndex, setSelectIndex] = useState(0);

  function onHandleClick(isNext) {
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1;
    if (newIndex < 0) newIndex = list.length - 1;
    if (newIndex === list.length) newIndex = 0;
    setSelectIndex(newIndex);
  }

  return (
    <DemoWrapper>
      <div className="control">
        <button onClick={() => onHandleClick(false)}>上一个</button>
        <button onClick={() => onHandleClick(true)}>下一个</button>
      </div>
      <div className="list">
        <Indicator selectIndex={selectIndex}>
          {list.map((item, index) => {
            return <button key={index}>{item}</button>;
          })}
        </Indicator>
      </div>
    </DemoWrapper>
  );
});

export default Demo;
