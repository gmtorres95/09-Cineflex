import styled from "styled-components";

export default styled.img`
  width: ${(props) => (props.footer ? '56px' : '136px')};
  height: ${(props) => (props.footer ? '84px' : '200px')};
  border-radius: 4px;
  object-fit: cover;
`;
