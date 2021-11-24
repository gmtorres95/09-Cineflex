import React from "react";

import Wrapper from "./LegendWrapper";

export default function Legend() {
  return (
    <Wrapper>
      <div>
        <li />
        <span>Selecionado</span>
      </div>

      <div>
        <li />
        <span>Disponível</span>
      </div>
      
      <div>
        <li />
        <span>Indisponível</span>
      </div>
    </Wrapper>
  );
}
