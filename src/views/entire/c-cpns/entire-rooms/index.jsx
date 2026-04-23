import React, { memo, useCallback } from "react";
import { RoomsWrapper } from "./style";
import RoomItem from "@/components/room-item";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeDetailInfoAction } from "@/store/modules/entire";

const EntireRooms = memo(() => {
  const {
    roomList = [],
    totalCount,
    isLoading,
  } = useSelector((state) => {
    return {
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading,
    };
  }, shallowEqual);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onItemClick = useCallback(
    (itemData) => {
      dispatch(changeDetailInfoAction(itemData));
      navigate("/detail");
    },
    [navigate, dispatch],
  );

  return (
    <RoomsWrapper>
      <div className="total">{totalCount}多处住所</div>
      <div className="list">
        {roomList.map((item) => {
          return <RoomItem key={item.id} itemWidth="20%" itemData={item} itemClick={onItemClick} />;
        })}
      </div>
      {isLoading && <div className="cover"></div>}
    </RoomsWrapper>
  );
});

export default EntireRooms;
