import PropTypes from "prop-types";
import React, { memo, useEffect, useRef, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import { BrowserWrapper } from "./style";
import IconClose from "@/assets/svg/icon_close";
import IconArrowLeft from "@/assets/svg/icon_arrow_left";
import IconArrowRight from "@/assets/svg/icon_arrow_right";
import IconArrowBottom from "@/assets/svg/icon_arrow_bottom";
import classNames from "classnames";
import Indicator from "../indicator";

const PictureBrowser = memo((props) => {
  const { closeClick, list } = props;
  const iconWidth = 50;
  const iconHeight = 50;
  const [selectIndex, setSelectIndex] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  function onCloseClick() {
    closeClick();
  }

  function onTogglePicClick(isNext = true) {
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1;
    const picLength = list.length;
    if (newIndex >= picLength) newIndex = 0;
    if (newIndex < 0) newIndex = picLength - 1;
    setSelectIndex(newIndex);
  }

  function onImgItemClick(index) {
    setSelectIndex(index);
  }

  return (
    <BrowserWrapper>
      <div className="close-btn" onClick={onCloseClick}>
        <IconClose />
      </div>
      <div className="control">
        <div className="control-item icon-left" onClick={() => onTogglePicClick(false)}>
          <IconArrowLeft width={iconWidth} height={iconHeight} />
        </div>
        <div className="control-item icon-right" onClick={() => onTogglePicClick(true)}>
          <IconArrowRight width={iconWidth} height={iconHeight} />
        </div>
      </div>
      <div className="main-content">
        <div className="pic">
          <SwitchTransition mode="in-out">
            <CSSTransition
              nodeRef={nodeRef}
              key={list[selectIndex]}
              classNames="pic-img"
              timeout={200}
            >
              <img ref={nodeRef} src={list[selectIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="pic-info">
          <div className="info-left">
            <span className="num">{selectIndex + 1}</span>
            <span className="split">/</span>
            <span className="total">{list.length}</span>
            <span className="desc">：room apartment图片{selectIndex + 1}</span>
          </div>
          <div className="info-right">
            <span>
              隐藏照片列表
              <IconArrowBottom />
            </span>
          </div>
        </div>
        {/* <div className="pic-list">
          {list.map((item, index) => {
            return (
              <div
                className={classNames("pic-list-item", selectIndex === index ? "active" : "")}
                key={item}
              >
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            );
          })}
        </div> */}
        <div className="pic-list">
          <Indicator selectIndex={selectIndex}>
            {list.map((item, index) => {
              return (
                <div
                  className={classNames("pic-list-item", selectIndex === index ? "active" : "")}
                  key={item}
                  onClick={() => onImgItemClick(index)}
                >
                  <img src={item} alt="" />
                  <div className="cover"></div>
                </div>
              );
            })}
          </Indicator>
        </div>
      </div>
    </BrowserWrapper>
  );
});

PictureBrowser.propTypes = {
  list: PropTypes.array,
};

export default PictureBrowser;
