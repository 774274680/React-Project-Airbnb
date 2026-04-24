import styled from "styled-components";

export const BrowserWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  background-color: #333333;
  .close-btn {
    position: absolute;
    right: 20px;
    top: 10px;
    cursor: pointer;
  }

  .control {
    .control-item {
      position: fixed;
      top: 50%;
      font-size: 20px;
      color: #fff;
      cursor: pointer;
    }
    .icon-left {
      left: 10px;
    }
    .icon-right {
      right: 10px;
    }
  }
  .main-content {
    width: 50%;
    margin: 50px auto 20px;
    .pic {
      position: relative;
      /* width: 600px;
      height: 600px; */
      height: 650px;
      margin-bottom: 10px;
      overflow: hidden;
      img {
        position: absolute;
        width: 100%;
        object-fit: fill;
      }
    }
    .pic-info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      color: #fff;
      font-size: 13px;
      margin-bottom: 8px;
    }
    .pic-list {
      /* display: flex; */
      /* height: 100px; */
      /* overflow: hidden; */
      .pic-list-item {
        position: relative;
        flex-shrink: 0;
        margin-right: 10px;
        width: 14%;
        &.active {
          .cover {
            background-color: transparent;
          }
        }
        img {
          height: 100%;
          width: 100%;
          object-fit: fill;
        }
        .cover {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          background-color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  /* 动画的样式 */
  .pic-img-enter {
    transform: translateX(100%);
    opacity: 0;
  }

  .pic-img-enter-active {
    z-index: 9;
    transform: translate(0);
    opacity: 1;
    transition: all 200ms ease;
  }

  .pic-img-exit {
    opacity: 1;
  }

  .pic-img-exit-active {
    opacity: 0;
    transition: all 200ms ease;
  }
`;
