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

