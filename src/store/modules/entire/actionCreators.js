import { getEntireListData } from "@/services/module/entire";
import { ADD_NUM, CHANGE_ROOMLIST, CHANGE_TOTAL_COUNT, SUB_NUM } from "./constants";

export function addNumberAction(num) {
  return { type: ADD_NUM, num };
}

export function subNumberAction(num) {
  return { type: SUB_NUM, num };
}

export function changeRoomListAction(roomList) {
  return { type: CHANGE_ROOMLIST, roomList };
}

export function changeTotalCountAction(totalCount) {
  return { type: CHANGE_TOTAL_COUNT, totalCount };
}

export function fetchEntireListAction() {
  return async (dispatch) => {
    console.log("dispatch=>", dispatch);
    const res = await getEntireListData();
    dispatch(changeTotalCountAction(res.totalCount));
    dispatch(changeRoomListAction(res.list));
  };
}
