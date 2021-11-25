import axios from "axios";

import { apiURL } from "./apiURL";
import showAlert from "../helper/showAlert";

export default function postOrder(body, setIsOrderDone) {
  axios.post(`${apiURL}/seats/book-many`, body)
    .then(() => {
      setIsOrderDone(true);
      showAlert({
        icon: "success",
        title: "Pedido confirmado!",
        text: "Acompanhe os detalhes do seu pedido...",
        timer: 2000,
      })
    })
    .catch(() => {
      showAlert({
        title: "Erro no servidor!",
        text: "Tente novamente",
        showConfirmButton: true,
        goToPreviousPage: true,
        timer: 0,
  })});
}
