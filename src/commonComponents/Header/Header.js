import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import Wrapper from "./styles/Wrapper";

export function Header() {
  const history = useHistory();
  const location = useLocation();

  return (
    <Wrapper>
      {location.pathname !== "/" ? (
        <ion-icon name="arrow-back-outline" onClick={history.goBack} />
      ) : (
        ""
      )}
      CINEFLEX
    </Wrapper>
  );
}
