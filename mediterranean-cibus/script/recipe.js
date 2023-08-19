const sr = ScrollReveal();

sr.reveal('.description', {
  duration: 1000,
  origin: 'bottom',
  distance: '20px',
  delay: 200,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
  reset: true,
});
sr.reveal('img', {
  duration: 1000,
  distance: '20px',
  delay: 200,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
  reset: true,
});
sr.reveal('h1', {
  duration: 1000,
  origin: 'bottom',
  distance: '30px',
  delay: 200,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
  reset: true,
});
sr.reveal('li', {
  duration: 1000,
  origin: 'right',
  distance: '200px',
  delay: 200,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
  reset: true,
});
