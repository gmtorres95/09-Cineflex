import styled from "styled-components";

export default styled.li`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  margin: 8px 4px;
  font-size: 11px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isSelected ? "#8DD7CF" : props.isAvailable ? "#C3CFD9" : "#FBE192"};
  border: 1px solid
    ${(props) =>
      props.isSelected ? "#45BDB0" : props.isAvailable ? "#808F9D" : "#F7C52B"};
`;
