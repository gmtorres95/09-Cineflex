import React from "react";

import MovieCover from "../../commonStyles/MovieCover";
import Wrapper from "./FooterWrapper";
import Cover from "./Cover";

export default function Footer({ src, title, day }) {
  return (
    <Wrapper>
      <Cover>
        <MovieCover footer src={src} alt={title} />
      </Cover>
      <div>
        <p>{title}</p>
        <p>{day}</p>
      </div>
    </Wrapper>
  );
}
