import axios from "axios";

import { apiURL } from "./apiURL";

export default function getShowtimes(movieId, setMovie) {
  axios.get(`${apiURL}/movies/${movieId}/showtimes`).then((resp) => setMovie(resp.data))
}
