import styled from "styled-components";

export const RoomsWrapper = styled.div`
  position: relative;
  .total {
    display: flex;
    align-items: center;
    font-size: 22px;
    font-weight: 700;
    color: #000;
    padding: 10px 20px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .cover {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;
