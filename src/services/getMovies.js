import axios from "axios";

import { apiURL } from "./apiURL";
import showAlert from "../helpers/showAlert";

export default function getMovies(setMovies) {
  axios.get(`${apiURL}/movies`)
    .then((resp) => setMovies(resp.data))
    .catch(() => {
      showAlert({
        title: "Erro no servidor!",
        text: "Tente novamente",
        showConfirmButton: true,
        timer: 0,
  })});
}
