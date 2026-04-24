import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  position: relative;
  overflow: hidden;
  .i-list {
    display: flex;
    align-items: center;
    white-space: nowrap;
    /* overflow: hidden; */
    transition: transform 200ms ease;
    > * {
      flex-shrink: 0;
    }
  }
`;
