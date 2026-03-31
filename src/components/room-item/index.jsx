import React, { memo } from "react";
import PropTypes from "prop-types";
import Rating from "@mui/material/Rating";

import { ItemWrapper } from "./style";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props;
  return (
    <ItemWrapper width={itemWidth}>
      <div className="cover">
        <img src={itemData.picture_url} alt="" />
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
