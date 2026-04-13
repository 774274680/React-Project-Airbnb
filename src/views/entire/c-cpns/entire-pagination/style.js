import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0;
  .Mui-selected {
    background-color: #222222 !important;
    color: #fff;
    &:hover {
      text-decoration: underline;
    }
  }
`;
