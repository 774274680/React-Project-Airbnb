import hyRequest from "../request";

export function getGoodPriceData() {
  return hyRequest.get({
    url: "/home/goodprice",
  });
}
