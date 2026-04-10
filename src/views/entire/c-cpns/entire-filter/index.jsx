import React, { memo, useState } from "react";
import { FilterWrapper } from "./style";
import classNames from "classnames";

const EntireFilter = memo(() => {
  const [select_filters, setSelectFilters] = useState([]);
  const filter_list = [
    "人数",
    "可免费取消",
    "房源类型",
    "价格",
    "位置区域",
    "闪定",
    "卧室/床数",
    "促销/优惠",
    "更多筛选条件",
  ];

  function handleFilterItemClick(item) {
    const newFilters = [...select_filters];
    if (select_filters.includes(item)) {
      const itemIndex = newFilters.findIndex((f) => f === item);
      newFilters.splice(itemIndex, 1);
    } else {
      newFilters.push(item);
    }

    setSelectFilters(newFilters);
  }

  return (
    <FilterWrapper>
      <div className="filter-list">
        {filter_list.map((item) => {
          return (
            <div
              className={classNames("item", select_filters.includes(item) ? "active" : "")}
              key={item}
              onClick={() => handleFilterItemClick(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

export default EntireFilter;
