import styled from "styled-components";

export const ItemWrapper = styled.div`
  padding: 5px;
  width: ${(props) => props.width};
  flex-shrink: 0;

  .swiper {
    position: relative;
    /* &:hover {
      .left {
        background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
      }
      .right {
        background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
      }
    } */
    &:hover {
      .control {
        display: flex;
      }
    }

    .control {
      display: none;
      .btn {
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: 9;
        width: 83px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        cursor: pointer;
        &.left {
          left: 0;
          background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
        }
        &.right {
          right: 0;
          background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
        }
      }
    }
    .indicator {
      position: absolute;
      bottom: 10px;
      left: 0;
      right: 0;
      z-index: 9;
      width: 30%;
      margin: 0 auto;
      .indicator-item {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #fff;
        margin-right: 10px;
        &.active {
          width: 10px;
          height: 10px;
          background-color: #7a7a7a;
        }
      }
    }
  }

  .cover {
    position: relative;
    padding: 66% 0 0;
    overflow: hidden;
    img {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      object-fit: cover;
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
