import React, { memo } from "react";
import { RoomsWrapper } from "./style";
import RoomItem from "@/components/room-item";
import { shallowEqual, useSelector } from "react-redux";

const EntireRooms = memo(() => {
  const { roomList = [], totalCount } = useSelector((state) => {
    return {
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
    };
  }, shallowEqual);

  return (
    <RoomsWrapper>
      <div className="total">{totalCount}多处住所</div>
      <div className="list">
        {roomList.map((item) => {
          return <RoomItem key={item.id} itemWidth="20%" itemData={item} />;
        })}
      </div>
    </RoomsWrapper>
  );
});

export default EntireRooms;
