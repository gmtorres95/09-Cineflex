import axios from "axios";

import { apiURL } from "./apiURL";

export default function getSeats(sessionId, setSession) {
  axios.get(`${apiURL}/showtimes/${sessionId}/seats`).then((resp) => setSession(resp.data));
}
