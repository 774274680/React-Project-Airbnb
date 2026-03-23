import { ADD_NUM, SUB_NUM } from "./constants";

export function addNumberAction(num) {
  return { type: ADD_NUM, num };
}

export function subNumberAction(num) {
  return { type: SUB_NUM, num };
}
