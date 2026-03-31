import React, { memo, useState, useCallback } from "react";
import { SectionV2Wrapper } from "./style";
import PropTypes from "prop-types";
import SectionHeader from "@/components/section-header";
import SectionTabs from "@/components/section-tabs";
import SectionRooms from "@/components/section-rooms";
import SectionFooter from "@/components/section-footer";

const HomeSectionV2 = memo((props) => {
  const { info } = props;
  const tabNames = info.dest_address?.map((item) => item.name);
  const [name, setName] = useState(tabNames?.[0]);

  const tabClickHandle = useCallback((item) => {
    setName(item);
  }, []);

  return (
    <SectionV2Wrapper>
      <SectionHeader title={info.title} subtitle={info.subtitle} />
      <SectionTabs list={tabNames} tabClick={tabClickHandle} />
      <SectionRooms list={info.dest_list?.[name]} itemWidth="33.333%" />
      <SectionFooter name={name} />
    </SectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {
  info: PropTypes.object,
};

export default HomeSectionV2;
