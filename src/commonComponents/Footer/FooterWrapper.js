import styled, { keyframes } from "styled-components";
import { slideInUp } from "react-animations";

const slideAnimation = keyframes`${slideInUp}`;

export default styled.footer`
  width: 100%;
  height: 116px;
  border: 1px solid #9EADBA;
  background-color: #DFE6ED;
  font-size: 26px;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  animation: 1s ${slideAnimation};
  transition: all 1s linear;
`;
