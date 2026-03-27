import React, { memo } from "react";
import PropTypes from "prop-types";

import { ItemWrapper } from "./style";

const RoomItem = memo((props) => {
  const { itemData } = props;
  return (
    <ItemWrapper>
      <div className="cover">
        <img src={itemData.picture_url} alt="" />
      </div>
      <div className="verify" style={{ color: itemData.verify_info.text_color }}>
        {itemData.verify_info.messages.join("·")}
      </div>
      <div className="name">{itemData.name}</div>
      <div className="price">{itemData.price_format + "/晚"}</div>
      <div className="bottom">
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
