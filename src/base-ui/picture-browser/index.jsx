import PropTypes from "prop-types";
import React, { memo, useEffect } from "react";
import { BrowserWrapper } from "./style";
import IconClose from "@/assets/svg/icon_close";
import IconArrowLeft from "@/assets/svg/icon_arrow_left";
import IconArrowRight from "@/assets/svg/icon_arrow_right";

const PictureBrowser = memo((props) => {
  const { closeClick } = props;
  const iconWidth = 50;
  const iconHeight = 50;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  function onCloseClick() {
    closeClick();
  }

  return (
    <BrowserWrapper>
      <div className="close-btn" onClick={onCloseClick}>
        <IconClose />
      </div>
      <div className="control">
        <div className="control-item icon-left">
          <IconArrowLeft width={iconWidth} height={iconHeight} />
        </div>
        <div className="control-item icon-right">
          <IconArrowRight width={iconWidth} height={iconHeight} />
        </div>
      </div>
    </BrowserWrapper>
  );
});

PictureBrowser.propTypes = {};

export default PictureBrowser;
