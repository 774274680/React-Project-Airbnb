import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: ${(props) => props.color};
  .info {
    .text {
      font-size: 17px;
      font-weight: 700;
      cursor: pointer;
      margin-right: 5px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
