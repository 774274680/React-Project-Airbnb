import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { fetchGoodPriceAction } from "@/store/modules/home";
import SectionHeader from "@/components/section-header";

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
          <div className="room-list">
            {goodPriceInfo.list?.map((item) => {
              return (
                <div key={item.id} className="room-item">
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
