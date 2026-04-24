import React, { memo, useState } from "react";
import { PicturesWrapper } from "./style";
import { shallowEqual, useSelector } from "react-redux";
import PictureBrowser from "@/base-ui/picture-browser";

const DetailPictures = memo(() => {
  const { detailInfo } = useSelector((state) => {
    return {
      detailInfo: state.entire.detailInfo,
    };
  }, shallowEqual);

  const [isShowPic, setIsShowPic] = useState(false);

  return (
    <PicturesWrapper>
      <div className="left">
        <div className="room-item">
          <img src={detailInfo.picture_urls?.[0]} alt="" />
          <div className="cover"></div>
        </div>
      </div>
      <div className="right">
        {detailInfo.picture_urls?.slice(1, 5).map((item) => {
          return (
            <div className="room-item" key={item}>
              <img src={item} alt="" />
              <div className="cover"></div>
            </div>
          );
        })}
      </div>
      <div className="show-picture" onClick={() => setIsShowPic(true)}>
        显示照片
      </div>

      {isShowPic && (
        <PictureBrowser list={detailInfo.picture_urls} closeClick={() => setIsShowPic(false)} />
      )}
    </PicturesWrapper>
  );
});

export default DetailPictures;
