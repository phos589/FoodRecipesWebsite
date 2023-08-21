import { popularRecipe } from '../data/PRdata.js';
import { data } from '../data/dataSearch.js';
//make the HTML
let populerReceipeHTML = '';

popularRecipe.forEach((product) => {
  populerReceipeHTML += `
  <a href="PopularRecipes.html?name=${product.name}" style="">
      <div class="food-grid">
        <div class="food-item">
          <img src=${product.image} class="image-Item">
            <div>
              <p>${product.name}</p>
              <p>${product.description}</p>
              <p>${product.descriptionTwo}</p>
          </div>
        </div>
  </a>      
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
});
// search

const searchInput = document.querySelector(".input");
const resultsList = document.querySelector(".products-grid");

let searchHTML = '';

searchInput.addEventListener("input", function() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredResults = data.filter(item =>
    item.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm))
  );
  displayResults(filteredResults);
});

function displayResults(results) {
  searchHTML = '';

  if (results.length === 0) {
    resultsList.innerHTML = "<p>No results found.</p>";
  } else {
    results.forEach(result => {
      searchHTML += `
      <a href="recipe.html?name=${result.name}" style="">
      <div class="grid-box">
        <img src=${result.images}>
        <p>${result.name}</p>
      </div>
    </a>
      `
    });
  }
  resultsList.innerHTML = searchHTML;
}