// hamburger
const linkList = document.querySelector(".link-list");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
// hamburger close on selection of destination
const aboutClose = document.querySelector('#about');
const projectClose = document.querySelector('#project');
const contactClose = document.querySelector('#contact');

openMenu.addEventListener("click", () => {
  linkList.show((linkList.style.display = "flex"), (linkList.style.top = "0"));
});
closeMenu.addEventListener("click", () => {
  linkList.close((linkList.style.top = "-125%"));
});

// hamburger close on selection of destination

aboutClose.addEventListener("click", () => {
  linkList.close((linkList.style.top = "-125%"));
});
projectClose.addEventListener("click", () => {
  linkList.close((linkList.style.top = "-125%"));
});
contactClose.addEventListener("click", () => {
  linkList.close((linkList.style.top = "-125%"));
});

// form dialog modal

const modal = document.querySelector("[data-modal]");
const openModalBtn = document.querySelector("[data-open-modal]");
const closeModalBtn = document.querySelector("[data-close-modal]");

openModalBtn.addEventListener("click", () => {
  if (form.checkValidity(true)){
    modal.showModal((modal.style.visibility = "visible"));
  } else {
    alert('All Fields Required!')
  };
});

closeModalBtn.addEventListener("click", () => {
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

// form validation 

const email = document.getElementById('email');
const nameX = document.getElementById('nameX');
const form = document.getElementById('contact-form');
const submit = document.getElementById('submit');



email.addEventListener("input", (e) => {
  if (email.validity.patternMismatch) {
    email.setCustomValidity("Need valid email address");
    email.style.border = '2px dashed red';
  } else {
    email.setCustomValidity("");
    email.style.border = '5px double #082f49'
  }
});

nameX.addEventListener("input", (e) => {
  if (nameX.validity.patternMismatch) {
    nameX.setCustomValidity(" Need full name");
    nameX.style.border = '2px dashed red';
  } else {
    nameX.setCustomValidity("");
    nameX.style.border = '5px double #082f49'
  }
});

// video player
const video = document.querySelectorAll('video');

video.forEach(video => {
  video.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
})