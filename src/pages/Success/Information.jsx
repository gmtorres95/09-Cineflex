import React from "react";

import Wrapper from "./InformationWrapper";

export default function Information(props) {
  const {
    head,
    description
  } = props;

  return (
    <Wrapper>
      <h1>{head}</h1>
      {description.map((text, i) => (<p key={i}>{text}</p>))}
    </Wrapper>
  );
}
