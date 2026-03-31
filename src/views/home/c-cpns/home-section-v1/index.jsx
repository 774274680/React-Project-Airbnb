import React, { memo } from "react";

import PropTypes from "prop-types";

import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionFooter from "@/components/section-footer";
import { SectionV1Wrapper } from "./style";

const HomeSectionV1 = memo((props) => {
  const { info } = props;
  return (
    <SectionV1Wrapper>
      <SectionHeader title={info.title} subtitle={info.subtitle} />
      <SectionRooms list={info.list} />
      <SectionFooter />
    </SectionV1Wrapper>
  );
});

HomeSectionV1.prop_types = {
  info: PropTypes.object,
};

export default HomeSectionV1;
