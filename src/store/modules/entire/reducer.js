import {
  ADD_NUM,
  SUB_NUM,
  CHANGE_ROOMLIST,
  CHANGE_TOTAL_COUNT,
  CHANGE_CURRENT_PAGE,
} from "./constants";

const initialState = {
  // counter: 10,
  roomList: [],
  totalCount: 0,
  currentPage: 0,
};
function reducer(state = initialState, actions) {
  switch (actions.type) {
    case ADD_NUM:
      return { ...state, counter: state.counter + actions.num };
    case SUB_NUM:
      return { ...state, counter: state.counter - actions.num };
    case CHANGE_ROOMLIST:
      return { ...state, roomList: actions.roomList };
    case CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: actions.totalCount };
    case CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: actions.page };
    default:
      return state;
  }
}

export default reducer;
