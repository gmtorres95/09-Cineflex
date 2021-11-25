import styled from "styled-components";

export default styled.div`
  width: 100%;
  max-width: 372px;
  margin: 16px auto 32px;
  display: flex;
  justify-content: space-evenly;
  font-size: 13px;
  color: #4E5A65;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    width: 24px;
    height: 24px;
    border-radius: 12px;
    background-color: #C3CFD9;
    border: 1px solid #808F9D;
    list-style-type: none;
  }

  div:first-child li {
    background-color: #8DD7CF;
    border: 1px solid #45BDB0;
  }

  div:last-child  li{

    background-color: #FBE192;
    border: 1px solid #F7C52B;
  }
`;
