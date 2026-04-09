// import PropTypes from "prop-types";
import React, { memo, useEffect, useRef, useState } from "react";
import { ViewWrapper } from "./style";
import IconArrowRight from "@/assets/svg/icon_arrow_right";
import IconArrowLeft from "@/assets/svg/icon_arrow_left";

const ScrollView = memo((props) => {
  const [showRight, setShowRight] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  const [posIndex, setPosIndex] = useState(0);
  const scrollContentRef = useRef();
  const totalDistanceRef = useRef();

  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth;
    const clientWidth = scrollContentRef.current.clientWidth;
    const distance = scrollWidth - clientWidth;
    setShowRight(distance > 0);
    totalDistanceRef.value = distance;
  }, []);

  function controlClickHandle(isRight = true) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    const newEl = scrollContentRef.current.children[newIndex];
    const newOffsetLeft = newEl.offsetLeft;
    scrollContentRef.current.style.transform = `translateX(-${newOffsetLeft}px)`;
    setPosIndex(newIndex);
    setShowRight(totalDistanceRef.value > newOffsetLeft);
    setShowLeft(newIndex > 0);
  }

  return (
    <ViewWrapper>
      <div className="control">
        {showLeft && (
          <div className="control-item left" onClick={() => controlClickHandle(false)}>
            <IconArrowLeft />
          </div>
        )}
        {showRight && (
          <div className="control-item right" onClick={() => controlClickHandle(true)}>
            <IconArrowRight />
          </div>
        )}
      </div>
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  );
});

// ScrollView.propTypes = {};

export default ScrollView;
