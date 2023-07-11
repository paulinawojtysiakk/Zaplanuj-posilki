// Znajdowanie kontenera na wyświetlanie przepisów
const recipesContainer = document.getElementById("recipesContainer");

// Pobranie przepisów z localStorage
const recipes = JSON.parse(localStorage.getItem("recipes"));

// Wyświetlanie przepisów
if (recipes) {
  recipes.forEach((recipe) => {
    const recipeElement = createRecipeElement(recipe);
    recipesContainer.appendChild(recipeElement);
  });
}

// Funkcja tworząca element przepisu
function createRecipeElement(recipe) {
  const recipeDiv = document.createElement("div");
  recipeDiv.classList.add("recipe");

  const recipeName = document.createElement("h2");
  recipeName.textContent = recipe.name;
  recipeDiv.appendChild(recipeName);

  const recipeDescription = document.createElement("p");
  recipeDescription.textContent = recipe.description;
  recipeDiv.appendChild(recipeDescription);

  const instructionsTitle = document.createElement("h3");
  instructionsTitle.textContent = "Instrukcje:";
  recipeDiv.appendChild(instructionsTitle);

  const instructionsList = document.createElement("ul");
  recipe.instructions.forEach((instruction) => {
    const instructionItem = document.createElement("li");
    instructionItem.textContent = instruction;
    instructionsList.appendChild(instructionItem);
  });
  recipeDiv.appendChild(instructionsList);

  const ingredientsTitle = document.createElement("h3");
  ingredientsTitle.textContent = "Składniki:";
  recipeDiv.appendChild(ingredientsTitle);

  const ingredientsList = document.createElement("ul");
  recipe.ingredients.forEach((ingredient) => {
    const ingredientItem = document.createElement("li");
    ingredientItem.textContent = ingredient;
    ingredientsList.appendChild(ingredientItem);
  });
  recipeDiv.appendChild(ingredientsList);

  return recipeDiv;
}
