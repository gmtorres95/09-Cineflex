import styled from "styled-components";

export default styled.input`
  width: 100%;
  max-width: 380px;
  height: 51px;
  margin-bottom: 8px;
  padding: 0px 18px;
  border-radius: 3px;
  border: 1px solid #d4d4d4;
  box-sizing: border-box;
  font-size: 18px;

  &::placeholder {
    color: #afafaf;
    font-style: italic;
  }
`;
