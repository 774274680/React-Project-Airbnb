import React, { memo, useRef } from "react";
import { Carousel } from "antd";
import PropTypes from "prop-types";
import Rating from "@mui/material/Rating";

import { ItemWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon_arrow_left";
import IconArrowRight from "@/assets/svg/icon_arrow_right";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props;
  const carousel_ref = useRef();

  function controlClickHandle(isRight = true) {
    isRight ? carousel_ref.current.next() : carousel_ref.current.prev();
  }

  return (
    <ItemWrapper width={itemWidth}>
      {/* 无轮播图情况 */}
      {/* <div className="cover">
        <img src={itemData.picture_url} alt="" />
      </div> */}
      {/* 有轮播图情况 */}
      <div className="swiper">
        <div className="control">
          <div className="btn left" onClick={() => controlClickHandle(false)}>
            <IconArrowLeft width={30} height={30} />
          </div>
          <div className="btn right" onClick={() => controlClickHandle(true)}>
            <IconArrowRight width={32} height={32} />
          </div>
        </div>
        <Carousel ref={carousel_ref}>
          {itemData.picture_urls?.map((item) => {
            return (
              <div className="cover" key={item}>
                <img src={item} alt="" />
              </div>
            );
          })}
        </Carousel>
      </div>

      <div className="verify" style={{ color: itemData.verify_info.text_color }}>
        {itemData.verify_info.messages.join("·")}
      </div>
      <div className="name">{itemData.name}</div>
      <div className="price">{itemData.price_format + "/晚"}</div>
      <div className="bottom">
        <span className="rating">
          <Rating
            name="read-only"
            size="small"
            value={3.5}
            precision={0.5}
            readOnly
            sx={{ fontSize: "13px" }}
          />
        </span>
        <span
          style={{
            fontSize: itemData.bottom_info?.["font-size"],
            color: itemData.bottom_info?.content_color,
          }}
        >
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <span className="extra"> {"·" + itemData.bottom_info.content}</span>
          )}
        </span>
      </div>
    </ItemWrapper>
  );
});

RoomItem.prop_types = {
  itemData: PropTypes.object,
};

export default RoomItem;
