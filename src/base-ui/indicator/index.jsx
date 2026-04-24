import PropTypes from "prop-types";
import React, { memo, useEffect, useRef } from "react";
import { IndicatorWrapper } from "./style";

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props;
  const listRef = useRef();
  useEffect(() => {
    // 根据选择的索引来进行位置的偏移
    const selectItemEl = listRef.current.children[selectIndex];
    const itemOffsetLeft = selectItemEl.offsetLeft;
    const itemWidth = selectItemEl.clientWidth;
    const containerWidth = listRef.current.clientWidth;
    const containerScroll = listRef.current.scrollWidth;
    // console.log("ddd=>", itemOffsetLeft, itemWidth, containerWidth);
    let distance = itemOffsetLeft + itemWidth * 0.5 - containerWidth * 0.5;
    // 针对左右两边是否允许滚动处理
    if (distance < 0) distance = 0;
    const totalDistance = containerScroll - containerWidth;
    if (distance > totalDistance) distance = totalDistance;

    listRef.current.style.transform = `translateX(${-distance}px)`;
  }, [selectIndex, listRef]);

  return (
    <IndicatorWrapper>
      <div className="i-list" ref={listRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  selectIndex: PropTypes.number,
};

export default Indicator;
