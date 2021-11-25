import styled, { keyframes } from "styled-components";
import { pulse } from 'react-animations';

const pulseAnimation = keyframes`${pulse}`;

export default styled.header`
  height: 68px;
  width: 100%;
  background-color: #C3CFD9;
  font-size: 34px;
  color: #E8833A;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;

  ion-icon {
    position: fixed;
    left: 16px;
  }

  a {
    color: inherit;
  }

  a:active {
    filter: brightness(1.25);
    animation: 0.2s ${pulseAnimation};
  }
`;
