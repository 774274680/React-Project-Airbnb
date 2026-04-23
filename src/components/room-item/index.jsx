import React, { memo, useRef, useState } from "react";
import { Carousel } from "antd";
import PropTypes from "prop-types";
import Rating from "@mui/material/Rating";

import { ItemWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon_arrow_left";
import IconArrowRight from "@/assets/svg/icon_arrow_right";
import Indicator from "@/base-ui/indicator";
import classNames from "classnames";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%", itemClick } = props;
  const carousel_ref = useRef();
  const [selectIndex, setSelectIndex] = useState(0);

  function controlClickHandle(isRight = true) {
    isRight ? carousel_ref.current.next() : carousel_ref.current.prev();

    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1;
    const picsLength = itemData.picture_urls.length;
    if (newIndex < 0) newIndex = picsLength - 1;
    if (newIndex >= picsLength) newIndex = 0;
    setSelectIndex(newIndex);
  }

  function onSliderItemImgClick() {
    // console.log(props.itemData);
    // navigate("/detail");
    itemClick && itemClick(props.itemData);
  }

  const swiperEl = (
    <div className="swiper">
      <div className="control">
        <div className="btn left" onClick={() => controlClickHandle(false)}>
          <IconArrowLeft width={30} height={30} />
        </div>
        <div className="btn right" onClick={() => controlClickHandle(true)}>
          <IconArrowRight width={32} height={32} />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData.picture_urls?.map((item, index) => {
            return (
              <div
                className={classNames(["indicator-item", index === selectIndex ? "active" : ""])}
                key={index}
              ></div>
            );
          })}
        </Indicator>
      </div>
      <Carousel ref={carousel_ref} dots={false}>
        {itemData.picture_urls?.map((item) => {
          return (
            <div className="cover" key={item} onClick={onSliderItemImgClick}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
  const commonEl = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  );

  return (
    <ItemWrapper width={itemWidth}>
      {/* 无轮播图情况 */}
      {/* 有轮播图情况 */}
      {itemData.picture_urls ? swiperEl : commonEl}

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
