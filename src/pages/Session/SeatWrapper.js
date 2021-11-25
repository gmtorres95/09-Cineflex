import styled, { keyframes } from "styled-components";
import { rubberBand } from "react-animations";

const rubberBandAnimation = keyframes`${rubberBand}`;

export default styled.li`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  margin: 8px 4px;
  font-size: 11px;
  font-weight: 500;
  color: #293845;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isSelected ? "#8DD7CF" : props.isAvailable ? "#C3CFD9" : "#FBE192"};
  border: 1px solid
    ${(props) =>
      props.isSelected ? "#45BDB0" : props.isAvailable ? "#808F9D" : "#F7C52B"};
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    animation: 0.2s ${rubberBandAnimation};  
  }
`;
