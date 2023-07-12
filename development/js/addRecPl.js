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
