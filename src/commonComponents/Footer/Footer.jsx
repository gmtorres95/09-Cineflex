import React from "react";

import Cover from "./styles/Cover";
import Wrapper from "./styles/Wrapper";
import MovieCover from "../../commonStyles/MovieCover";

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
