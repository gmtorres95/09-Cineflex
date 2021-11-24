import Cover from "./styles/Cover";
import Wrapper from "./styles/Wrapper";

export function Footer({ src, title, day }) {
  return (
    <Wrapper>
      <Cover>
        <img src={src} alt={title} />
      </Cover>
      <div>
        <p>{title}</p>
        <p>{day}</p>
      </div>
    </Wrapper>
  );
}
