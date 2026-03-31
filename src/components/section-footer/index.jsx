import PropTypes from "prop-types";
import React, { memo } from "react";
import { FooterWrapper } from "./style";
import IconArrowRight from "@/assets/svg/icon_arrow_right";

const SectionFooter = memo((props) => {
  const { name } = props;
  let message = "";
  if (name) {
    message = `显示更多${name}房源`;
  } else {
    message = "显示全部";
  }
  return (
    <FooterWrapper color={name ? "#00848a" : "#000"}>
      <div className="info">
        <span className="text">{message}</span>
        <IconArrowRight />
      </div>
    </FooterWrapper>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string,
};

export default SectionFooter;
