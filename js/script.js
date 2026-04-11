const container = document.querySelector('.timeline');

let isDown = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
  isDown = true;
  container.classList.add('active');
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
  isDown = false;
});

container.addEventListener('mouseup', () => {
  isDown = false;
});

container.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * .6; // scroll speed multiplier
  container.scrollLeft = scrollLeft - walk;
});

const circles = document.querySelectorAll(
  ".circle-in-progress, .circle-not-started"
);

circles.forEach(circle => {
  circle.addEventListener("click", () => {
    circle.classList.toggle("active");
  });
});
