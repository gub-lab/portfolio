const description = document.querySelector("#logo");

let decalageX = 0;
let decalageY = 0;
let deplacement = false;

description.addEventListener("pointerdown", (event) => {
  event.preventDefault();

  deplacement = true;
  description.setPointerCapture(event.pointerId);

  const position = description.getBoundingClientRect();

  decalageX = event.clientX - position.left;
  decalageY = event.clientY - position.top;

  description.style.bottom = "auto";
  description.style.right = "auto";
  description.style.left = `${position.left}px`;
  description.style.top = `${position.top}px`;
});

description.addEventListener("pointermove", (event) => {
  if (!deplacement || !description.hasPointerCapture(event.pointerId)) {
    return;
  }

  event.preventDefault();

  description.style.left = `${event.clientX - decalageX}px`;
  description.style.top = `${event.clientY - decalageY}px`;
});

function terminerDeplacement(event) {
  deplacement = false;

  if (description.hasPointerCapture(event.pointerId)) {
    description.releasePointerCapture(event.pointerId);
  }
}

description.addEventListener("pointerup", terminerDeplacement);
description.addEventListener("pointercancel", terminerDeplacement);