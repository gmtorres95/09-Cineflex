import axios from "axios";

import * as URL from "./apiURL";
import showAlert from "../helper/showAlert";

export default function getShowtimes(movieId, setMovie) {
  axios.get(`${URL}/movies/${movieId}/showtimes`)
    .then((resp) => setMovie(resp.data))
    .catch(() => {
      showAlert({
        title: "Erro no servidor!",
        text: "Tente novamente",
        showConfirmButton: true,
        timer: 0,
  })});
}
