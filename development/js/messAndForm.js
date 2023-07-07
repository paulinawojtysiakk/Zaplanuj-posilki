const menuBtns = document.querySelectorAll('.app_list_item');
const sections = document.querySelectorAll('.screen');
let isButtonClicked = false;

menuBtns.forEach((menuBtn, index) => {
    menuBtn.addEventListener('click', () => {
        // Usuń ramkę i ikonę z poprzedniego zaznaczonego elementu
        const activeMenuBtn = document.querySelector('.app_list_item.active');
        if (activeMenuBtn) {
            activeMenuBtn.classList.remove('active');
        }

        // Dodaj ramkę i ikonę do klikniętego elementu
        menuBtn.classList.add('active');

        // Pokaż odpowiednią sekcję na podstawie klikniętego przycisku
        sections.forEach((section, sectionIndex) => {
            if (index === sectionIndex) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });

        isButtonClicked = true;
    });
});

const menuBtns2 = {
    menuBtn1: document.getElementById('menuBtn1'),
    menuBtn2: document.getElementById('menuBtn2'),
    menuBtn3: document.getElementById('menuBtn3')
};

for (const btnKey in menuBtns2) {
    const btn = menuBtns2[btnKey];
    btn.addEventListener('mouseover', function () {
        this.style.cursor = 'pointer';
    });
}

// Ukryj wszystkie sekcje na początku, jeśli żaden przycisk nie jest kliknięty
if (!isButtonClicked) {
    sections.forEach((section) => {
        section.style.display = 'none';
    });
}
