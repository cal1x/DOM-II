// Logo heading click event - Change color to grey upon click
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('click', (event) => {
  logoHeading.style.color = 'grey';
  event.preventDefault()
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

const header = document.querySelector('.main-navigation');
header.addEventListener('focus', (event) => {
  header.style.color = 'blue';
  header.style.fontWeight = 'bold';
})

// Wheel event on body - Change color on scroll
const body = document.querySelector('body');
body.addEventListener('wheel', () => {
  body.style.backgroundColor = "pink";
});

// Key event on keydown back to default
body.addEventListener('keydown', () => {
  body.style.backgroundColor = 'white';
});

// On load event color change
window.onload = (event) => {
  body.style.backgroundColor = 'salmon';
};

// Nav links mouseenter event
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(l => {
  l.addEventListener('mouseover', () => {
    l.style.color = 'red';
    setTimeout(() => {
      l.style.color = 'gray';
    }, 500);
      //Prevent Default
  l.addEventListener("click", event => {
    event.preventDefault();
  });
})
  });

 // Event Propagation
const textDiv = document.querySelector('.text-content')
textDiv.addEventListener('click', event => {
  event.target.style.backgroundColor = 'orange'
}, false)
const textP = document.querySelector('.text-content p')
textP.addEventListener('click', event => {
  event.target.style.backgroundColor = "green"
}) 