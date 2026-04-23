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
`;
