import React, { memo } from "react";
import PropTypes from "prop-types";

import { RoomsWrapper } from "./style";
import RoomItem from "@/components/room-item";

const SectionRooms = memo((props) => {
  const { list } = props;
  return (
    <RoomsWrapper>
      {list?.slice(0, 8).map((item) => {
        return <RoomItem key={item.id} itemData={item} />;
      })}
    </RoomsWrapper>
  );
});

SectionRooms.prop_types = {
  list: PropTypes.array,
};

export default SectionRooms;
