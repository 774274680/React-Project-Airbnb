import styled from "styled-components";

export const TabsWrapper = styled.div`
  .list {
    display: flex;
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 120px;
      padding: 14px 16px;
      border: 1px solid #d8d8d8;
      border-radius: 5px;
      cursor: pointer;
      margin-right: 15px;
      white-space: nowrap;
      &.active {
        background-color: #00848a;
        color: #fff;
      }
    }
  }
`;
