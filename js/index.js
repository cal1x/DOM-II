// Logo heading click event - Change color to grey upon click
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('click', (event) => {
  logoHeading.style.color = 'grey';
});

// Logo Heading Double click Event - Change color to red
logoHeading.addEventListener('dblclick', (event) => {
  logoHeading.style.color = 'red';
});

// Intro p zoom - Increases Size event
const introParagraph = document.querySelector('.intro p');
introParagraph.addEventListener('mouseover', (event) => {
  introParagraph.style.transform = 'scale(1.2)';
});

// Intro p zoom out default behavior
introParagraph.addEventListener('mouseout', (event) => {
  introParagraph.style.transform = 'scale(1)';
});

// const header = document.querySelector('.main-navigation');
// header.addEventListener('focus', (event) => {
//   header.style.color = 'blue';
//   header.style.fontWeight = 'bold';
// })

// Wheel event on body - Change color on scroll
const body = document.querySelector('body');
body.addEventListener('wheel', () => {
  body.style.backgroundColor = "pink";
})

// Key event on keydown back to default
body.addEventListener('keydown', () => {
  body.style.backgroundColor = 'white';
})