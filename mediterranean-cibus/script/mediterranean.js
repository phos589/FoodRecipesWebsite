import { data } from '../data/data.js';

function getRandomElements(arr, numElements) {
  const shuffled = arr.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, numElements);
}

const numElementsToSelect = 3;

const randomElements = getRandomElements(data, numElementsToSelect);
console.log(randomElements);

let populerReceipeHTML = '';

randomElements.forEach((product) => {
  populerReceipeHTML += `
  <a href="recipe.html?name=${product.name}" class="no-style-link">
      <div class="food-grid">
        <div class="food-item">
          <img src=${product.images} class="image-Item">
            <div>
              <p>${product.name}</p>
              <p>${product.description}</p>
          </div>
        </div>
  </a>      
  `
})

document.querySelector('.grid-js').innerHTML = populerReceipeHTML;

  const sr = ScrollReveal();

  sr.reveal('.food-grid', {
    duration: 1000,   
    origin: 'left',
    distance: '20px',
    delay: 200,       
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',    
});

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
      <a href="recipe.html?name=${result.name}" class="no-style-link">
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