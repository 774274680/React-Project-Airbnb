import styled from "styled-components";

export const ViewWrapper = styled.div`
  position: relative;
  /* display: flex; */
  .control {
    .control-item {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 9;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.14);
      cursor: pointer;
      &.right {
        right: -14px;
      }
      &.left {
        left: -14px;
      }
    }
  }
  .scroll {
    position: relative;
    overflow: hidden;
    .scroll-content {
      display: flex;
      transition: all 200ms ease;
    }
  }
`;
