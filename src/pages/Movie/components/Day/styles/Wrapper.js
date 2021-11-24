import styled from "styled-components";

export default styled.div`
  height: 85px;
  margin-bottom: 22px;
  font-size: 20px;
  color: #293845;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &>div {
    display: flex;
  }

  a {
    width: 83px;
    height: 43px;
    border-radius: 3px;
    margin-right: 9px;
    background-color: #e8833a;
    color: #ffffff;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
