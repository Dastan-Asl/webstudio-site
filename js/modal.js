const refs = {
  backdrop: document.querySelector(".backdrop"),
  openModal: document.querySelector(".hero__button"),
  closeModal: document.querySelector(".modal__close-button"),
};

const backdrop = () => {
  refs.backdrop.classList.toggle("is-hidden");
};

refs.openModal.addEventListener("click", backdrop);
refs.closeModal.addEventListener("click", backdrop);
