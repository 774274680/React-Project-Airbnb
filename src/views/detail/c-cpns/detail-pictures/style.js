import styled from "styled-components";

export const PicturesWrapper = styled.div`
  display: flex;
  .left {
    width: 50%;
    .room-item {
      width: 100%;
    }
  }
  .right {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    .room-item {
      width: 49.9%;
      img {
        border: 1px solid;
      }
    }
  }
  .room-item {
    overflow: hidden;
    position: relative;
    .cover {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      /* background-color: rgba(0, 0, 0, 0.2); */
    }
  }
  img {
    width: 100%;
    cursor: pointer;
    transition: transform 200ms ease;
    &:hover {
      transform: scale(1.3);
    }
  }
`;
