const buttonOpenModal = document.querySelector(".open_modal");
const modalContainer = document.querySelector(".modal_container");

buttonOpenModal.addEventListener("click", () => {
  modalContainer.style.display = "flex";
});

modalContainer.addEventListener("click", (event) => {
  if (event.target.className === "modal_container") {
    modalContainer.style.transform = "none";
  }
});
