import axios from "axios";

import { apiURL } from "./apiURL";
import showAlert from "../helpers/showAlert";

export default function getShowtimes(movieId, setMovie) {
  axios.get(`${apiURL}/movies/${movieId}/showtimes`)
    .then((resp) => setMovie(resp.data))
    .catch(() => {
      showAlert({
        title: "Erro no servidor!",
        text: "Tente novamente",
        showConfirmButton: true,
        timer: 0,
  })});
}
