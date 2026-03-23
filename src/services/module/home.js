import hyRequest from "../request";

export function getHighScoreData() {
  return hyRequest.get({
    url: "/home/highscore",
  });
}
