import { popularRecipe } from "../data/PRdata.js";

const sr = ScrollReveal();

sr.reveal('img', {
  duration: 1000,
  distance: '20px',
  delay: 200,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',

});
sr.reveal('li', {
  duration: 1000,
  origin: 'right',
  distance: '200px',
  delay: 200,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
  reset: true,
});

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productName = urlParams.get('name');

let selectedRecipe = popularRecipe.find(item => item.name === productName);


selectedRecipe = `
  <h1>${selectedRecipe.name}</h1>
  <p class="description">${selectedRecipe.description}</p>
  <div class="image-background">
    <img src="${selectedRecipe.image}">
  </div>
  <h1>Description</h1>
  <p class="description">${selectedRecipe.descriptionTwo}</p>
  <p class="description">${selectedRecipe.descriptionThree}</p>

  <h1>Ingredients</h1>
  <div class="list">
  ${selectedRecipe.Ingredients[0].one ? `<p class="Ingredients">${selectedRecipe.Ingredients[0].one}</p>` : ''}
  ${selectedRecipe.Ingredients[0].two ? `<p class="Ingredients">${selectedRecipe.Ingredients[0].two}</p>` : ''}
  ${selectedRecipe.Ingredients[0].three ? `<p class="Ingredients">${selectedRecipe.Ingredients[0].three}</p>` : ''}
  ${selectedRecipe.Ingredients[0].four ? `<p class="Ingredients">${selectedRecipe.Ingredients[0].four}</p>` : ''}
  ${selectedRecipe.Ingredients[0].five ? `<p class="Ingredients">${selectedRecipe.Ingredients[0].five}</p>` : ''}
  ${selectedRecipe.Ingredients[0].six ? `<p class="Ingredients">${selectedRecipe.Ingredients[0].six}</p>` : ''}
  </div>
  <h1>Steps</h1>
  <div class="list">
  ${selectedRecipe.Steps[0].stepOne ? `<li>${selectedRecipe.Steps[0].stepOne}</li>` : ''}
  ${selectedRecipe.Steps[0].stepTwo ? `<li>${selectedRecipe.Steps[0].stepTwo}</li>` : ''}
  ${selectedRecipe.Steps[0].stepThree ? `<li>${selectedRecipe.Steps[0].stepThree}</li>` : ''}
  ${selectedRecipe.Steps[0].stepFour ? `<li>${selectedRecipe.Steps[0].stepFour}</li>` : ''}
  ${selectedRecipe.Steps[0].stepFive ? `<li>${selectedRecipe.Steps[0].stepFive}</li>` : ''}
  </div>
  `

  document.querySelector('.container').innerHTML = selectedRecipe;
  


