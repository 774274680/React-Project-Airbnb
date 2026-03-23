import React, { memo } from "react";
import { LeftWrapper } from "./style";
import IconSvg from "@/assets/svg/icon_svg";

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <div className="logo">
        <IconSvg />
      </div>
    </LeftWrapper>
  );
});

export default HeaderLeft;
