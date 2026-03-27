import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { fetchHomeDataAction } from "@/store/modules/home";
import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner";
import HomeSectionV1 from "./c-cpns/home-section-v1";

const Home = memo(() => {
  const dispatch = useDispatch();
  const { goodPriceInfo, highScoreInfo } = useSelector((state) => {
    return {
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
    };
  }, shallowEqual);

  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="container">
        <HomeSectionV1 info={goodPriceInfo} />
        <HomeSectionV1 info={highScoreInfo} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
