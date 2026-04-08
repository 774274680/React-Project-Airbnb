import styled from "styled-components";

export const TabsWrapper = styled.div`
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 16px;
    border: 1px solid #d8d8d8;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 15px;
    white-space: nowrap;
    font-size: 17px;
    flex-basis: 120px;
    flex-shrink: 0;
    &.active {
      background-color: #00848a;
      color: #fff;
    }
  }
`;
