import Loader from 'react-loader-spinner';

import Wrapper from './Wrapper';

export default function Loading({ footer }) {
  return (
    <Wrapper>
      <Loader
        type={footer ? "Grid" : "Oval"}
        width={footer ? "52px" : "120px"}
        height={footer ? "76px" : "120px"}
        color={footer ? "#293845" : "#E8833A"}
      />
    </Wrapper>
  );
}
