import axios from "axios";

import { apiURL } from "./apiURL";

export default function getMovies(setMovies) {
  axios.get(`${apiURL}/movies`).then((resp) => setMovies(resp.data));
}
