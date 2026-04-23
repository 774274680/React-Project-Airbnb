import React, { memo } from "react";
import { LeftWrapper } from "./style";
import IconSvg from "@/assets/svg/icon_svg";
import { useNavigate } from "react-router-dom";

const HeaderLeft = memo(() => {
  const navigate = useNavigate();
  function onLogoClickHandle() {
    navigate("/home");
  }
  return (
    <LeftWrapper>
      <div className="logo" onClick={onLogoClickHandle}>
        <IconSvg />
      </div>
    </LeftWrapper>
  );
});

export default HeaderLeft;
