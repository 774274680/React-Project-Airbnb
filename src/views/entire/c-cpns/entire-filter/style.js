import styled from "styled-components";

export const FilterWrapper = styled.div`
  .filter-list {
    display: flex;
    border: 1px solid #eee;
    padding: 10px 15px;
    .item {
      padding: 8px 15px;
      border: 1px solid #eee;
      border-radius: 2px;
      margin-right: 15px;
      cursor: pointer;
      &.active {
        background-color: #00848a;
        color: #fff;
      }
    }
  }
`;
