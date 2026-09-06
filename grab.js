const description = document.querySelector(".desc");

let decalageX = 0;
let decalageY = 0;

description.addEventListener("pointerdown", (event) => {
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
  if (!description.hasPointerCapture(event.pointerId)) {
    return;
  }

  description.style.left = `${event.clientX - decalageX}px`;
  description.style.top = `${event.clientY - decalageY}px`;
});

description.addEventListener("pointerup", (event) => {
  description.releasePointerCapture(event.pointerId);
});