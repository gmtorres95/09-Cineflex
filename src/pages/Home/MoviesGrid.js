import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";

const pulseAnimation = keyframes`${pulse}`;

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  a {
    width: 144px;
    height: 208px;
    margin: 12px 0px;
    border-radius: 4px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  a:active, a:hover {
    animation: 0.2s ${pulseAnimation};
  }
`;
