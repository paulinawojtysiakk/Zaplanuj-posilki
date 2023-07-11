// const menuBtns = document.querySelectorAll('.app_list_item');
// const sections = document.querySelectorAll('.screen');
// let isButtonClicked = false;
//
// menuBtns.forEach((menuBtn, index) => {
//     menuBtn.addEventListener('click', () => {
//         // Usuń ramkę i ikonę z poprzedniego zaznaczonego elementu
//         const activeMenuBtn = document.querySelector('.app_list_item.active');
//         if (activeMenuBtn) {
//             activeMenuBtn.classList.remove('active');
//         }
//
//         // Dodaj ramkę i ikonę do klikniętego elementu
//         menuBtn.classList.add('active');
//
//         // Pokaż odpowiednią sekcję na podstawie klikniętego przycisku
//         sections.forEach((section, sectionIndex) => {
//             section.style.display = index === sectionIndex ? 'block' : 'none';
//         });
//
//         isButtonClicked = true;
//     });
// });
//
// const menuBtns2 = {
//     menuBtn1: document.getElementById('menuBtn1'),
//     menuBtn2: document.getElementById('menuBtn2'),
//     menuBtn3: document.getElementById('menuBtn3')
// };
//
// for (const btnKey in menuBtns2) {
//     const btn = menuBtns2[btnKey];
//     btn.addEventListener('mouseover', function () {
//         this.style.cursor = 'pointer';
//     });
// }
//
// // Ukryj wszystkie sekcje na początku, jeśli żaden przycisk nie jest kliknięty
// if (!isButtonClicked) {
//     sections.forEach((section) => {
//         section.style.display = 'none';
//     });
// }
//
// // Dodawanie imienia z pola tekstowego
// const nameOutput = document.getElementById('place_name');
// const nameInput = document.getElementById('input_name');
// const submitButton = document.getElementById('button_name');
// const nameForm = document.getElementById('name_form');
// const recipeScreen = document.getElementById('recipe_screen');
//
// submitButton.addEventListener('click', function () {
//     const inputValue = nameInput.value.trim();
//
//     if (inputValue !== '') {
//         // Zapisz imię w LocalStorage
//         localStorage.setItem('name', inputValue);
//
//         nameOutput.textContent = inputValue;
//         nameForm.style.display = 'none';
//         recipeScreen.style.display = 'block';
//     } else {
//         alert('Wprowadź imię do pola tekstowego');
//     }
// });
//
// // Sprawdź, czy imię istnieje w LocalStorage
// const savedName = localStorage.getItem('name');
// if (savedName) {
//     nameOutput.textContent = savedName;
//     nameForm.style.display = 'none';
//     recipeScreen.style.display = 'block';
// }

const menuBtns = document.querySelectorAll(".app_list_item");
const sections = document.querySelectorAll(".screen");
let isButtonClicked = false;

menuBtns.forEach((menuBtn, index) => {
  menuBtn.addEventListener("click", () => {
    // Jeśli button jest nieaktywny, zakończ funkcję
    if (menuBtn.disabled) return;

    // Usuń ramkę i ikonę z poprzedniego zaznaczonego elementu
    const activeMenuBtn = document.querySelector(".app_list_item.active");
    if (activeMenuBtn) {
      activeMenuBtn.classList.remove("active");
    }

    // Dodaj ramkę i ikonę do klikniętego elementu
    menuBtn.classList.add("active");

    // Pokaż odpowiednią sekcję na podstawie klikniętego przycisku
    sections.forEach((section, sectionIndex) => {
      section.style.display = index === sectionIndex ? "block" : "none";
    });

    isButtonClicked = true;
  });
});

const menuBtns2 = {
  menuBtn1: document.getElementById("menuBtn1"),
  menuBtn2: document.getElementById("menuBtn2"),
  menuBtn3: document.getElementById("menuBtn3"),
};

for (const btnKey in menuBtns2) {
  const btn = menuBtns2[btnKey];
  btn.addEventListener("mouseover", function () {
    this.style.cursor = "pointer";
  });
}

// Ukryj wszystkie sekcje na początku, jeśli żaden przycisk nie jest kliknięty
if (!isButtonClicked) {
  sections.forEach((section) => {
    section.style.display = "none";
  });
}

// Dodawanie imienia z pola tekstowego
const nameOutput = document.getElementById("place_name");
const nameInput = document.getElementById("input_name");
const submitButton = document.getElementById("button_name");
const nameForm = document.getElementById("name_form");
const recipeScreen = document.getElementById("recipe_screen");

submitButton.addEventListener("click", function () {
  const inputValue = nameInput.value.trim();

  if (inputValue !== "") {
    // Zapisz imię w LocalStorage
    localStorage.setItem("name", inputValue);

    nameOutput.textContent = inputValue;
    nameForm.style.display = "none";
    recipeScreen.style.display = "block";

    // Aktywuj buttony menu
    menuBtns.forEach((menuBtn) => {
      menuBtn.disabled = false;
    });
  } else {
    alert("Wprowadź imię do pola tekstowego");
  }
});

// Sprawdź, czy imię istnieje w LocalStorage
const savedName = localStorage.getItem("name");
if (savedName) {
  nameOutput.textContent = savedName;
  nameForm.style.display = "none";
  recipeScreen.style.display = "block";

  // Aktywuj buttony menu
  menuBtns.forEach((menuBtn) => {
    menuBtn.disabled = false;
  });
} else {
  // Wyłącz buttony menu
  menuBtns.forEach((menuBtn) => {
    menuBtn.disabled = true;
  });
}
