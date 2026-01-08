async function getRecommendations() {
  const bmiText = document.getElementById("result").innerText;
  const bmi = parseFloat(bmiText.split("BMI: ")[1]);

  const res = await fetch("http://localhost:3000/recommend", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem("token")
    },
    body: JSON.stringify({
      bmi,
      goal: goal.value,
      budget: budget.value,
      prepTime: prepTime.value
    })
  });

  const meals = await res.json();
  mealsDiv.innerHTML = "";

  meals.forEach(m => {
    mealsDiv.innerHTML += `
      <div class="meal">
        <h4>${m.name}</h4>
        <p>Calories: ${m.calories}</p>
        <p>Prep Time: ${m.prepTime} mins</p>
      </div>
    `;
  });
}
