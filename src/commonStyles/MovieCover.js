import styled from "styled-components";

export default styled.img`
  width: 100%;
  height: 100%;
  padding: ${(props) => (props.footer ? "2px" : "4px")};
  border-radius: ${(props) => (props.footer ? "4px" : "8px")};
  object-fit: cover;
`;
