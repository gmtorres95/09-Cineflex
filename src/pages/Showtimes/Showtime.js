import styled, { keyframes } from "styled-components";
import { pulse } from 'react-animations';

const pulseAnimation = keyframes`${pulse}`;

export default styled.div`
  display: flex;

  a {
    width: 84px;
    height: 44px;
    border-radius: 4px;
    margin-right: 12px;
    background-color: #E8833A;
    color: #FFF;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a:active, a:hover {
    animation: 0.2s ${pulseAnimation};
  }
`;
