const description = document.querySelector(".desc");

let decalageX = 0;
let decalageY = 0;

description.addEventListener("pointerdown", (event) => {
  description.setPointerCapture(event.pointerId);

  const position = description.getBoundingClientRect();

  decalageX = event.clientX - position.left;
  decalageY = event.clientY - position.top;
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