import axios from "axios";

import * as URL from "./apiURL";
import showAlert from "../helper/showAlert";

export default function getMovies(setMovies) {
  axios.get(`${URL}/movies`)
    .then((resp) => setMovies(resp.data))
    .catch(() => {
      showAlert({
        title: "Erro no servidor!",
        text: "Tente novamente",
        showConfirmButton: true,
        timer: 0,
  })});
}
