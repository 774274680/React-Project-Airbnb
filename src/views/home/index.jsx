import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { fetchGoodPriceAction } from "@/store/modules/home";
import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";

const Home = memo(() => {
  const dispatch = useDispatch();
  const { goodPriceInfo } = useSelector((state) => {
    return {
      goodPriceInfo: state.home.goodPriceInfo,
    };
  }, shallowEqual);

  useEffect(() => {
    dispatch(fetchGoodPriceAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="container">
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title} />
          <SectionRooms list={goodPriceInfo.list} />
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
