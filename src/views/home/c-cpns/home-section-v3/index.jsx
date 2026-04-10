import React, { memo } from "react";
import { SectionV3Wrapper } from "./style";
import PropTypes from "prop-types";
import SectionHeader from "@/components/section-header";
import ScrollView from "@/base-ui/scroll-view";
import RoomItem from "@/components/room-item";
import SectionFooter from "@/components/section-footer";

const HomeSectionV3 = memo((props) => {
  const { info } = props;
  return (
    <SectionV3Wrapper>
      <SectionHeader title={info.title} subtitle={info.subtitle} />
      <div className="list">
        <ScrollView>
          {info.list.map((item) => {
            return <RoomItem key={item.id} itemData={item} itemWidth="20%" />;
          })}
        </ScrollView>
      </div>
      <SectionFooter name="plus" />
    </SectionV3Wrapper>
  );
});

HomeSectionV3.propTypes = {
  info: PropTypes.object,
};

export default HomeSectionV3;
