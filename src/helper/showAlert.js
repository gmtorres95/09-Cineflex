import Swal from "sweetalert2";

export default function showAlert(params) {
  const {
    icon = "error",
    title = "",
    text = "",
    timer = 1000,
    imageUrl = "",
    showConfirmButton = false,
    goToPreviousPage = false,
  } = params;

  Swal.fire({
    icon,
    title,
    text,
    timer,
    imageUrl,
    showConfirmButton,
  }).then(() => {
    if (showConfirmButton && goToPreviousPage) window.history.back();
    else if(showConfirmButton) window.location.reload();
  });
}
