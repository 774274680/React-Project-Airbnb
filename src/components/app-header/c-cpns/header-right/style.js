import styled from "styled-components";

export const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  flex: 1;
  font-weight: 600;

  .btns {
    display: flex;
    .btn {
      cursor: pointer;
      padding: 12px 15px;
      border-radius: 22px;
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
  .profile {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-right: 24px;
    width: 77px;
    height: 42px;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow}
  }
`;
