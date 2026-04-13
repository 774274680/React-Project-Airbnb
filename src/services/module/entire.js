import hyRequest from "../request";

export function getEntireListData(start = 0, limit = 20) {
  return hyRequest.get({
    url: `/entire/list?offset=${start}&size=${limit}`,
  });
}
