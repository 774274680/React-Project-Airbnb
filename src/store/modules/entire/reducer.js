import { ADD_NUM, SUB_NUM } from "./constants";

const initialState = {
  counter: 10,
};
function reducer(state = initialState, actions) {
  switch (actions.type) {
    case ADD_NUM:
      return { ...state, counter: state.counter + actions.num };
    case SUB_NUM:
      return { ...state, counter: state.counter - actions.num };
    default:
      return state;
  }
}

export default reducer;
