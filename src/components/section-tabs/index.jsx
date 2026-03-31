import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import { TabsWrapper } from "./style";
import classNames from "classnames";

const SectionTabs = memo((props) => {
  const { list = [], tabClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  function itemClickHandle(item, index) {
    setCurrentIndex(index);
    tabClick(item);
  }

  return (
    <TabsWrapper>
      <div className="list">
        {list.map((item, index) => {
          return (
            <div
              className={classNames("item", index === currentIndex ? "active" : "")}
              key={item}
              onClick={() => itemClickHandle(item, index)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </TabsWrapper>
  );
});

SectionTabs.propTypes = {
  list: PropTypes.array,
};

export default SectionTabs;
