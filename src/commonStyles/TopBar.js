import styled from "styled-components";

export default styled.div`
  height: 110px;
  font-size: 24px;
  font-weight: ${(props) => (props.success ? '700' : '400')};
  color: ${(props) => (props.success ? '#247A6B' : '#293845')};
  padding: ${(props) => (props.success ? '0px 80px' : '0px')};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 28px;
`;
