import { popularRecipe } from '../data/PRdata.js';

//make the HTML
let populerReceipeHTML = '';

popularRecipe.forEach((product) => {
  populerReceipeHTML += `
      <div class="food-grid">
        <div class="food-item">
          <img src=${product.image} class="image-Item">
            <div>
              <p>${product.name}</p>
              <p>${product.description}</p>

            <p>
              How to make a ${product.name}
            </p>
              <p>${product.Steps[0].stepOne}</p>
              <p>${product.Steps[0].stepTwo}</p>
              <p>${product.Steps[0].stepThree}</p>
              <p>${product.Steps[0].stepFour}</p>
              <p>${product.Steps[0].stepFive}</p>
              <p>${product.Steps[0].stepSix}</p>
              <p>${product.Steps[0].stepSeven}</p>
          </div>
        </div>
  `
})

document.querySelector('.grid-js').innerHTML = populerReceipeHTML;

// animate elements on scroll
  const sr = ScrollReveal();

  sr.reveal('.food-grid', {
    duration: 1000,   
    origin: 'left',
    distance: '20px',
    delay: 200,       
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)', 
    reset: true,      
});



