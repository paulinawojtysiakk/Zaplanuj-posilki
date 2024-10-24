// Funkcja otwierająca okno modalne
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  const appBackgroundBtns = document.querySelector(".app_background_btns");
  const notifications = document.querySelector(".notifications");
  const tableWeek = document.querySelector(".table_container");
  modal.style.display = "block";
  appBackgroundBtns.style.display = "none";
  notifications.style.display = "none";
  tableWeek.style.display = "none";
}

// Funkcja zamykająca okno modalne
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  const appBackgroundBtns = document.querySelector(".app_background_btns");
  const notifications = document.querySelector(".notifications");
  const tableWeek = document.querySelector(".table_container");
  modal.style.display = "none";
  appBackgroundBtns.style.display = "flex";
  notifications.style.display = "block";
  tableWeek.style.display = "block";
}

// Nasłuchiwacze kliknięcia przycisków
document.getElementById("addRecipeBtn").addEventListener("click", function () {
  openModal("recipeModal");
});

document
  .getElementById("addMealPlanBtn")
  .addEventListener("click", function () {
    openModal("mealPlanModal");
  });

document
  .getElementById("closeRecipeBtn")
  .addEventListener("click", function () {
    closeModal("recipeModal");
  });
document
  .getElementById("closeScheduleBtn")
  .addEventListener("click", function () {
    closeModal("mealPlanModal");
  });

// ---------------------------------dodawanie elementów z Instrukcji oraz Składników

// Znajdowanie przycisków
const addInstructionBtn = document.getElementById("addInstructionBtn");
const addIngredientsBtn = document.getElementById("addIngredientsBtn");

// Znajdowanie pól tekstowych
const recipeInstructionInput = document.getElementById("recipeInstruction");
const recipeIngredientsInput = document.getElementById("recipeIngredients");

// Znajdowanie kontenera dla list
const instructionListContainer = document.getElementById("instructionList");
const ingredientListContainer = document.getElementById("ingredientList");

// Obsługa kliknięcia przycisku "Dodaj instrukcję"
addInstructionBtn.addEventListener("click", function () {
  const instruction = recipeInstructionInput.value.trim();

  if (instruction !== "") {
    const listItem = createListItem(instruction);
    instructionListContainer.appendChild(listItem);

    recipeInstructionInput.value = "";
  }
});

// Obsługa kliknięcia przycisku "Dodaj składnik"
addIngredientsBtn.addEventListener("click", function () {
  const ingredient = recipeIngredientsInput.value.trim();

  if (ingredient !== "") {
    const listItem = createListItem(ingredient);
    ingredientListContainer.appendChild(listItem);

    recipeIngredientsInput.value = "";
  }
});

// Funkcja tworząca element listy z przyciskami edycji i usuwania
function createListItem(text) {
  const listItem = document.createElement("li");
  listItem.classList.add("list_item");

  listItem.appendChild(document.createTextNode(text));

  const editButton = document.createElement("button");
  editButton.innerHTML =
    '<i class="fa-regular fa-pen-to-square" style="color: #ffb33b;"></i>';
  editButton.classList.add("edit_element");
  editButton.addEventListener("click", function () {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.classList.add("edit_element_textarea");
    listItem.textContent = ""; // Usuwamy dotychczasową treść elementu <li>
    listItem.appendChild(textarea);

    const saveButton = document.createElement("button");
    saveButton.innerHTML =
      '<i class="fa-solid fa-check" style="position: absolute;top: 0;right: 0;color: #468966;"></i>';
    saveButton.classList.add("save_element");
    saveButton.addEventListener("click", function () {
      text = textarea.value;
      listItem.textContent = text;
      listItem.appendChild(editButton); // Dodajemy przycisk edycji po zapisaniu zmian
      listItem.appendChild(deleteButton); // Dodajemy przycisk usuwania po zapisaniu zmian
    });

    listItem.appendChild(saveButton);
    textarea.focus();
  });

  listItem.appendChild(editButton);
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML =
    '<i class="fa-regular fa-trash-can" style="color: #bd4932;"></i>';
  deleteButton.classList.add("delete_element");
  deleteButton.addEventListener("click", function () {
    listItem.remove();
  });

  listItem.appendChild(deleteButton);

  return listItem;
}

//--------------------------------- localStorage

// --------------------------------- Recipe Logic

// Elements for Recipe Modal
const recipeModal = document.getElementById("recipeModal");
const recipeNameInput = document.getElementById("recipeName");
const recipeDescriptionInput = document.getElementById("recipeDescription");
const closeRecipeBtn = document.getElementById("closeRecipeBtn");

