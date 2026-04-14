import { getEntireListData } from "@/services/module/entire";
import {
  ADD_NUM,
  CHANGE_CURRENT_PAGE,
  CHANGE_IS_LOADING,
  CHANGE_ROOMLIST,
  CHANGE_TOTAL_COUNT,
  SUB_NUM,
} from "./constants";

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

export function changeCurrentPageAction(page) {
  return { type: CHANGE_CURRENT_PAGE, page };
}

export function changeIsLoadingAction(isLoading) {
  return { type: CHANGE_IS_LOADING, isLoading };
}

export function fetchEntireListAction(page = 1) {
  return async (dispatch) => {
    dispatch(changeIsLoadingAction(true));
    dispatch(changeCurrentPageAction(page));
    const start = (page - 1) * 20;
    const res = await getEntireListData(start);
    dispatch(changeIsLoadingAction(false));
    dispatch(changeTotalCountAction(res.totalCount));
    dispatch(changeRoomListAction(res.list));
  };
}
