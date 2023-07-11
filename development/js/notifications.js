const recipeNotification = document.getElementById("recipeNotification");
const mealPlanNotification = document.getElementById("mealPlanNotification");
const welcomeNotification = document.getElementById("welcomeNotification");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
btn1.addEventListener("click", () => {
  recipeNotification.style.display = "none";
});
btn2.addEventListener("click", () => {
  mealPlanNotification.style.display = "none";
});
btn3.addEventListener("click", () => {
  welcomeNotification.style.display = "none";
});
