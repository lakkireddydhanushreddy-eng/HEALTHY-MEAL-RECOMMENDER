document.getElementById("mealForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    healthConditions: document.getElementById("conditions").value.split(","),
    dietPreference: document.getElementById("diet").value,
    allergies: document.getElementById("allergies").value.split(","),
    budget: document.getElementById("budget").value,
    prepTime: Number(document.getElementById("time").value)
  };

  const response = await fetch("http://localhost:3000/recommend", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const meals = await response.json();
  const results = document.getElementById("results");
  results.innerHTML = "";

  meals.forEach(meal => {
    results.innerHTML += `
      <div class="meal">
        <h3>${meal.name}</h3>
        <p>Calories: ${meal.calories}</p>
        <p>Prep Time: ${meal.prepTime} mins</p>
      </div>
    `;
  });
});
