// hamburger
const linkList = document.querySelector(".link-list");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click", () => {
  linkList.show((linkList.style.display = "flex"), (linkList.style.top = "0"));
});
closeMenu.addEventListener("click", () => {
  linkList.close((linkList.style.top = "-125%"));
});

// form dialog modal

const openModal = document.querySelector("[data-open-modal]");
const closeModal = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");

openModal.addEventListener("click", () => {
  modal.showModal((modal.style.visibility = "visible"));
});
closeModal.addEventListener("click", () => {
  modal.close((modal.style.visibility = "hidden"));
});

// close modal outside modal box

modal.addEventListener("click", (e) => {
  const dialogDimensions = modal.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    modal.close();
  }
});
