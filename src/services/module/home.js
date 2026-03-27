import hyRequest from "../request";

export function getGoodPriceData() {
  return hyRequest.get({
    url: "/home/goodprice",
  });
}

export function getHighScoreData() {
  return hyRequest.get({
    url: "/home/highscore",
  });
}