// Save Recipe and close modal
closeRecipeBtn.addEventListener("click", function () {
  saveRecipe(); // Save the recipe when closing the modal
  closeModal("recipeModal");
});

// Function to Save Recipe
function saveRecipe() {
  const recipeName = recipeNameInput.value.trim();
  const recipeDescription = recipeDescriptionInput.value.trim();
  const instructions = [];
  const ingredients = [];

  // Get all instruction items
  const instructionItems = instructionListContainer.querySelectorAll("li");
  instructionItems.forEach((item) =>
    instructions.push(item.textContent.trim())
  );

  // Get all ingredient items
  const ingredientItems = ingredientListContainer.querySelectorAll("li");
  ingredientItems.forEach((item) => ingredients.push(item.textContent.trim()));

  if (
    recipeName &&
    recipeDescription &&
    instructions.length &&
    ingredients.length
  ) {
    // Create a recipe object
    const recipe = {
      name: recipeName,
      description: recipeDescription,
      instructions: instructions,
      ingredients: ingredients,
    };

    // Save the recipe to localStorage
    saveRecipeToLocalStorage(recipe);

    // Clear the form
    clearRecipeForm();
  } else {
    alert("Uzupełnij wszystkie pola aby zapisać przepis.");
  }
}

// Save the recipe data to localStorage
function saveRecipeToLocalStorage(recipe) {
  let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
  recipes.push(recipe);
  localStorage.setItem("recipes", JSON.stringify(recipes));
}

// Clear the recipe form after saving
function clearRecipeForm() {
  recipeNameInput.value = "";
  recipeDescriptionInput.value = "";
  instructionListContainer.innerHTML = "";
  ingredientListContainer.innerHTML = "";
}

// ----------------------------- Modal Logic for Meal Plan
const mealPlanModal = document.getElementById("mealPlanModal");
const mealPlanNameInput = document.querySelector(".plan_input");
const mealPlanDescriptionInput = document.querySelector(
  ".plan_input_description"
);
const mealPlanWeekInput = document.querySelector(".plan_input_number");
const closeScheduleBtn = document.getElementById("closeScheduleBtn");

// Save Meal Plan and close modal
closeScheduleBtn.addEventListener("click", function () {
  saveMealPlan();
  closeModal("mealPlanModal");
});

function saveMealPlan() {
  const mealPlanName = mealPlanNameInput.value.trim();
  const mealPlanDescription = mealPlanDescriptionInput.value.trim();
  const mealPlanWeekNumber = mealPlanWeekInput.value.trim();

  if (mealPlanName && mealPlanDescription && mealPlanWeekNumber) {
    // Create a meal plan object
    const mealPlan = {
      name: mealPlanName,
      description: mealPlanDescription,
      weekNumber: mealPlanWeekNumber,
    };

    saveMealPlanToLocalStorage(mealPlan);

    clearMealPlanForm();

    // Optionally, display the saved plans after adding a new one
    displaySavedMealPlans();
  } else {
    alert("Wypełnij wszystkie pola aby zapisać plan.");
  }
}

function saveMealPlanToLocalStorage(mealPlan) {
  let mealPlans = JSON.parse(localStorage.getItem("mealPlans")) || [];
  mealPlans.push(mealPlan);
  localStorage.setItem("mealPlans", JSON.stringify(mealPlans));
}

function clearMealPlanForm() {
  mealPlanNameInput.value = "";
  mealPlanDescriptionInput.value = "";
  mealPlanWeekInput.value = "";
}

function displaySavedMealPlans() {
  const mealPlans = JSON.parse(localStorage.getItem("mealPlans")) || [];
  const mealPlanContainer = document.getElementById("mealPlanContainer");

  // Clear existing displayed plans before adding new ones
  mealPlanContainer.innerHTML = "";

  mealPlans.forEach((plan, index) => {
    const planElement = document.createElement("div");
    planElement.classList.add("meal-plan");

    // Create the content for each plan
    planElement.innerHTML = `
      <h2>Plan ${index + 1}: ${plan.name}</h2>
      <p>Opis: ${plan.description}</p>
      <p>Tydzień: ${plan.weekNumber}</p>
    `;

    mealPlanContainer.appendChild(planElement);
  });
}

// Initial call to display saved plans when the page loads
document.addEventListener("DOMContentLoaded", function () {
  displaySavedMealPlans();
});
