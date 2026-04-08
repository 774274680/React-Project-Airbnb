import styled from "styled-components";

export const ItemWrapper = styled.div`
  padding: 8px;
  flex: 20%;
  flex-shrink: 0;
  .item-inner {
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    .cover {
      img {
        width: 100%;
      }
    }
    .mask {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 30%;
      background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%);
    }
    .info {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;
      /* justify-content: center; */
      .city {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 8px;
      }
    }
  }
`;
