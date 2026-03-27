import styled from "styled-components";

export const ItemWrapper = styled.div`
  padding: 5px;
  width: 25%;
  .cover {
    overflow: hidden;
    img {
      width: 100%;
      height: 163px;
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
