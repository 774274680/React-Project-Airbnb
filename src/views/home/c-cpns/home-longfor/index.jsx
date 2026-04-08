import React, { memo } from "react";
import { LongforWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import PropTypes from "prop-types";
import LongforItem from "@/components/longfor-item";
import ScrollView from "@/base-ui/scroll-view";

const HomeLongfor = memo((props) => {
  const { info } = props;
  return (
    <LongforWrapper>
      <SectionHeader title={info.title} subtitle={info.subtitle} />
      <div className="list">
        <ScrollView>
          {info.list.map((item) => {
            return <LongforItem key={item.city} itemData={item} />;
          })}
        </ScrollView>
      </div>
    </LongforWrapper>
  );
});

HomeLongfor.propTypes = {
  info: PropTypes.object,
};

export default HomeLongfor;
