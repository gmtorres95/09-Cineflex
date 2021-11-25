import axios from "axios";

import * as URL from "./apiURL";
import showAlert from "../helper/showAlert";

export default function getSeats(sessionId, setSession) {
  axios.get(`${URL}/showtimes/${sessionId}/seats`)
    .then((resp) => setSession(resp.data))
    .catch(() => {
      showAlert({
        title: "Erro no servidor!",
        text: "Tente novamente",
        showConfirmButton: true,
        timer: 0,
  })});
}
