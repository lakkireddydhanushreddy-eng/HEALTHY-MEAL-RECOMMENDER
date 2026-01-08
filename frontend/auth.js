async function login() {
  const res = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  });
  const data = await res.json();
  localStorage.setItem("token", data.token);
  window.location = "dashboard.html";
}
