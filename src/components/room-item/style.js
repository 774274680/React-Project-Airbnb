import styled from "styled-components";

export const ItemWrapper = styled.div`
  padding: 5px;
  flex: ${(props) => props.width};
  flex-shrink: 0;
  .cover {
    position: relative;
    padding: 66% 8px 0;
    overflow: hidden;
    img {
      position: absolute;
      top: 0;
      width: 100%;
      /* height: 222px; */
      height: 100%;
      border-radius: 5px;
    }
  }
  .verify {
    margin: 8px 0;
  }
  .name {
    height: 48px;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
    display: -webkit-box; /* 弹性盒子模型 */
    -webkit-box-orient: vertical; /* 垂直排列 */
    -webkit-line-clamp: 2; /* 限制显示4行 */
    overflow: hidden; /* 隐藏溢出内容 */
    text-overflow: ellipsis; /* 省略号 */
    margin-bottom: 8px;
  }
  .price {
    margin-bottom: 8px;
  }
  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
  }
`;
