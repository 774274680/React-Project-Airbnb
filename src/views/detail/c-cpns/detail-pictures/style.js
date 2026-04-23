import styled from "styled-components";

export const PicturesWrapper = styled.div`
  display: flex;

  &:hover {
    .cover {
      opacity: 1 !important;
    }
  }

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
      background-color: rgba(0, 0, 0, 0.2);
      opacity: 0;
      cursor: pointer;
      transition: opacity 200ms ease;
    }
    &:hover {
      .cover {
        opacity: 0 !important;
      }
      img {
        transform: scale(1.08);
      }
    }
  }
  img {
    width: 100%;
    transition: transform 200ms ease;
  }
`;
