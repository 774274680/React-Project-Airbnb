import React, { memo } from "react";
import { CenterWrapper } from "./style";
import IconSearch from "@/assets/svg/icon_search";

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className="text">搜索房源和体验</div>
      <div className="search">
        <IconSearch />
      </div>
    </CenterWrapper>
  );
});

export default HeaderCenter;
