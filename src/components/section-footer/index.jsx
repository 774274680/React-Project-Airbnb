import PropTypes from "prop-types";
import React, { memo } from "react";
import { FooterWrapper } from "./style";
import IconArrowRight from "@/assets/svg/icon_arrow_right";
import { useNavigate } from "react-router-dom";

const SectionFooter = memo((props) => {
  const navigate = useNavigate();
  const { name } = props;
  let message = "";
  if (name) {
    message = `显示更多${name}房源`;
  } else {
    message = "显示全部";
  }

  function handleMoreClick() {
    navigate("/entire");
  }

  return (
    <FooterWrapper color={name ? "#00848a" : "#000"}>
      <div className="info" onClick={handleMoreClick}>
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
