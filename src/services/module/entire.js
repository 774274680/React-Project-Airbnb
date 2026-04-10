import hyRequest from "../request";

export function getEntireListData() {
  return hyRequest.get({
    url: "/entire/list?offset=0&size=20",
  });
}
