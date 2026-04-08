import React, { memo } from "react";
import { ItemWrapper } from "./style";
import PropTypes from "prop-types";

const LongforItem = memo((props) => {
  const { itemData } = props;
  return (
    <ItemWrapper>
      <div className="item-inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="mask"></div>
        <div className="info">
          <div className="city">{itemData.city}</div>
          <div className="price">均价 {itemData.price}</div>
        </div>
      </div>
    </ItemWrapper>
  );
});

LongforItem.propTypes = {
  itemData: PropTypes.object,
};

export default LongforItem;
