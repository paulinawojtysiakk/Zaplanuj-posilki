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

  const p = document.createElement("p");
  p.textContent = text;
  listItem.appendChild(p);

  const editButton = document.createElement("button");
  editButton.innerHTML = '<i class="fa-solid fa-pencil element_btn"></i>';
  editButton.classList.add("edit_element");
  editButton.addEventListener("click", function () {
    const textarea = document.createElement("textarea");
    textarea.value = p.textContent;
    textarea.classList.add("edit_element_textarea");
    listItem.replaceChild(textarea, p);
    textarea.focus();

    textarea.addEventListener("blur", function () {
      p.textContent = textarea.value;
      listItem.replaceChild(p, textarea);
    });
  });
  listItem.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash element_btn"></i>';
  deleteButton.classList.add("delete_element");
  deleteButton.addEventListener("click", function () {
    listItem.remove();
  });
  listItem.appendChild(deleteButton);

  return listItem;
}
