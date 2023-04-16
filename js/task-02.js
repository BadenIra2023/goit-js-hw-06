const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const addIngredientsEl = document.querySelector("#ingredients");

const element = ingredients.map(ingredient => {
  const tegliEl = document.createElement("li");
  tegliEl.textContent = ingredient;
  tegliEl.classList.add("item");
  
  return tegliEl;
});

addIngredientsEl.append(...element);