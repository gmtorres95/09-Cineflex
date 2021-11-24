import axios from "axios";

import { apiURL } from "./apiURL";

export default function postOrder(body, setIsOrderDone) {
  axios.post(`${apiURL}/seats/book-many`, body)
    .then(() => setIsOrderDone(true))
    .catch(() => {alert(`Erro no servidor\nTente novamente`)});
}
