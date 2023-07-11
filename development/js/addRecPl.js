// Funkcja otwierająca okno modalne
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  const appBackgroundBtns = document.querySelector(".app_background_btns");
  modal.style.display = "block";
  appBackgroundBtns.classList.add("hide");
}

// Funkcja zamykająca okno modalne
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  const appBackgroundBtns = document.querySelector(".app_background_btns");
  modal.style.display = "none";
  appBackgroundBtns.classList.remove("hide");
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
  const instruction = recipeInstructionInput.value; // Pobranie wartości z pola tekstowego

  if (instruction.trim() !== "") {
    // Sprawdzenie, czy pole tekstowe nie jest puste

    const listItem = document.createElement("li"); // Tworzenie nowego elementu <li>
    listItem.textContent = instruction; // Ustawienie tekstu elementu <li>

    instructionListContainer.appendChild(listItem); // Dodanie elementu <li> do kontenera listy

    recipeInstructionInput.value = ""; // Wyczyszczenie pola tekstowego
  }
});

// Obsługa kliknięcia przycisku "Dodaj składnik"
addIngredientsBtn.addEventListener("click", function () {
  const ingredient = recipeIngredientsInput.value; // Pobranie wartości z pola tekstowego

  if (ingredient.trim() !== "") {
    // Sprawdzenie, czy pole tekstowe nie jest puste

    const listItem = document.createElement("li"); // Tworzenie nowego elementu <li>
    listItem.textContent = ingredient; // Ustawienie tekstu elementu <li>

    ingredientListContainer.appendChild(listItem); // Dodanie elementu <li> do kontenera listy

    recipeIngredientsInput.value = ""; // Wyczyszczenie pola tekstowego
  }
});
