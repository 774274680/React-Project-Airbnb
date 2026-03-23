import styled from "styled-components";

export const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 25px;
  height: 48px;
  padding: 0 8px;
  font-size: 16px;
  cursor: pointer;

  ${(props) => props.theme.mixin.boxShadow}

  .text {
    margin-left: 10px;
    font-weight: 600;
  }
  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.color.primaryColor};
    color: #fff;
  }
`;
