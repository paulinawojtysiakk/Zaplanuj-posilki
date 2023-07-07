
    // Funkcja otwierająca okno modalne
    function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

    // Funkcja zamykająca okno modalne
    function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

    // Nasłuchiwacze kliknięcia przycisków
    document.getElementById('addRecipeBtn').addEventListener('click', function() {
    openModal('recipeModal');
});

    document.getElementById('addMealPlanBtn').addEventListener('click', function() {
    openModal('mealPlanModal');
});


