const navEl = document.querySelector("#categories");
console.log(`Number of categories:  ${navEl.children.length}`);

const navElul = navEl.querySelectorAll("ul");
navElul.forEach((number) => { 
console.log(`Category: ${number.previousElementSibling.textContent}`)
console.log(`Elements: ${number.children.length}`) } );