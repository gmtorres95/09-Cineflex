import styled from "styled-components";

export default styled.img`
  width: ${(props) => (props.footer ? '48px' : '128px')};
  height: ${(props) => (props.footer ? '72px' : '192px')};
  object-fit: cover;
`;
