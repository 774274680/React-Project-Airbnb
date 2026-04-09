import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { fetchHomeDataAction } from "@/store/modules/home";
import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import { isEmptyO } from "@/utils";
import HomeLongfor from "./c-cpns/home-longfor";
import HomeSectionV3 from "./c-cpns/home-section-v3";

const Home = memo(() => {
  const dispatch = useDispatch();
  /** redux数据 */
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo, plusInfo } =
    useSelector((state) => {
      return {
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo,
        discountInfo: state.home.discountInfo,
        recommendInfo: state.home.recommendInfo,
        longforInfo: state.home.longforInfo,
        plusInfo: state.home.plusInfo,
      };
    }, shallowEqual);

  /** 发送网络请求 */
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="container">
        {isEmptyO(discountInfo) && <HomeSectionV2 info={discountInfo} />}
        {isEmptyO(recommendInfo) && <HomeSectionV2 info={recommendInfo} />}
        {isEmptyO(longforInfo) && <HomeLongfor info={longforInfo} />}
        {isEmptyO(goodPriceInfo) && <HomeSectionV1 info={goodPriceInfo} />}
        {isEmptyO(highScoreInfo) && <HomeSectionV1 info={highScoreInfo} />}
        {isEmptyO(plusInfo) && <HomeSectionV3 info={plusInfo} />}
      </div>
    </HomeWrapper>
  );
});

export default Home;
